// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import MisTurnos from "./views/MisTurnos";
import Register from "./views/Register";
import Login from "./views/Login";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mis-turnos" element={<MisTurnos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
