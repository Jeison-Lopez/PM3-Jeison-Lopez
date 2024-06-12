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
exports.cancelAppointment = exports.createAppointment = exports.getAppointmentById = exports.getAllAppointments = void 0;
const appointmentsService_1 = require("../services/appointmentsService");
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointmentsService_1.getAllAppointmentsService)();
        if (appointments.length > 0) {
            res.status(200).json(appointments);
        }
        else {
            res.status(404).json({ message: "Appointments not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.getAllAppointments = getAllAppointments;
const getAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield (0, appointmentsService_1.getAppointmentByIdService)(Number(req.params.id));
    if (appointment) {
        res.status(200).json(appointment);
    }
    else {
        res.status(404).json({ message: "Appointment not found" });
    }
});
exports.getAppointmentById = getAppointmentById;
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time, userId } = req.body;
    const appointment = yield (0, appointmentsService_1.createAppointmentService)({
        date,
        time,
        userId,
    });
    if (appointment) {
        res.status(201).json(appointment);
    }
    else {
        res.status(400).json({ message: "Error creating appointment" });
    }
});
exports.createAppointment = createAppointment;
const cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield (0, appointmentsService_1.cancelAppointmentService)(Number(req.params.id));
    if (appointment) {
        res.status(200).json({ message: "Cancelado" });
    }
    else {
        res.status(404).json({ message: "Appointment not found" });
    }
});
exports.cancelAppointment = cancelAppointment;
