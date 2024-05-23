//  Id Input del formulario 

// Nombre y Apellido ==> id="name"
// Correo Electronico ==> id="email"
// Fecha de nacimiento ==> id="cumple"
// Pais ===> id="pais"
// Comentarios ==> "comentario"


// 1 - Declaro las variables que necesito formulario y log de error
function datea() {
    const nombres = document.getElementById("name");
    const email = document.getElementById("email");
    const date = document.getElementById("cumple");
    const pais = document.getElementById("pais");
    const comentario = document.getElementById("comentario");

    console.log(nombres.value);
    console.log(email.value);
    console.log(date.value);
    console.log(pais.value);
    console.log(comentario.value);


}

//Genero un strig vacio para guardar el log de errores
let error = [];


// console.log(nombres)

function validar(event) {
    error = [];
    datea();
    const nombres = document.getElementById("name");
    const email = document.getElementById("email");
    const date = document.getElementById("cumple");
    const pais = document.getElementById("pais");
    const comentario = document.getElementById("comentario");


    // Validacion Nombre y Apellido => ValueMissing / TooShort
    if (nombres.value.trim().length === 0) {
        error = "Nombre y Apellido es un campo obligatorio";
        alert(error);
        event.preventDefault();
        return
    }

    if (email.value.trim().length === 0) {
        error = "Email es un campo obligatorio";
        alert(error);
        event.preventDefault();
        return
    }

    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email.value))) {
        error = "El campo email debe ser del formato prueba@test.com"
        alert(error);
        event.preventDefault();
        return

    }





    if (date.value.trim().length === 0) {
        error = "Fecha de nacimiento es un campo obligatorio";
        alert(error);
        event.preventDefault();

        return

    }

    if (pais.value.trim().length === 0 || pais.value === "Seleccione su país") {
        error = "Seleccione un pais valido";
        alert(error);
        event.preventDefault();

        return

    }


}


document.addEventListener('submit', validar)

//console.log(error);