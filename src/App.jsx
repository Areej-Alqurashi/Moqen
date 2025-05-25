
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import HomePage from "./HomePage";
import KhutbahPage from "./KhutbahPage"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/khutbah" element={<KhutbahPage />} /> 
    </Routes>
  );
}

export default App;
