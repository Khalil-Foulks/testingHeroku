require('dotenv').config 

const express = require("express")

const server = express()

const PORT = process.env.PORT|| 4000

server.get('/', function(req, res) {
    const message = process.env.MESSAGE || "Hello from index.js"

    res.status(200).json({ message })
})

server.listen(PORT, () => {
    "server running"
})