import { Server } from "socket.io";

let io;

//intialise the socket
export const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "*"
        }
    });

    return io;
};

//fetch io
export const getIO = () => {
    if (!io) {
        throw new Error("Socket.IO not initialized");
    }

    return io;
};