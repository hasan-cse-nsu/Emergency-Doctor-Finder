import { getUserService, postUserService } from "../service/UserService.js";


export const postUsers = async (req, res) => {

    let result = await postUserService(req);
    return res.json({result})
}


export const getUsers = async (req, res) => {

    let result = await getUserService(req);
    return res.json({result})
}