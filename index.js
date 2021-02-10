const express = require('express');

const app = express();

const http = require('http').Server(app)
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST", "DELETE", "PUT"]
    }
})


let info = "send something"

socketIO.on("connection", socket => {

    socket.emit("name", info)

    socket.broadcast.emit("name", info)

    socket.on("respuesta", resp => {
        console.log(resp);
    })

})

http.listen(3000, () => {
    console.log("3000 connect");
})
