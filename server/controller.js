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
  postMessage: (req, res) => {
    const { message } = req.body
    res.status(200).send(message)
  },
  foodRecomendation: (req, res) => {
    if (req.body.value === 'not-hungry') {
      res.status(200).send('Eat some Air!')
    } else if (req.body.value === 'little-hungry') {
      res.status(200).send('Have some fruits!')
    } else if (req.body.value === 'very-hungry') {
      res.status(200).send('Have a big burger!')
    } else if (req.body.value === 'starving') {
      res.status(200).send('Eat some Steak and mashed potatoes!')
    }
  },
  getNumber: (req, res) => {
    let randomNumGen = Math.floor(Math.random() * 1000)
    res.sendStatus(200).send(randomNumGen)
  },
}
