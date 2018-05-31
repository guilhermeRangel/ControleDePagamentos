const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true })) //responavel por fazer a interpretação dos dados que venham por meio de submissoes de um formulario
server.use(bodyParser.json())

server.listen(port, function() { //iniciando o servidor na porta 3003
    console.log(`BACKEND is running on port ${port}.`)
})


module.exports = server