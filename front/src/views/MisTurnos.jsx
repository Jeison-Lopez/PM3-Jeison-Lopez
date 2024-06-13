import React, { useState, useEffect } from "react";
import axios from "axios";
import Turno from "../components/Turno";

const MisTurnos = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/turns");
        setTurnos(response.data); // Asigna los turnos recibidos del backend al estado
      } catch (error) {
        console.error("Error fetching turns:", error);
      }
    };

    fetchTurnos();
  }, []); // La dependencia vacía [] indica que useEffect se ejecuta solo una vez al montarse el componente

  return (
    <div>
      <h1>Mis Turnos</h1>
      {turnos.map((turno) => (
        <Turno key={turno.id} turno={turno} />
      ))}
    </div>
  );
};

export default MisTurnos;
