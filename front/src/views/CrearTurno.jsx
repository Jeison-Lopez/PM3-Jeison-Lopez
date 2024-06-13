import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const CrearTurno = () => {
  const user = useSelector((state) => state.user); // Obtener el usuario del store de Redux

  const [formData, setFormData] = useState({
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.error("Usuario no autenticado");
      return;
    }

    const nuevoTurno = {
      date: formData.date,
      time: formData.time,
      user: user.id, // Enviamos solo el ID del usuario
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/turns",
        nuevoTurno
      );
      console.log("Turno creado:", response.data);
      // Aquí podrías manejar la actualización de la UI o redireccionar
    } catch (error) {
      console.error("Error creando turno:", error);
    }
  };

  return (
    <div>
      <h1>Crear Nuevo Turno</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Fecha:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Hora:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Crear Turno</button>
      </form>
    </div>
  );
};

export default CrearTurno;
