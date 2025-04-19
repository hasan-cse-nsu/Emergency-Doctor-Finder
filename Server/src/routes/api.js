import express from "express"
import * as DrController from "../controllers/DrController.js"
import * as TeamController from "../controllers/TeamController.js"
import * as UserController from "../controllers/UserController.js"
import * as AdminController from "../controllers/AdminController.js"
import auth from "../middlewares/AuthMiddleware.js";
import authAdmin from "../middlewares/AuthAdmin.js"

const router = express.Router();


router.post("/admin/login", AdminController.getAdmin)
router.get('/admin/me', authAdmin, AdminController.getAdminByID)



router.post("/doctor/signup", DrController.postDoctors)
router.post("/doctor/login", DrController.getDoctors)

router.get('/doctor/me', auth, DrController.getDoctorByID)
router.put('/doctor/update', auth, DrController.doctorUpdate)

router.get("/getAllDoctors", DrController.getAllDoctors)

router.get("/search", DrController.getSearchDoctors)
router.get("/specialties", DrController.getAllSpecialties)

router.get("/admin/doctors/pending", authAdmin, DrController.getPendingDoctor)
router.put("/admin/approve-doctor/:id", authAdmin, DrController.putApprovalDoctor)
router.get("/doctor/notifications", auth, DrController.getNotifications)
router.put("/doctor/notifications/read", auth, DrController.getMarkNotification)


router.post("/signup", UserController.postUsers)
router.post("/login", UserController.getUsers)

router.get('/user/me', auth, UserController.getUserByID)
router.put('/user/update', auth, UserController.userUpdate)

router.post("/appointment/:doctorId", auth, DrController.postAppointments)
router.get("/my-appointments", auth, DrController.getAppointments)
router.put("/appointment/cancel/:id", auth, DrController.cancelAppointments)
router.delete("/appointment/:id", auth, DrController.deleteAppointments)




router.post("/postTeamMember", TeamController.postTeamMember)
router.get("/getTeamMember", TeamController.getTeamMember)




export default router;