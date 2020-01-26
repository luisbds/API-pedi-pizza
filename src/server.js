const express = require('express')
const routes = require('./routes')
const { pedidoPizza, pedidoPizza2} = require('./model') 
require('./database')

const app = express()

app.use(express.json())

app.use(routes) 

app.post('/pedidoPizza', async(req, res) => {
    try {
        const PedidoPizza = await pedidoPizza.create(req.body)

        return res.status(200).json(PedidoPizza)
    } catch (err) {
        return res.status(500).json({ err }) 
    }
})

app.post('/pedidoPizza2', async(req, res) => {
    try {
        const PedidoPizza2 = await pedidoPizza2.create(req.body)

        return res.status(200).json(PedidoPizza2)
    } catch (err) {
        return res.status(500).json({ err })
    }
})
/*
app.get('/', (req, res) => {
    res.send('Olá')
}) 
*/
app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001')
})