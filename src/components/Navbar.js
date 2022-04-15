import React, { Fragment } from "react";

import styles from './Navbar.module.css'

const Navbar = props => {
  return (
    <div>
    <script src="https://kit.fontawesome.com/961108d38f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>

    <div className={styles.nav}>
      <img className={styles.logo} src="logo.png" alt="logo-ISGA"/>
      <button className={`${styles.right} ${styles.btn1}`}>
        Site De l'ISGA
      </button>
    </div>
    </div>
  );
};

export default Navbar;
