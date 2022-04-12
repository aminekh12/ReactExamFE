import React, { Fragment } from "react";

import styles from "./Form.module.css";

const Form = props => {
  return (
    <div className={styles.center}>
      <h1>Créer des filières</h1>
      <h6>Ici vous allez créer les differentes fillères de votre école.</h6>
      <div className={styles.container}>
        <div className={styles.center}>
          <span className={styles.steps}>1</span>
          <span className={styles.separators}></span>
          <span className={styles.steps}>2</span>
          <span className={styles.separators}></span>
          <span className={styles.steps}>3</span>
          <span className={styles.separators}></span>
          <span className={styles.steps}>4</span>
        </div>
        <hr />
        <form className={styles.inputContainer} action="post">
          <label className={styles.textInputLabel}>Nom de filière</label>
          <div align="right">
            <input type="text" name="name" className={styles.textInput} />
            <br />
            <input
              type="submit"
              name="submit"
              className={styles.submitInput}
              value="AJOUTER"
            />
          </div>
        </form>
        <hr />
      </div>
    </div>
  );
};

export default Form;
