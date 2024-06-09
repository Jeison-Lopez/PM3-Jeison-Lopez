import "reflect-metadata";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { AppDataSource } from "./config/data-source";
import userRoutes from "./routes/userRoutes";
import appointmentRoutes from "./routes/appointmentRoutes";
import { DB_PORT, PORT } from "./config/envs";
import app from "./server";
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRoutes);
app.use("/appointments", appointmentRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log(`Data Base is running on port ${DB_PORT}`);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) =>
    console.log("Error during Data Source initialization:", error)
  );

export default app;
