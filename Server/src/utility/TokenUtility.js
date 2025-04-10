import {JWT_EXPIRE_TIME, JWT_KEY} from "../config/config.js";
import jwt from "jsonwebtoken";

export const EncodeToken = (phoneNumber, userId) => {

    const KEY = JWT_KEY;
    const EXPIRE = {expiresIn: JWT_EXPIRE_TIME};
    const PAYLOAD = {phoneNumber : phoneNumber, userId : userId}

    return jwt.sign(PAYLOAD, KEY, EXPIRE);
}

export const DecodeToken = (token) => {

    try {
        return jwt.verify(token, JWT_KEY);
    } catch(err) {
        return null;
    }
}