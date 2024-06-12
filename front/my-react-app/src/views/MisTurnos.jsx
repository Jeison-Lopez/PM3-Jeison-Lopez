import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setTurns } from "../store";
import Turno from "../components/Turno";
import { useNavigate } from "react-router-dom";

const MisTurnos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const turns = useSelector((state) => state.userAppointments);

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    const fetchTurns = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/appointments?userId=${user.id}`
        );
        dispatch(setTurns(response.data));
      } catch (error) {
        console.error("Failed to fetch turns:", error);
      }
    };

    fetchTurns();
  }, [dispatch, user, navigate]);

  const handleCancel = async (id) => {
    try {
      await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
      const updatedTurns = turns.map((turn) =>
        turn.id === id ? { ...turn, status: "cancelled" } : turn
      );
      dispatch(setTurns(updatedTurns));
    } catch (error) {
      console.error("Failed to cancel turn:", error);
    }
  };

  if (!turns.length) {
    return <p>No turns scheduled.</p>;
  }

  return (
    <div>
      <h1>My Turns</h1>
      {turns.map((turn) => (
        <Turno key={turn.id} turn={turn} onCancel={handleCancel} />
      ))}
    </div>
  );
};

export default MisTurnos;
