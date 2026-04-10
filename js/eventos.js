const botones = document.querySelectorAll('.btn-alerta');

  botones.forEach(boton => {
    boton.addEventListener('click', function(e) {
      e.preventDefault();
      alert('El enlace no está disponible en este momento. Inténtalo más tarde.');
    });
  });