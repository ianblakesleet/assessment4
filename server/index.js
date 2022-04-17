const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

const {
  getFortune,
  getCompliment,
  getNumber,
  getCars,
  createCar,
  updateCar,
  deleteCar,
} = require('./controller')

app.get('/api/compliment', getCompliment)
app.get('/api/fortune', getFortune)
app.get('/api/number', getNumber)
app.get('/api/cars', getCars)
app.delete('/api/cars/:id', deleteCar)
app.post('/api/cars', createCar)
app.put('/api/cars/:id', updateCar)

app.listen(4000, () => console.log('Server running on 4000'))
