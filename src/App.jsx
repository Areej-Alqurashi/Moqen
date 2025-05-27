import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import HomePage from "./HomePage";
import KhutbahPage from "./KhutbahPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/khutab" element={<KhutbahPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
