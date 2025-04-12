import UserModel from "../model/UserModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { JWT_KEY } from "../config/config.js";


export const postUserService = async (req) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) 
            return { status : "Error", error : 'User already exists'}
    
        const hashed = await bcrypt.hash(password, 10);
        const data = await UserModel.create({ name, email, password: hashed });
    
        return { status : "Success", data : data}
    }catch (e) {
        return { status : "Error", error : e.toString()}
    }

}

export const getUserService = async (req) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) return { status : "Error", error : 'User not found'}
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return { status : "Error", error : 'Password mismatch'}
    
        const token = jwt.sign({ id: user._id }, JWT_KEY, { expiresIn: '1d' });
    
        const data = ({ token, user: { id: user._id, name: user.name, email: user.email } });

        return { status : "Success", data : data}
      } catch (e) {
        return { status : "Error", error : e.toString()}
      }

}


export const getUserByIDService = async (req) => {
    try {
        const data = await UserModel.findById(req.user).select('-password');
        return { status : "Success", data : data}
    } catch (e) {
        return { status : "Error", error : e.toString()}

    }
}


export const userUpdateService = async (req) => {
    try {
        const { name, phone, location } = req.body;
        const updatedUser = await UserModel.findByIdAndUpdate(
        req.user,
        { name, phone, location },
        { new: true }
      );
      return { status : "Success", data : updatedUser}
    } catch (e) {
        return { status : "Error", error : e.toString()}
    }
}