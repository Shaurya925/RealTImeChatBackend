import express from "express";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import cors from 'cors'
import authRouter from "./routes/authRoutes.js";
import messageRouter from "./routes/messageRoutes.js";


const app = express()


app.use(cors())
app.use(express.json())

app.use("/api/auth",authRouter)
app.use("/api/messages",messageRouter)

app.use(errorMiddleware)


export default app