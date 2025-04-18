import DrModel from "../model/DrModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { JWT_KEY } from "../config/config.js";
import AppointmentModel from './../model/AppointmentModel.js';

export const postDrService = async (req) => {
    const { name, email,specialty, password } = req.body;

    try {
        const existingDoctor = await DrModel.findOne({ email });
        if (existingDoctor) 
            return { status : "Error", error : 'Doctor already exists'}
    
        const hashed = await bcrypt.hash(password, 10);
        const data = await DrModel.create({ name, email, specialty, password: hashed });
    
        return { status : "Success", data : data}
    }catch (e) {
        return { status : "Error", error : e.toString()}
    }
}


export const getDrService = async (req) => {
    const { email, password } = req.body;
    try {
        const doctor = await DrModel.findOne({ email });
        if (!doctor) return { status : "Error", error : 'Doctor not found'}
    
        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) return { status : "Error", error : 'Password mismatch'}
    
        const token = jwt.sign({ id: doctor._id }, JWT_KEY, { expiresIn: '1d' });
    
        const data = ({ token, doctor: { id: doctor._id, name: doctor.name, email: doctor.email } });

        return { status : "Success", data : data}
      } catch (e) {
        return { status : "Error", error : e.toString()}
      }

}


export const getDrByIDService = async (req) => {
    try {
        const data = await DrModel.findById(req.id).select('-password');
        return { status : "Success", data : data}
    } catch (e) {
        return { status : "Error", error : e.toString()}

    }
}

export const getAllDrService = async () => {
    try {

        let query = {};
        let projection = "name specialty contact location availability experience image";
        let data = await DrModel.find(query, projection)
        return { status : "Success", data : data}

    } catch (e) {
        return { status : "Error", error : e.toString()}
    }
}

export const getSearchDrService = async (req) => {
    try {

        const { query } = req.query;  
        const filter = {};

        if (query) {
        filter.$or = [
            { name: { $regex: query, $options: 'i' } },
            { specialty: { $regex: query, $options: 'i' } },
        ];
        }

        const doctors = await DrModel.find(filter);
        return { status : "Success", data : doctors}

    } catch (e) {
        return { status : "Error", error : e.toString()}
    }
}


export const getAllSpecialtiesService = async () => {
    try {
      const specialties = await DrModel.distinct("specialty"); 
      return specialties;
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching specialties' });
    }
  };


export const postAppointmentsService = async (req) => {
try {
    const { dateTime } = req.body;
    
    const appointment = await AppointmentModel.create({
        userId: req.id,
        doctorId: req.params.doctorId,
        dateTime: new Date(dateTime),
    });
    return { status : "Success", data : appointment}
    } catch (e) {
    return { status : "Error", error : e.toString()}
    }
}


export const getAppointmentsService = async (req) => {
    try {
        const appointments = await AppointmentModel.find({ userId: req.id }).populate("doctorId");
        return { status : "Success", data : appointments}
      } catch (e) {
        return { status : "Error", error : e.toString()}
    }
  };


  export const getPendingDoctorService = async (req) => {
    try {
        const doctors = await DrModel.find({ isApproved: false });
        return { status : "Success", data : doctors}
    } catch (e) {
        return { status : "Error", error : e.toString()}

    }
}


export const putApprovalDoctorService = async (req) => {
    try {
        const doctor = await DrModel.findById(req.params.id);
        if (!doctor) return res.status(404).json({ msg: "Doctor not found" });

        doctor.isApproved = true;
        doctor.notifications.push({
            message: "🎉 Your profile has been approved by the admin.",
            date: new Date(),
            read: false,
    });

    await doctor.save();


        return { status : "Success", data : doctor}
    } catch (e) {
        return { status : "Error", error : e.toString()}

    }
}


export const getNotificationsService = async (req) => {
    try {
        const doctor = await DrModel.findById(req.id);        
        return { status : "Success", data : doctor.notifications || []}
    } catch (e) {
        return { status : "Error", error : e.toString()}

    }
}


export const getMarkNotificationService = async (req) => {
    try {
        const doctor = await DrModel.findById(req.id);
        doctor.notifications = doctor.notifications.map((n) => ({ ...n, read: true }));

        await doctor.save();


        return { status : "Success", data : doctor.notifications || []}
    } catch (e) {
        return { status : "Error", error : e.toString()}

    }
}