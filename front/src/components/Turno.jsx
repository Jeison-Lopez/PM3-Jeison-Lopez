import PropTypes from "prop-types";

const TurnoItem = ({ turno }) => {
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

TurnoItem.propTypes = {
  turno: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      birthdate: PropTypes.string.isRequired,
      nDni: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TurnoItem;
