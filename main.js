const multiply = (x, y,z) => { return x * y * z }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''
 // if (document.querySelector('#firstNumber').checkValidity() && document.querySelector('#secondNumber').checkValidity()) {
   // const regex = /[^a-zA-Z_]/g
   // const s = parseInt(document.querySelector('#guest').value);
    const city1 = document.querySelector('#firstNumber').value;
    const city2 = document.querySelector('#secondNumber').value;
    const ans = ` Number of characters in smalles string is ${Math.min(city1.length, city2.length)}.`
    document.querySelector('#result').innerHTML = ans
 // }
}

// const updateWithJoke = async (event) => {
//   document.querySelector('#result').innerHTML = ''
//   const url = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'
//   const response = await fetch(url)
//   const obj = await response.json()
//   const joke = obj.value.joke || 'No joke for you.'
//   document.querySelector('#result').innerHTML = joke
// }

// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

// document.addEventListener('focusout', event => {
//   if ((event.target && event.target.id === 'firstNumber') ||
//     (event.target && event.target.id === 'secondNumber')) {
//     validate(event)
//   }
// })

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
})
