let cars = require('./db.json')
let globalID = 5

module.exports = {
  getFortune: (req, res) => {
    const fortunes = [
      'A pleasant surprise is waiting for you',
      'Accept something that you cannot change, and you will feel better.',
      'Adventure can be real happiness.',
      'All the effort you are making will ultimately pay off.',
      'Believe in yourself and others will too.',
    ]
    //randomized fortunes
    let randomIndex = Math.floor(Math.random() * fortunes.length)
    let randomFortune = fortunes[randomIndex]
    res.status(200).send(randomFortune)
  },
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      'Cool shirt!',
      'Your Javascript skills are stellar.',
    ]

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length)
    let randomCompliment = compliments[randomIndex]

    res.status(200).send(randomCompliment)
  },
  getNumber: (req, res) => {
    let randomNumGen = Math.floor(Math.random() * 1000)

    res.status(200).send(randomNumGen.toString())
  },
  getCars: (req, res) => {
    res.status(200).send(cars)
  },
  deleteCar: (req, res) => {
    let index = cars.findIndex((elem) => elem.id === +req.params.id)
    cars.splice(index, 1)
    res.status(200).send(cars)
  },
  createCar: (req, res) => {
    const { name, rating, imageURL } = req.body
    let newCar = {
      id: globalID,
      name,
      rating,
      imageURL,
    }
    cars.push(newCar)
    globalID++
    res.status(200).send(cars)
  },
  updateCar: (req, res) => {
    const { id } = req.params
    const { type } = req.body
    let index = cars.findIndex((elem) => elem.id === +req.params.id)
    console.log(type)
    if (type === 'minus' && cars[index].rating > 0) {
      cars[index].rating -= 1
      res.status(200).send(cars)
    } else if (type === 'plus' && cars[index].rating < 5) {
      cars[index].rating += 1
      res.status(200).send(cars)
    } else {
      res.status(400).send('something went wong')
    }
  },
}
