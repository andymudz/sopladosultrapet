/*variables modal1 */

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".abrir")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalContainer = document.querySelectorAll(".container-modal")[0];

/*variables modal2 */

let cerrar2 = document.querySelectorAll(".close2")[0];
let abrir2 = document.querySelectorAll(".abrir2")[0];
let modal2 = document.querySelectorAll(".modal2")[0];
let modalContainer2 = document.querySelectorAll(".container-modal2")[0];

/*variables modal3 */

let cerrar3 = document.querySelectorAll(".close3")[0];
let abrir3 = document.querySelectorAll(".abrir3")[0];
let modal3 = document.querySelectorAll(".modal3")[0];
let modalContainer3 = document.querySelectorAll(".container-modal3")[0];

/*modal 1 */
abrir.addEventListener("click", function (e) {
  e.preventDefault();
  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function () {
  modal.classList.toggle("modal-close");
  setTimeout(function () {
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
  }, 900);
});

/*modal 2 */

abrir2.addEventListener("click", function (f) {
  f.preventDefault();
  modalContainer2.style.opacity = "1";
  modalContainer2.style.visibility = "visible";
  modal2.classList.toggle("modal-close2");
});

cerrar2.addEventListener("click", function () {
  modal2.classList.toggle("modal-close2");
  setTimeout(function () {
    modalContainer2.style.opacity = "0";
    modalContainer2.style.visibility = "hidden";
  }, 900);
});

/*modal 3 */

abrir3.addEventListener("click", function (g) {
  g.preventDefault();
  modalContainer3.style.opacity = "1";
  modalContainer3.style.visibility = "visible";
  modal3.classList.toggle("modal-close3");
});

cerrar3.addEventListener("click", function () {
  modal3.classList.toggle("modal-close3");
  setTimeout(function () {
    modalContainer3.style.opacity = "0";
    modalContainer3.style.visibility = "hidden";
  }, 900);
});

window.addEventListener("click", function (e) {
  if (e.target == modalContainer) {

    modal.classList.toggle("modal-close");
    setTimeout(function () {
      modalContainer.style.opacity = "0";
      modalContainer.style.visibility = "hidden";
    }, 900);

  } else if (e.target == modalContainer2) {

    modal2.classList.toggle("modal-close2");
    setTimeout(function () {
      modalContainer2.style.opacity = "0";
      modalContainer2.style.visibility = "hidden";
    }, 900);

  } else if (e.target == modalContainer3) {

    modal3.classList.toggle("modal-close3");
    setTimeout(function () {
      modalContainer3.style.opacity = "0";
      modalContainer3.style.visibility = "hidden";
    }, 900);

  }
})
