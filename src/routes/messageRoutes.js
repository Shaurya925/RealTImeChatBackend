import express from 'express'
import { sendMessageController } from '../controllers/messageController.js'
import { protect } from '../middlewares/authMiddleware.js'

const messageRouter = express.Router()

messageRouter.post("/send",protect,sendMessageController)


export default messageRouter