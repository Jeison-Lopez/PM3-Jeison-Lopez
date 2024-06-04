import express from 'express';
import { getAppointments, getAppointment, scheduleAppointment, cancelAppointment } from '../controllers/appointmentController';

const router = express.Router();

router.get('/', getAppointments);
router.get('/:id', getAppointment);
router.post('/schedule', scheduleAppointment);
router.put('/cancel', cancelAppointment);

export default router;
