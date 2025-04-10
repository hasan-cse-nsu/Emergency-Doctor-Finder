import { drService, getAllSpecialtiesService, getDrService, getSearchDrService } from '../service/DrService.js';

export const postDoctors = async (req, res) => {

    let result = await drService(req);
    return res.json({result})
}

export const getAllDoctors= async (req, res)=>{
    
    let result = await getDrService(req);
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




