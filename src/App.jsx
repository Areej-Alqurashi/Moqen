
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import HomePage from "./HomePage";
import KhutbahPage from "./KhutbahPage";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="main" element={< MainPage />} />

      </Routes>
    
  );
}

export default App;
