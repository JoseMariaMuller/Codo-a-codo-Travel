document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("formulario"); 

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const cumple = document.getElementById("cumple");
        const pais = document.getElementById("pais");
        const comentario = document.getElementById("comentario");

        let isValid = true;

        // Validación del nombre
        const namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(name.value.trim())) {
            isValid = false;
            alert("Por favor ingrese un nombre válido.");
        }

        // Validación del correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            isValid = false;
            alert("Por favor ingrese un correo electrónico válido.");
        }

        // Validación de la fecha de nacimiento
        const fechaActual = new Date();
        const fechaNacimiento = new Date(cumple.value);
        if (fechaNacimiento >= fechaActual) {
            isValid = false;
            alert("Por favor ingrese una fecha de nacimiento válida.");
        }

        // Validación del país
        if (pais.value === "") {
            isValid = false;
            alert("Por favor seleccione su país.");
        }

        // Validación del comentario
        if (comentario.value.trim() === "") {
            isValid = false;
            alert("Por favor escriba su comentario.");
        }

        // Si todos los campos son válidos, se puede enviar el formulario
        if (isValid) {
            alert("Formulario enviado correctamente.");
            form.submit();
        }
    });
});
