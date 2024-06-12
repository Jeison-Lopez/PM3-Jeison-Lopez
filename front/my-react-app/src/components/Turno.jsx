import React from "react";

const Turno = ({ turn, onCancel }) => {
  return (
    <div>
      <p>Date: {turn.date}</p>
      <p>Time: {turn.time}</p>
      <p>Status: {turn.status}</p>
      <p>User: {turn.user.name}</p>
      {turn.status !== "cancelled" && (
        <button onClick={() => onCancel(turn.id)}>Cancel Turn</button>
      )}
    </div>
  );
};

export default Turno;
