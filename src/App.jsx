import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import HomePage from "./HomePage";
import KhutbahPage from "./KhutbahPage";
import ContentDetails from './ContentDetails';

function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/content/:id" element={<ContentDetails />} />
      <Route path="/main" element={<MainPage />} />

    </Routes>
  );
}

export default App;
