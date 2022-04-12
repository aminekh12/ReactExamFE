import React from "react";

import styles from './Navbar.module.css'

const Navbar = props => {
  return (
    <div className={styles.nav}>
      <img className={styles.logo} src="logo.png" alt="logo-ISGA"/>
      <button className={`${styles.right} ${styles.btn1}`}>
        Site De l'ISGA
      </button>
    </div>
  );
};

export default Navbar;
