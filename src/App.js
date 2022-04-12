import React, { Fragment } from 'react'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Form />
      {/* <Homepage /> */}
    </Fragment>
  );
}

export default App;
