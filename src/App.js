import React, { Fragment } from 'react'
import FormHolder from './components/FormHolder'
import Navbar from './components/Navbar';
import Form from './components/Form';
import Salles from "./components/Salles";

function App() {
  return (
    <Fragment>
      <Navbar />
      <FormHolder />
    </Fragment>
  );
}

export default App;
