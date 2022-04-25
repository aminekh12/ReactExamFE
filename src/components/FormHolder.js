import React, { useState } from "react";
import 'antd/dist/antd.css';
import styles from "./Form.module.css";
import { Steps, Button, message } from 'antd';
import Filieres from "./Filieres";
import Niveaux from "./Niveaux";
import Matieres from "./Matieres";
import Professeurs from "./Professeurs";
import Salles from "./Salles";
import Classes from "./Classes";

const { Step } = Steps;
const steps = [
  {
    title: 'Professeurs',
    content: 'Last-content',
  },
  {
    title: 'filieres',
    content: 'filieres',
  },
  {
    title: 'Niveaux',
    content: 'Second-content',
  },
  {
    title: 'Matieres',
    content: 'Last-content',
  },
  {
    title: 'Classes',
    content: 'Last-content',
  },
  {
    title: 'Salles',
    content: 'Last-content',
  },
];
function FormHolder(props) {
  const [current, setCurrent] = React.useState(0);
  const PageDisplay = () => {
    if (current === 0) {
      return <Professeurs />;
    } else if (current === 1) {
      return <Filieres />;
    } else if (current === 2) {
      return <Niveaux />;
    } else if (current === 3) {
      return <Matieres />;
    }else if (current === 4) {
      return <Classes />;
    } else if (current === 5) {
      return <Salles />;
    }
  };
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div className={styles.center}>

      <div className={styles.container}>

        <Steps size="small" current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="body">{PageDisplay()}</div>
        <div className="steps-action">
          {current > 0 && (
            <Button className={styles.submitInput} style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button className={styles.submitInput} type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button className={styles.submitInput} type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}

        </div>


      </div>
    </div>
  );
}

export default FormHolder;