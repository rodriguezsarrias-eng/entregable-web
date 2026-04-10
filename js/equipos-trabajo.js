document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll(".abrirModal");
  const imagenModal = document.querySelector(".imagenModal");

  imagenes.forEach(img => {
    img.addEventListener("click", () => {
      imagenModal.src = img.src;
    });
  });
});