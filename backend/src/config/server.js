const port = 3003
const bodyParse = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParse.urlencoded({extended: true}))
server.use(bodyParse.json())
server.use(allowCors)
server.use(queryParser())
server.listen(port, function(){
    console.log(`BACKEND rodando na porta ${port}.`)
})

module.exports = server