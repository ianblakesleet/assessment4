const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json()) // When we want to be able to accept JSON.

const {
  getFortune,
  getCompliment,
  postMessage,
  foodRecomendation,
  getNumber,
} = require('./controller')

app.get('/api/compliment', getCompliment)
app.get('/api/fortune', getFortune)
app.get('/api/number', getNumber)
app.post('/api/createMessage', postMessage)
app.post('/api/foodRecomendation', foodRecomendation)

app.listen(4000, () => console.log('Server running on 4000'))
