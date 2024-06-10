import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";

// Servicio para obtener todos los turnos
export const getAllAppointmentsService = async () => {
  return await AppDataSource.getRepository(Appointment).find({
    relations: ["user"],
  });
};

// Servicio para obtener un turno por su ID
export const getAppointmentByIdService = async (id: number) => {
  return await AppDataSource.getRepository(Appointment).findOne({
    where: { id },
    relations: ["user"],
  });
};

// Servicio para crear un nuevo turno
export const createAppointmentService = async (data: {
  date: string;
  time: string;
  userId: number;
}) => {
  const user = await AppDataSource.getRepository(User).findOne({
    where: { id: data.userId },
  });

  if (user) {
    const appointment = new Appointment();
    appointment.date = data.date;
    appointment.time = data.time;
    appointment.status = "active";
    appointment.user = user;

    return await AppDataSource.getRepository(Appointment).save(appointment);
  }
  return null;
};

// Servicio para cancelar un turno por su ID
export const cancelAppointmentService = async (id: number) => {
  const appointment = await AppDataSource.getRepository(Appointment).findOne({
    where: { id },
  });
  if (appointment) {
    appointment.status = "cancelled";
    return await AppDataSource.getRepository(Appointment).save(appointment);
  }
  return null;
};
