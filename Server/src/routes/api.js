import express from "express"
import * as DrController from "../controllers/DrController.js"
import * as TeamController from "../controllers/TeamController.js"

const router = express.Router();


router.post("/postDoctors", DrController.postDoctors)
router.get("/getAllDoctors", DrController.getAllDoctors)

router.get("/search", DrController.getSearchDoctors)
router.get("/specialties", DrController.getAllSpecialties)

router.post("/postTeamMember", TeamController.postTeamMember)
router.get("/getTeamMember", TeamController.getTeamMember)




export default router;