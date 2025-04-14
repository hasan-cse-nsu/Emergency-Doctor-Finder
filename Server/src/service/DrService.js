import DrModel from "../model/DrModel.js";
import AppointmentModel from './../model/AppointmentModel.js';

export const drService = async (req) => {
    try {
        let reqBody = req.body;
        let data = await DrModel.create(reqBody);
        return { status : "Success", data : data}
    }catch (e) {
        return { status : "Error", error : e.toString()}

    }
}

export const getDrService = async () => {
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
        userId: req.user,
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
        const appointments = await AppointmentModel.find({ userId: req.user }).populate("doctorId");
        return { status : "Success", data : appointments}
      } catch (e) {
        return { status : "Error", error : e.toString()}
    }
  };