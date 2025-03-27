// src/components/ContactForm/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Source: 'Website'
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/(formData.Email)) {
      setError('Please enter a valid email (e.g., user@example.com)');
      return;
    }
    setError('');

    try {
      await axios.post(
        'https://greenstackfunctions-linux.azurewebsites.net/api/leadsAPI',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      alert('Thank you! We will contact you shortly.');
      setFormData({
        FirstName: '',
        LastName: '',
        Email: '',
        Phone: '',
        Source: 'Website'
      });
    } catch (err) {
      console.error('Error:', err);
      setError(err.response?.data?.message || 'Submission failed. Please try again.');
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
    <div className={styles.container}>
      <h2 className={styles.title}>Get a Free Estimate</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="FirstName" className={styles.label}>First Name</label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="LastName" className={styles.label}>Last Name</label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="Email" className={styles.label}>Email</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className={styles.input}
            required
          />
          {error && <span className={styles.error}>{error}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="Phone" className={styles.label}>Phone (Optional)</label>
          <input
            type="tel"
            id="Phone"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <input type="hidden" name="Source" value="Website" />
        
        <button type="submit" className={styles.submitBtn}>
          Request Free Estimate
        </button>
      </form>
    </div>
  );
};

export default ContactForm;



// // src/components/ContactForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './ContactForm.module.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     FirstName: '',
//     LastName: '',
//     Email: '',
//     Phone: '',
//     Source: 'Website' // Default value
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!/^\w+@\w+\.\w+$/.test(formData.Email)) {
//       alert('Please enter a valid email (e.g., user@example.com)');
//       return;
//     }

//     try {
//       await axios.post(
//         'https://greenstackfunctions-linux.azurewebsites.net/api/leadsAPI',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//       );
//       alert('Thank you! We will contact you shortly.');
//       setFormData({
//         FirstName: '',
//         LastName: '',
//         Email: '',
//         Phone: '',
//         Source: 'Website'
//       });
//     } catch (err) {
//       console.error('Error:', err);
//       alert(`Error: ${err.response?.data?.message || err.message}`);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <h2>Get a Free Estimate</h2>
//       <form onSubmit={handleSubmit} className="contact-form">
//         <div className="form-group">
//           <input
//             type="text"
//             name="FirstName"
//             placeholder="First Name"
//             value={formData.FirstName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             name="LastName"
//             placeholder="Last Name"
//             value={formData.LastName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             name="Email"
//             placeholder="Email"
//             value={formData.Email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="tel"
//             name="Phone"
//             placeholder="Phone"
//             value={formData.Phone}
//             onChange={handleChange}
//           />
//         </div>
//         <input type="hidden" name="Source" value="Website" />
//         <button type="submit" className="submit-btn">Submit</button>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;