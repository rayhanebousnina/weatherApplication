let city = "Sfax";
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
    } else {
      alert("Oups! Un problème est intervenu");
    }
  }
};
