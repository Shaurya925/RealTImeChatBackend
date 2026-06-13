import app from "./src/app.js";
import config from "./src/config/config.js";
import connectDB from "./src/db/db.js";
import { Server } from "socket.io";
import http from 'http'
import { initSocket } from "./src/sockets/socket.js";

//create server
const server = http.createServer(app)

//establish connection
const io = initSocket(server)

//connection listener

io.on('connection',(socket)=>{
    console.log("User connected",socket.id)

    socket.on('join',(userId)=>{
        socket.join(userId)
        console.log( `User ${userId} joined room`)
    })

    socket.on('disconnect',()=>{
        console.log("User Disconnected",socket.id)
    })
})

connectDB()
server.listen(config.PORT,()=>{
    console.log("Server is running at port",config.PORT)
})
