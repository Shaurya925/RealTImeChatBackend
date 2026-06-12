import express from 'express'
import { getAllMessageController, sendMessageController } from '../controllers/messageController.js'
import { protect } from '../middlewares/authMiddleware.js'

const messageRouter = express.Router()

messageRouter.post("/send",protect,sendMessageController)
messageRouter.get("/view",protect,getAllMessageController)


export default messageRouter