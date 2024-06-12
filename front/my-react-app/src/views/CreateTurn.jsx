import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addTurn } from "../store";

const CreateTurn = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please log in to create a turn");
      return;
    }

    const newTurn = {
      date,
      time,
      status: "active",
      userId: user.id,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/appointments/schedule",
        newTurn
      );
      dispatch(addTurn(response.data));
      setDate("");
      setTime("");
    } catch (error) {
      console.error("Error creating turn:", error);
    }
  };

  return (
    <div>
      <h1>Create Turn</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create Turn</button>
      </form>
    </div>
  );
};

export default CreateTurn;
