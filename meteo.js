let villeChoisie = "sousse";
recievedata(villeChoisie);

// Pour choisir une autre ville
let changerville = document.querySelector("#changerville");
changerville.addEventListener("click", () => {
  villeChoisie = prompt("Quelle ville souhaitez-vous voir?");
  recievedata(villeChoisie);
});
// Fonction de récupération des données de type json
function recievedata(city) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=7ed8c5c726848a9dfc0fadbda23b25e6&units=metric"; // Url de l'api contenant l'api key

  let requete = new XMLHttpRequest(); // Création d'un objet pour récupérer les données
  requete.open("GET", url); // Récupération des données
  requete.responseType = "json"; // La réponse est de type json
  requete.send(); // L'envoie du requete

  // Une fois la réponse est reçue, on lance cette fonction
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let response = requete.response;
        //console.log(response);
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
