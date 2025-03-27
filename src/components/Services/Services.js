import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    { name: 'Lawn Care', description: 'Regular maintenance and beautification' },
    { name: 'Planting', description: 'Flowers, shrubs, and tree installation' },
    { name: 'Hardscaping', description: 'Patios, walkways, and stone work' }
  ];

  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
