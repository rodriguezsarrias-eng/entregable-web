document.querySelectorAll(".ver-mas").forEach(boton => {
  boton.addEventListener("click", function(e) {
    e.preventDefault();

    const texto = this.previousElementSibling;

    if (texto.classList.contains("expandido")) {
      texto.classList.remove("expandido");
      this.innerText = "Ver más";
    } else {
      texto.classList.add("expandido");
      this.innerText = "Ver menos";
    }
  });
});
