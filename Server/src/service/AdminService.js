import AdminModel from "../model/AdminModel.js";
import jwt from "jsonwebtoken";
import { JWT_KEY } from "../config/config.js";



export const getAdminService = async (req) => {
    const { email, password } = req.body;
    try {
        const admin = await AdminModel.findOne({ email });
        if (!admin) return { status : "Error", error : 'Admin not found'}
    
        const isMatch = (password === admin.password);
        if (!isMatch) return { status : "Error", error : 'Password mismatch'}
    
        const token = jwt.sign({ id: admin._id, role: "admin" }, JWT_KEY);
    
        return { status : "Success", data : token}
      } catch (e) {
        return { status : "Error", error : e.toString()}
      }

}


export const getAdminByIDService = async (req) => {
    try {
        const data = await AdminModel.findById(req.admin).select('-password');
        return { status : "Success", data : data}
    } catch (e) {
        return { status : "Error", error : e.toString()}

    }
}
