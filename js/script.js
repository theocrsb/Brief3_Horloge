// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const degheure = 0.00833;
const degminute = 0.1;
const degseconde = 6;

let hour = hours * 3600 * degheure;
let minute = minutes * 60 * degminute;
let second = seconds * degseconde;

AIGUILLEHR.style.transform = `rotate(${hour}deg)`;
AIGUILLEMIN.style.transform = `rotate(${minute}deg)`;
AIGUILLESEC.style.transform = `rotate(${second}deg)`;

function demarrerLaMontre() {
  AIGUILLEHR.style.transform += `rotate(${degheure}deg)`;
  console.log(AIGUILLEHR.style.transform);
  AIGUILLEMIN.style.transform += `rotate(${degminute}deg)`;
  AIGUILLESEC.style.transform += `rotate(${degseconde}deg)`;
}
// Exercuter la fonction chaque seconde
const interval = setInterval(demarrerLaMontre, 1000);

//2 eme affichage d'horloge

function Heurereelle() {
  let current = new Date();
  let heures = current.getHours();
  let minutes = current.getMinutes();
  let secondes = current.getSeconds();
  let modifhour = document.getElementById("hour2");
  modifhour.innerHTML = heures;
  let modifseconde = document.getElementById("seconde2");
  modifseconde.innerHTML = secondes;
  let modifminute = document.getElementById("minute2");
  modifminute.innerHTML = minutes;
  if (secondes % 3 === 0) {
    document.getElementById("seconde2").style.color = "red";
    document.getElementById("seconde2").style.fontWeight = "bold";
  } else {
    document.getElementById("seconde2").style.color = "black";
    document.getElementById("seconde2").style.fontWeight = "normal";
  }
}
const interval2 = setInterval(Heurereelle, 1000);
