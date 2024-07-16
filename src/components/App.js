import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';
import '../styles/App.css'

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/form" id="form-link">Form</Link>
        <Link to="/formref" id="form-ref-link">Form-Ref</Link>
        <Link to="/formstate" id="form-state-link">Form-State</Link>
      </nav>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/formref" element={<FormRef />} />
        <Route path="/formstate" element={<FormState />} />
      </Routes>
    </div>
  );
}

export default App;
