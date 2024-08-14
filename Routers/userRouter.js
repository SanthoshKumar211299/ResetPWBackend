import { forgotPassword, getUser, logingUser, registerUser, resetPassword } from "../Controllers/userController.js";
import { resetAuthMiddleware } from "../Middleware/resest_Password_Auth_Middleware.js";
import { userAuthMiddleware } from "../Middleware/user_Auth_Middleware.js";
import express from 'express'


const router = express.Router();

router.post("/login",logingUser);
router.post("/register",registerUser);
router.post("/forgotpassword",forgotPassword);
router.post("/resetpassword/:id/:token",resetAuthMiddleware,resetPassword);
router.get("/user-info/:email",userAuthMiddleware,getUser);

export default router;