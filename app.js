// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarNombre(nombre) {
    if (nombre.trim() === "") {
        alert("Por favor, ingresa un nombre válido");
        return;
    }
    nombres.push(nombre);
}

