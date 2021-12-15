let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".abrir")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalContainer = document.querySelectorAll(".container-modal")[0];

abrir.addEventListener("click", function (e) {
    e.preventDefault();
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});