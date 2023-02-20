const express = require("express")
const app = express();
const port = 8000


const server = app.listen(port, () => console.log(`Ahoy welcome to Port: ${port}`))

const io = require("socket.io")(server, { cors: true })

io.on("connection", (socket) => {
    console.log(socket.id)

    socket.on("chat", (client_input) => {
        console.log("Got a message", client_input)

        io.emit("post chat", client_input)
    })
})