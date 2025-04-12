import express from "express"
import * as DrController from "../controllers/DrController.js"
import * as TeamController from "../controllers/TeamController.js"
import * as UserController from "../controllers/UserController.js"
import auth from "../middlewares/AuthMiddleware.js";

const router = express.Router();


router.post("/postDoctors", DrController.postDoctors)
router.get("/getAllDoctors", DrController.getAllDoctors)

router.get("/search", DrController.getSearchDoctors)
router.get("/specialties", DrController.getAllSpecialties)

router.get('/user/me', auth, UserController.getUserByID)
router.put('/user/update', auth, UserController.userUpdate)

router.post("/signup", UserController.postUsers)
router.post("/login", UserController.getUsers)

router.post("/postTeamMember", TeamController.postTeamMember)
router.get("/getTeamMember", TeamController.getTeamMember)




export default router;