import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './HomePage';

function App() {
  return (
    <div>
      <div>
        <HomePage />
      </div>
    </div>

  );
}

export default App;






