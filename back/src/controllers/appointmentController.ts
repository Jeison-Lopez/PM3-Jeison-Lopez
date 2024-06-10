import { Request, Response } from "express";
import {
  getAllAppointmentsService,
  getAppointmentByIdService,
  createAppointmentService,
  cancelAppointmentService,
} from "../services/appointmentsService";

// Controlador para obtener todos los turnos
export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await getAllAppointmentsService();
    if (appointments.length > 0) {
      res.status(200).json(appointments);
    } else {
      res.status(404).json({ message: "Appointments not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controlador para obtener un turno por su ID
export const getAppointmentById = async (req: Request, res: Response) => {
  const appointment = await getAppointmentByIdService(Number(req.params.id));
  if (appointment) {
    res.status(200).json(appointment);
  } else {
    res.status(404).json({ message: "Appointment not found" });
  }
};

// Controlador para crear un nuevo turno
export const createAppointment = async (req: Request, res: Response) => {
  const { date, time, userId } = req.body;
  const appointment = await createAppointmentService({
    date,
    time,
    userId,
  });
  if (appointment) {
    res.status(201).json(appointment);
  } else {
    res.status(400).json({ message: "Error creating appointment" });
  }
};

// Controlador para cancelar un turno por su ID
export const cancelAppointment = async (req: Request, res: Response) => {
  const appointment = await cancelAppointmentService(Number(req.params.id));
  if (appointment) {
    res.status(200).json({ message: "Cancelado" });
  } else {
    res.status(404).json({ message: "Appointment not found" });
  }
};
