import TeamModel from "../model/TeamModel.js";

export const postMemberService = async (req) => {
    try {
        let reqBody = req.body;
        let data = await TeamModel.create(reqBody);
        return { status : "Success", data : data}
    }catch (e) {
        return { status : "Error", error : e.toString()}

    }
}

export const getMemberService = async (req) => {
    try {

        let query = {};
        let projection = "name designation image short";
        let data = await TeamModel.find(query, projection)
        return { status : "Success", data : data}

    } catch (e) {
        return { status : "Error", error : e.toString()}
    }
}