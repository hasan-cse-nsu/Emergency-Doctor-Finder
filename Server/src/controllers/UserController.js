import { getUserByIDService, getUserService, postUserService, userUpdateService } from "../service/UserService.js";


export const postUsers = async (req, res) => {

    let result = await postUserService(req);
    if (result.status === "Error") {
        return res.status(400).json({ msg: result.error });
      }
      return res.status(201).json({ result });
    }


export const getUsers = async (req, res) => {

    let result = await getUserService(req);
    if (result.status === "Error") {
        return res.status(400).json({ msg: result.error });
      }
      return res.status(201).json({ result });
    }


export const getUserByID = async (req, res) => {

    let result = await getUserByIDService(req);
    return res.json({result})
  }


  export const userUpdate = async (req, res) => {

    let result = await userUpdateService(req);
    return res.json({result})
  }