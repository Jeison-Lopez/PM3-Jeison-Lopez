// src/views/MisTurnos.jsx
import React, { useState } from "react";
import turnos from "../helpers/myTurns";
import Turno from "../components/Turno";

const MisTurnos = () => {
  const [misTurnos, setMisTurnos] = useState(turnos);

  return (
    <div>
      <h1>Mis Turnos</h1>
      {misTurnos.map((turno) => (
        <Turno key={turno.id} turno={turno} />
      ))}
    </div>
  );
};

export default MisTurnos;
