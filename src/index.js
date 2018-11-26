const newPerson = document.querySelector('.btn.btn-primary')
// User Attributes
const profilePictureImg = document.querySelector('#profile_picture')
const fullnameHTML = document.querySelector('#fullname')
const emailHTML = document.querySelector('#email')
const streetHTML = document.querySelector('#street')
const cityHTML = document.querySelector('#city')
const stateHTML = document.querySelector('#state')
const postcodeHTML = document.querySelector('#postcode')
const phoneHTML = document.querySelector('#phone')
const cellHTML = document.querySelector('#cell')
const dobHTML = document.querySelector('#date_of_birth')

document.addEventListener("DOMContentLoaded", () => {
  newPerson.addEventListener('click', function(e) {
    fetch('https://randomuser.me/api/')
      .then(resp => resp.json())
      .then(parsedNewUser => {
        userInfo = parsedNewUser.results[0]
        console.log(userInfo)

        profilePictureImg.src = userInfo.picture.large
        fullnameHTML.innerText = fullname(userInfo.name)
        emailHTML.innerText = userInfo.email
        streetHTML.innerText = userInfo.location.street
        cityHTML.innerText = upperString(userInfo.location.city)
        stateHTML.innerText = upperString(userInfo.location.state)
        postcodeHTML.innerText = userInfo.location.postcode
        phoneHTML.innerText = userInfo.phone
        cellHTML.innerText = userInfo.cell
        dobHTML.innerText = userInfo.dob.date
      })
  })

  function fullname(name) {
    return upperString(name.first) + ' ' + upperString(name.last) }

  function upperString(string) {
    return string[0].toUpperCase() + string.slice(1)
  }
});
