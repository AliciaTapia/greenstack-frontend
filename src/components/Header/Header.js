
// src/components/Header/Header.js  ... to include the module for reference 
import React from 'react';
import styles from './Header.module.css';  // Note the import style

const Header = () => {
  return (
    <header className={styles.header}>  {/* Using the scoped class */}
      <div className={styles.logo}>GREENUP SOLUTIONS</div>
      <nav>
        <a href="#services" className={styles.navLink}>Services</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;


// // src/components/Header/Header.js
// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">GREENUP SOLUTIONS</div>
//       <nav>
//         <a href="#services">Services</a>
//         <a href="#contact">Contact</a>
//         <a href="tel:+1234567890" className="phone">Call Now</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;