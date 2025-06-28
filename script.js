const galeria = document.getElementById("galeria");
const urlImagen = document.getElementById("urlImagen");
const agregarBtn = document.getElementById("agregarBtn");
const eliminarBtn = document.getElementById("eliminarBtn");

let imagenSeleccionada = null;

agregarBtn.addEventListener("click", () => {
  const url = urlImagen.value.trim();
  if (url === "") return;

  const nuevaImagen = document.createElement("img");
  nuevaImagen.src = url;

  nuevaImagen.addEventListener("click", () => {
    if (imagenSeleccionada) {
      imagenSeleccionada.classList.remove("seleccionada");
    }
    nuevaImagen.classList.add("seleccionada");
    imagenSeleccionada = nuevaImagen;
  });

  galeria.appendChild(nuevaImagen);
  urlImagen.value = "";
});

eliminarBtn.addEventListener("click", () => {
  if (imagenSeleccionada) {
    galeria.removeChild(imagenSeleccionada);
    imagenSeleccionada = null;
  }
});

// Soporte para tecla Enter al ingresar URL
urlImagen.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    agregarBtn.click();
  }
});
