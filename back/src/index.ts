import app from "./server";
import userRoutes from "./routes/userRoutes";
import appointmentRoutes from "./routes/appointmentRoutes";
import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";

app.use("/users", userRoutes);
app.use("/appointments", appointmentRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) =>
    console.log("Error during Data Source initialization:", error)
  );

export default app;
