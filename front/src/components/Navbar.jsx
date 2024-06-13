// src/components/Navbar.jsx
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist}>
        <li>
          <a href="/" className={styles.navitem}>
            Home
          </a>
        </li>
        <li>
          <a href="/login" className={styles.navitem}>
            Login
          </a>
        </li>
        <li>
          <a href="/register" className={styles.navitem}>
            Register
          </a>
        </li>
        {/* Puedes añadir más opciones de navegación según necesites */}
      </ul>
    </nav>
  );
};

export default Navbar;
