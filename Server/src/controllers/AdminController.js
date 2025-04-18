import { getAdminByIDService, getAdminService } from "../service/AdminService.js";


export const getAdmin = async (req, res) => {

    let result = await getAdminService(req);
    if (result.status === "Error") {
        return res.status(400).json({ msg: result.error });
      }
      return res.status(201).json({ result });
    }


export const getAdminByID = async (req, res) => {

    let result = await getAdminByIDService(req);
    return res.json({result})
  }