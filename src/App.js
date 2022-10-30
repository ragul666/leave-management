import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from '../src/pages/Login'
import { Button } from 'primereact/button';
import "primereact/resources/themes/rhea/theme.css";


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App