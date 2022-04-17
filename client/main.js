document.getElementById('complimentButton').onclick = function () {
  axios.get('http://localhost:4000/api/compliment/').then(function (response) {
    const data = response.data
    alert(data)
  })
}
document.getElementById('fortuneButton').onclick = function () {
  axios.get('http://localhost:4000/api/fortune').then((res) => {
    alert(res.data)
  })
}
document.getElementById('randomNumber').onclick = function () {
  axios.get('http://localhost:4000/api/number').then((res) => {
    alert(res.data)
  })
}
//-------------------------cars n stuff------------------------------
const carsContainer = document.querySelector('#cars-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/cars`

const carsCallback = ({ data: cars }) => displayCars(cars)
const errCallback = (err) => console.log(err.response.data)

const getAllCars = () =>
  axios
    .get(`http://localhost:4000/api/cars`)
    .then(carsCallback)
    .catch(errCallback)
const createCar = (body) =>
  axios
    .post(`http://localhost:4000/api/cars`, body)
    .then(carsCallback)
    .catch(errCallback)
const deleteCar = (id) =>
  axios
    .delete(`http://localhost:4000/api/cars/${id}`)
    .then(carsCallback)
    .catch(errCallback)
const updateCar = (id, type) =>
  axios
    .put(`http://localhost:4000/api/cars/${id}`, { type })
    .then(carsCallback)
    .catch(errCallback)

function submitHandler(e) {
  e.preventDefault()

  let name = document.querySelector('#name')
  let rating = document.querySelector('input[name="ratings"]:checked')
  let imageURL = document.querySelector('#img')

  let bodyObj = {
    name: name.value,
    rating: rating.value,
    imageURL: imageURL.value,
  }

  createCar(bodyObj)

  name.value = ''
  rating.checked = false
  imageURL.value = ''
}

function createCarCard(car) {
  const carCard = document.createElement('div')
  carCard.classList.add('car-card')

  carCard.innerHTML = `<img alt='car cover' src=${car.imageURL} class="car-cover"/>
    <p class="car-name">${car.name}</p>
    <div class="btns-container">
        <button onclick="updateCar(${car.id}, 'minus')">-</button>
        <p class="car-rating">${car.rating} stars</p>
        <button onclick="updateCar(${car.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteCar(${car.id})">delete</button>
    `

  carsContainer.appendChild(carCard)
}

function displayCars(arr) {
  carsContainer.innerHTML = ``
  for (let i = 0; i < arr.length; i++) {
    createCarCard(arr[i])
  }
}

form.addEventListener('submit', submitHandler)

getAllCars()
