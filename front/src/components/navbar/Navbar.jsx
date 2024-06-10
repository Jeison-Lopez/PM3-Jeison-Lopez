import logo from "../../assets/logo.svg";
import avatar from "../../assets/logo.svg";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoSection}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.linkSection}>
        <span>PRINCIPAL</span>
      </div>
      <div className={styles.linkSection}>
        <span>RESERVAR</span>
      </div>
      <div className={styles.linkSection}>
        <span>ACERCA</span>
      </div>
      <div className={styles.linkSection}>
        <span>CONTACTO</span>
      </div>
      <div>
        <img src={avatar} alt="logo" />
      </div>
    </div>
  );
}
