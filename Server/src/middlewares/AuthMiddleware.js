import jwt from 'jsonwebtoken';
import { JWT_KEY } from "../config/config.js";

export default function auth(req, res, next) {
  const token = req.header('Authorization')?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, JWT_KEY); 
    req.user = decoded.id; 
    next(); 
  } catch (err) {
    return res.status(400).json({ msg: 'Invalid token' });
  }
}
