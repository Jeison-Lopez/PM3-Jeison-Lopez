// src/index.ts
import express from "express";
import { AppDataSource } from "../config/data-source";
import userRoutes from "../routes/userRoutes";
import appointmentRoutes from "../routes/appointmentRoutes";
import { PORT } from "../config/envs";

const app = express();

app.use(express.json());

app.use("/user", userRoutes);
app.use("/turns", appointmentRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
