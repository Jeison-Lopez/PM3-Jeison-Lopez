import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import express from "express";
import app from "./server";
import { PORT } from "./config/envs";
import userRoutes from "./routes/userRoutes";
import appointmentRoutes from "./routes/appointmentRoutes";
import morgan from "morgan";

// Initialize data source
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");

    // Middlewares
    app.use(express.json());
    app.use(morgan("dev"));

    // Routes
    app.use("/users", userRoutes);
    app.use("/appointments", appointmentRoutes);

    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
