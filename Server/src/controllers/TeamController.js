import { getMemberService, postMemberService } from "../service/TeamMemberService.js";

export const postTeamMember = async (req, res) => {

    let result = await postMemberService(req);
    return res.json({result})
}

export const getTeamMember= async (req, res)=>{
    
    let result = await getMemberService(req);
    return res.json({result});
}

