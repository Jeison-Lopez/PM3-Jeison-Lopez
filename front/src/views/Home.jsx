// src/views/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>HOME</h1>
    </div>
  );
};

export default Home;
