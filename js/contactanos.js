function mostrarAlerta(e) {
    e.preventDefault();
    alert("Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.");
    e.target.reset();
}