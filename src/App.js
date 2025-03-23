import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    source: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/leads', formData);
      alert('Lead submitted successfully!');
    } catch (err) {
      alert('Error submitting lead');
    }
  };

  return (
    <div>
      <h1>GreenStack CRM</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Source"
          value={formData.source}
          onChange={(e) => setFormData({ ...formData, source: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
