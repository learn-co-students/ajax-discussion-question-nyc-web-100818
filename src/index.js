document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('button')

  const updateDom = (json) => {
    const user = json.results[0]
    document.getElementById('profile_picture').src = user.picture.medium
    document.getElementById('fullname').innerText = `${user.name.first} ${user.name.last}`
    document.getElementById('email').innerText = user.email
    document.getElementById('street').innerText = user.location.street
    document.getElementById('city').innerText = user.location.city
    document.getElementById('state').innerText = user.location.state
    document.getElementById('postcode').innerText = user.location.postcode
    document.getElementById('phone').innerText = user.phone
    document.getElementById('cell').innerText = user.cell
    document.getElementById('date_of_birth').innerText = user.dob.date
  }

  btn.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(updateDom)
  })
});
