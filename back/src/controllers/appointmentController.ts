import { Request, Response } from "express";
import { AppointmentService } from "../services/turnsService";
const appointmentService = new AppointmentService();

export const getAllAppointments = async (req: Request, res: Response) => {
  const appointments = await appointmentService.getAllAppointments();
  res.json(appointments);
};

export const getAppointmentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const appointment = await appointmentService.getAppointmentById(Number(id));
  res.json(appointment);
};

export const scheduleAppointment = async (req: Request, res: Response) => {
  const { date, time, userId } = req.body;
  const newAppointment = await appointmentService.createAppointment(
    new Date(date),
    time,
    userId
  );
  res.json(newAppointment);
};

export const cancelAppointment = async (req: Request, res: Response) => {
  const { id } = req.body;
  await appointmentService.cancelAppointment(Number(id));
  res.json({ message: "Appointment cancelled" });
};
