let villeChoisie = "sousse";
recievedata(villeChoisie);

let changerville = document.querySelector("#changerville");
changerville.addEventListener("click", () => {
  villeChoisie = prompt("Quelle ville souhaitez-vous voir?");
  recievedata(villeChoisie);
});

function recievedata(city) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=7ed8c5c726848a9dfc0fadbda23b25e6&units=metric";

  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let response = requete.response;
        console.log(response);
        let city = response.name;
        let temp = response.main.temp;
        let press = response.main.pressure;
        let hum = response.main.humidity;
        document.querySelector("#city").textContent = city;
        document.querySelector("#temperature").textContent = temp;
        document.querySelector("#pressure").textContent = press;
        document.querySelector("#humidity").textContent = hum;
      } else {
        alert("Oups! Un problème est intervenu réessayer plus tard.");
      }
    }
  };
}
