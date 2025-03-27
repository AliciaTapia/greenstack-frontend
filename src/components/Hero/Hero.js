import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Professional Landscaping Services</h1>
        <p>Quality work at affordable prices</p>
        <button className={styles.ctaButton}>Get a Free Estimate</button>
      </div>
    </section>
  );
};

export default Hero;