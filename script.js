// Prendre les éléments sur lesquels ont doit agir...
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const random = document.querySelector(".random-button");
const body = document.getElementById("gradient");  // Prendre le body par son ID pour agir sur sa coueleur...

// Fonction qui regle le gradient une fois changé   
function setGraident() {
  // creer le css
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = `${body.style.background};`;  // mettre le css au background de la page
}

function setRandomColor() {
  // Fonction pour générer les couleurs des input sur le background 
  color1.value = randomColor();
  color2.value = randomColor();
  setGraident();
}

// Every time first parameter changes, call this function
color1.addEventListener("input", setGraident);

color2.addEventListener("input", setGraident);