import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KhutabPage from "./KhutabPage";
import HomePage from './HomePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/khutab" element={<KhutabPage />} />
    </Routes>
  );
}

export default App;






