// src/services/appointmentsService.ts
import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";

export const AppointmentService = {
  getAllAppointments: async () => {
    return await AppDataSource.getRepository(Appointment).find({
      relations: ["user"],
    });
  },

  getAppointmentById: async (id: number) => {
    return await AppDataSource.getRepository(Appointment).findOne({
      where: { id },
      relations: ["user"],
    });
  },

  createAppointment: async (data: {
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
      appointment.status = "scheduled";
      appointment.user = user;

      return await AppDataSource.getRepository(Appointment).save(appointment);
    }
    return null;
  },

  cancelAppointment: async (id: number) => {
    const appointment = await AppDataSource.getRepository(Appointment).findOne({
      where: { id },
    });
    if (appointment) {
      appointment.status = "cancelled";
      return await AppDataSource.getRepository(Appointment).save(appointment);
    }
    return null;
  },
};
