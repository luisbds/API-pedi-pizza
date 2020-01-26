const express = require('express')
const routes = require('./routes')

require('./database')

const app = express()

app.use(express.json())

app.use(routes) 
/*
app.get('/', (req, res) => {
    res.send('Olá')
}) 
*/
app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001')
})