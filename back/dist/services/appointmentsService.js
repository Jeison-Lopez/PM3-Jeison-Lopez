"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentService = exports.createAppointmentService = exports.getAppointmentByIdService = exports.getAllAppointmentsService = void 0;
const data_source_1 = require("../config/data-source");
const Appointment_1 = require("../entities/Appointment");
const User_1 = require("../entities/User");
const getAllAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).find({
        relations: ["user"],
    });
});
exports.getAllAppointmentsService = getAllAppointmentsService;
const getAppointmentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).findOne({
        where: { id },
        relations: ["user"],
    });
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const createAppointmentService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.AppDataSource.getRepository(User_1.User).findOne({
        where: { id: data.userId },
    });
    if (user) {
        const appointment = new Appointment_1.Appointment();
        appointment.date = data.date;
        appointment.time = data.time;
        appointment.status = "active";
        appointment.user = user;
        return yield data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).save(appointment);
    }
    return null;
});
exports.createAppointmentService = createAppointmentService;
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).findOne({
        where: { id },
    });
    if (appointment) {
        appointment.status = "cancelled";
        return yield data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).save(appointment);
    }
    return null;
});
exports.cancelAppointmentService = cancelAppointmentService;
