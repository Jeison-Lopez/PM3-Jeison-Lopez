import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entity/Appointment";

export class AppointmentService {
  private appointmentRepository = AppDataSource.getRepository(Appointment);

  async getAllAppointments(): Promise<Appointment[]> {
    return this.appointmentRepository.find({ relations: ["user"] });
  }

  async getAppointmentById(id: number): Promise<Appointment | null> {
    return this.appointmentRepository.findOne({
      where: { id },
      relations: ["user"],
    });
  }

  async createAppointment(
    date: Date,
    time: string,
    userId: number
  ): Promise<Appointment> {
    const appointment = new Appointment();
    appointment.date = date;
    appointment.time = time;
    appointment.user = { id: userId } as any;
    appointment.status = "active";

    return this.appointmentRepository.save(appointment);
  }

  async cancelAppointment(id: number): Promise<void> {
    const appointment = await this.getAppointmentById(id);
    if (appointment) {
      appointment.status = "cancelled";
      await this.appointmentRepository.save(appointment);
    }
  }
}
