const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const {apartments} = require('./apartments')
const {houses} = require('./houses');
const PORT = process.env.PORT || 3001

const app = express()

//Part 1
app.get('/', (request, response) => {
    response.send("welcome!")
})

//Part 2
app.get('/apartments', (request, response) => {
    response.send(apartments);
})

//Part 3
app.get('/houses', (request, response) => {
    response.send(houses);
})

//Part 4
app.get('/houses/:id', (request, response) => {    
    const id = request.params.id
    response.send(houses[id])
})

//Part 5 - Bonus


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})