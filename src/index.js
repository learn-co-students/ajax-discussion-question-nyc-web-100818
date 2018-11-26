const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  document.getElementById('theButton').addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then((parsedResponse) => {
        const results = parsedResponse.results[0]
        document.getElementById('fullname').innerHTML = `${results.name.title} ${results.name.first} ${results.name.last}`
      })
  })
});
