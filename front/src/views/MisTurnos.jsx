// views/MisTurnos.jsx

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import TurnoItem from "../components/Turno";
import { setUserAppointments } from "../actions/appointmentsActions";

const MisTurnos = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // Asegúrate de que state.user.user obtenga correctamente el usuario
  const userAppointments = useSelector(
    (state) => state.appointments.userAppointments
  );

  useEffect(() => {
    const fetchUserAppointments = async () => {
      try {
        if (!user) {
          console.error("Usuario no autenticado");
          return;
        }

        const response = await axios.get(
          `http://localhost:3000/turns?userId=${user.id}`
        );
        dispatch(setUserAppointments(response.data));
      } catch (error) {
        console.error("Error fetching user appointments:", error);
      }
    };

    if (user) {
      fetchUserAppointments();
    }
  }, [dispatch, user]);

  return (
    <div>
      <h1>Mis Turnos</h1>
      {userAppointments && userAppointments.length > 0 ? (
        userAppointments.map((turno) => (
          <TurnoItem key={turno.id} turno={turno} />
        ))
      ) : (
        <p>Aún no tienes turnos agendados.</p>
      )}
    </div>
  );
};

export default MisTurnos;
