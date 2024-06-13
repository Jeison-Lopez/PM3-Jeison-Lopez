import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist}>
        <li className={styles.navitem}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={styles.navitem}>
          <Link to="/mis-turnos">Mis Turnos</Link>
        </li>
        <li className={styles.navitem}>
          <Link to="/register">Registrar</Link>
        </li>
        <li className={styles.navitem}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
