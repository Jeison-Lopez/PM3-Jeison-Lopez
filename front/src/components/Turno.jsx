// src/components/Turno.jsx
import React from "react";

const Turno = ({ turno }) => {
  return (
    <div>
      <p>ID: {turno.id}</p>
      <p>Fecha: {turno.date}</p>
      <p>Hora: {turno.time}</p>
      <p>Estado: {turno.status}</p>
      <p>Usuario:</p>
      <ul>
        <li>ID: {turno.user.id}</li>
        <li>Nombre: {turno.user.name}</li>
        <li>Email: {turno.user.email}</li>
        <li>Fecha de nacimiento: {turno.user.birthdate}</li>
        <li>DNI: {turno.user.nDni}</li>
      </ul>
    </div>
  );
};

export default Turno;
