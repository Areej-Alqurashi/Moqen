import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import HomePage from "./Pages/HomePage";
import ContentDetails from './Pages/ContentDetails';

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
