const express = require("express")

const server = express()

const PORT = process.env.PORT

server.get('/', function(req, res) {
    res.status(200).json({message: `Success!`})
})

server.listen(PORT, () => {
    "server running"
})