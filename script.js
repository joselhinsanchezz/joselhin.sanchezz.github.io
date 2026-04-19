let index = 0;

const imagenes = [
{
src: "foto1.jpg",
texto: "Proyecto 1",
link: "https://instagram.com/"
},
{
src: "foto2.jpg",
texto: "Proyecto 2",
link: "https://instagram.com/"
},
{
src: "foto3.jpg",
texto: "Proyecto 3",
link: "https://instagram.com/"
}
];

function actualizarGaleria() {
const img = document.getElementById("imagen");
const texto = document.getElementById("texto");

img.style.opacity = 0;

setTimeout(() => {
img.src = imagenes[index].src;
texto.textContent = imagenes[index].texto;
img.style.opacity = 1;
}, 300);
}

function siguiente() {
index = (index + 1) % imagenes.length;
actualizarGaleria();
}

function anterior() {
index = (index - 1 + imagenes.length) % imagenes.length;
actualizarGaleria();
}

/* CLICK EN IMAGEN → IR A INSTAGRAM */
document.getElementById("imagen").addEventListener("click", () => {
window.open(imagenes[index].link, "_blank");
});

/* MENU */
function toggleMenu() {
const menu = document.getElementById("menuItems");
menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

/* ICONOS */
function irInstagram() {
window.open("https://instagram.com/", "_blank");
}

function enviarMail() {
window.location.href = "mailto:tuemail@mail.com";
}
