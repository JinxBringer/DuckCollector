var slide = new Array("/img/votre histoire.jpg", "/img/votre écriture.jpg", "/img/livremémoire.jpg");
var numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0)
    numero = slide.length - 1;
  if (numero > slide.length - 1)
    numero = 0;
  document.getElementById("slide").src = slide[numero];
}

// Appeler le modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Le lieu d'appel du modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// L'élément span qui ferme le modal
var span = document.getElementsByClassName("close")[0];

// Au clic, ouvre le modal
btn.onclick = function () {
  modal.style.display = "block";
}

// Fermer le modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/////////////////////////////////////////////////////////////////////////////

//Modal 2


btn2.onclick = function () {
  modal.style.display = "block";
}

window.onclick = function (event2) {
  if (event2.target == modal) {
    modal.style.display = "none";
  }
}

//Modal 3

btn3.onclick = function () {
  modal.style.display = "block";
}

window.onclick = function (event3) {
  if (event3.target == modal) {
    modal.style.display = "none";
  }
}