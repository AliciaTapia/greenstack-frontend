import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    FirstName: '',  // Changed to match Azure Function expectations
    LastName: '',
    Email: '',
    Phone: '',
    Source: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        ProcessingInstruction.env.REACT_APP_API_URL,
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      alert('Lead submitted successfully!');
      
      // Reset form after successful submission
      setFormData({
        FirstName: '',
        LastName: '',
        Email: '',
        Phone: '',
        Source: ''
      });
    } catch (err) {
      console.error('Error details:', err.response?.data || err.message);
      alert(`Error submitting lead: ${err.response?.data?.message || err.message}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>GreenStack CRM</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="FirstName"
          placeholder="First Name"
          value={formData.FirstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="LastName"
          placeholder="Last Name"
          value={formData.LastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          value={formData.Email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="Phone"
          placeholder="Phone"
          value={formData.Phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Source"
          placeholder="Source"
          value={formData.Source}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await axios.post(
//       'http://localhost:7071/api/leadsAPI',
//       formData,
//       {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }
//     );