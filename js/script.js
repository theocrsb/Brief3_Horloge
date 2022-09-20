// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

function demarrerLaMontre() {
  // variable pour recuperer heure, minute et seconde en temps reel
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  // hours * 30 pour avoir 360deg au bout de 12h
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  // transfome le temps actuel en graphique. si 12h, 360 deg
  AIGUILLEHR.style.transform = `rotate(${hour}deg)`;
  AIGUILLEMIN.style.transform = `rotate(${minute}deg)`;
  AIGUILLESEC.style.transform = `rotate(${second}deg)`;
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
