import express from "express";
import app from "./server";
import { PORT } from "./config/envs";
import userRoutes from "./routes/userRoutes";
import appointmentRoutes from "./routes/appointmentRoutes";
import morgan from "morgan";

app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRoutes);
app.use("/appointments", appointmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
