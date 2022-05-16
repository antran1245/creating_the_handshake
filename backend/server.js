const express = require('express');
const app = express();

const server = app.listen(8000, () => console.log('Server running on port 8000'));

const io = require('socket.io')(server, {cors: true})

io.on("connection", socket => {
    console.log("Nice to meet you. (Shake hand)")
    io.emit("welcome", "Welcome. From Server.")
    // socket.on('back', data => io.emit("welcome",data))
})
