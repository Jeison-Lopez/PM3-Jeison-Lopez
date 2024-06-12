import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./views/Home";
import MisTurnos from "./views/MisTurnos";
import Register from "./views/Register";
import Login from "./views/Login";
import CreateTurn from "./views/CreateTurn";
import Navbar from "./components/Navbar";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mis-turnos" element={<MisTurnos />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-turn" element={<CreateTurn />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
