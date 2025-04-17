import { getAllSpecialtiesService, getAppointmentsService, getAllDrService, getSearchDrService, postAppointmentsService, postDrService, getDrService, getDrByIDService } from '../service/DrService.js';

export const postDoctors = async (req, res) => {

    let result = await postDrService(req);
    if (result.status === "Error") {
        return res.status(400).json({ msg: result.error });
      }
      return res.status(201).json({ result });}

export const getDoctors = async (req, res) => {

    let result = await getDrService(req);
    if (result.status === "Error") {
        return res.status(400).json({ msg: result.error });
      }
      return res.status(201).json({ result });}


export const getDoctorByID = async (req, res) => {

    let result = await getDrByIDService(req);
    return res.json({result})
  }

export const getAllDoctors= async (req, res)=>{
    
    let result = await getAllDrService();
    return res.json({result});
}

export const getSearchDoctors= async (req, res)=>{
    
    let result = await getSearchDrService(req);
    return res.json({result});
}

export const getAllSpecialties= async (req, res)=>{
    
    let result = await getAllSpecialtiesService();
    return res.json({result});
}


export const postAppointments= async (req, res)=>{
    
    let result = await postAppointmentsService(req);
    if (result.status === "Error") {
        return res.status(400).json({ msg: result.error });
      }
      return res.status(201).json({ result });
}


export const getAppointments= async (req, res)=>{
    
    let result = await getAppointmentsService(req);
    if (result.status === "Error") {
        return res.status(400).json({ msg: result.error });
      }
      return res.status(201).json({ result });
}


