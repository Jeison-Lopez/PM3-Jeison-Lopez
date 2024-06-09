export enum AppointmentStatus {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}
export interface Appointment {
  id: number;
  date: string;
  time: string;
  userId: number;
  status: AppointmentStatus;
}
