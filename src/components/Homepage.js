import React from "react";

import styles from "./Homepage.module.css";

const Homepage = props => {
  return (
    <div className={styles.center}>
      <h5>TEAM ISGA</h5>
      <h1>Createur de la plannification des examens</h1>
      <h6>
        Ce site web va vous gerer automatiquement un planning d'examen,
        seulement remplir les information <br />
        et nous feron le reste!
      </h6>
      <button className={styles.btn1}>Commencer !</button>
      <h6>Creé par le groupe d'Amine</h6>
    </div>
  );
};

export default Homepage;
