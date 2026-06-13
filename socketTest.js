import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const USER_ID = "Reciever id here";

socket.on("connect", () => {

    console.log("Connected");

    socket.emit(
        "join",
        USER_ID
    );

});

socket.on(
    "Message Recieved",
    (message) => {

        console.log(
            "New Message:",
            message
        );

    }
);