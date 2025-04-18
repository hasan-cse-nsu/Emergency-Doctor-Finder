import jwt from "jsonwebtoken";
import { JWT_KEY } from "../config/config.js";

const authAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token, access denied" });

  try {
    const decoded = jwt.verify(token, JWT_KEY);
    if (decoded.role !== "admin") {
      return res.status(403).json({ msg: "Access denied" });
    }

    req.admin = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

export default authAdmin;
