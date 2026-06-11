import express from 'express'
import { getMeController, loginController, registerController } from '../controllers/authController.js'
import { protect } from '../middlewares/authMiddleware.js'


const authRouter = express.Router()

authRouter.post("/register",registerController)
authRouter.post("/login",loginController)
authRouter.get("/getme",protect,getMeController)



export default authRouter