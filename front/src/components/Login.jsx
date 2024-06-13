import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../actions/userActions";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });

      const user = response.data; // Suponiendo que el backend devuelve el usuario

      dispatch(setUser(user)); // Actualiza el estado global con la información del usuario
      setError(""); // Limpiar error si se loguea correctamente
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Usuario o contraseña incorrectos"); // Mensaje de error
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
