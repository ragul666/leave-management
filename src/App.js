import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from '../src/pages/Login'
import SignUp from '../src/pages/SignUp'
import { Button } from 'primereact/button';
import PrimeReact from 'primereact/api';
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import '../src/App.css'


PrimeReact.ripple = true;
function App() {

  return (
    <div>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" exact element={<Login />} />

      </Routes>
    </div>
  )
}

export default App