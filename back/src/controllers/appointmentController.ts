// src/controllers/appointmentController.ts
import { Request, Response } from "express";
import { AppointmentService } from "../services/turnsService";

export const getAllAppointments = async (req: Request, res: Response) => {
  const appointments = await AppointmentService.getAllAppointments();
  if (appointments) {
    res.status(200).json(appointments);
  } else {
    res.status(404).json({ message: "Appointments not found" });
  }
};

export const getAppointmentById = async (req: Request, res: Response) => {
  const appointment = await AppointmentService.getAppointmentById(
    Number(req.params.id)
  );
  if (appointment) {
    res.status(200).json(appointment);
  } else {
    res.status(404).json({ message: "Appointment not found" });
  }
};

export const createAppointment = async (req: Request, res: Response) => {
  const { date, time, userId } = req.body;
  const appointment = await AppointmentService.createAppointment({
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

export const cancelAppointment = async (req: Request, res: Response) => {
  const appointment = await AppointmentService.cancelAppointment(
    Number(req.params.id)
  );
  if (appointment) {
    res.status(200).json(appointment);
  } else {
    res.status(404).json({ message: "Appointment not found" });
  }
};
