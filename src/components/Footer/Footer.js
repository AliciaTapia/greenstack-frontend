import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>GREENUP SOLUTIONS</h3>
          <p>Quality landscaping services</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Contact</h4>
          <p>contact@greenup.com</p>
          <p>(123) 456-7890</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Hours</h4>
          <p>Mon-Fri: 8am-6pm</p>
          <p>Sat: 9am-2pm</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Greenup Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;