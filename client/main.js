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
//-------------------------inspiring Message------------------------------
const postMessage = (body) => {
  axios.post('http://localhost:4000/api/createMessage', body).then((res) => {
    console.log(res.data)
    createMessageCard(res.data)
  })
}
const createMessageCard = (data) => {
  let mCard = document.createElement('div')
  mCard.innerHTML = `<p>${data}</p>`
  document.getElementById('messageContainer').appendChild(mCard)
}

const submitHandler = (event) => {
  event.preventDefault()
  let message = document.querySelector('#messageInput')
  let bodyObj = {
    message: message.value,
  }
  postMessage(bodyObj)

  message.value = ''
}
///---------------------------Food recomendations----------------------------

const foodRecomend = (body) => {
  axios
    .post('http://localhost:4000/api/foodRecomendation', body)
    .then((res) => {
      console.log(res.data)
      createFoodMessageCard(res.data)
    })
}

const createFoodMessageCard = (data) => {
  let mCard = document.createElement('div')
  mCard.innerHTML = `<p>${data}</p>`
  document.getElementById('foodRecomendation').appendChild(mCard)
}

const submitHandlerTwo = (event) => {
  event.preventDefault()
  let selectValue = document.querySelector('select')
  let bodyObj = {
    value: selectValue.value,
  }
  foodRecomend(bodyObj)
}
//------------------------------------------------------------------------------------------

document.querySelector('form').addEventListener('submit', submitHandler)

document.querySelector('#foodForm').addEventListener('submit', submitHandlerTwo)
