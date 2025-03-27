import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
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