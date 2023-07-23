// Autor: Santiago Silva Blandón


// VARIABLES
let check = true
let opcion = 0
let dato = ""
let nombres = []
let numeros_identificacion = []
let fechas_nacimiento = []
let correos_electronicos = []
let ciudades_residencia = []
let ciudades_origen = []
let artistas1 = []
let artistas2 = []
let artistas3 = []
let titulos_canciones1 = []
let titulos_canciones2 = []
let titulos_canciones3 = []

alert("EJERCICIO #4")

function agregarPersona() {
    // Solicitar y capturar datos
    dato = prompt("Ingresa el nombre:")
    // Agregar datos al vector
    nombres.push(dato)

    dato = prompt("Ingresa el número de identificación:")
    numeros_identificacion.push(dato)

    dato = prompt("Ingresa la fecha de nacimiento:")
    fechas_nacimiento.push(dato)

    dato = prompt("Ingresa el correo electrónico:")
    correos_electronicos.push(dato)

    dato = prompt("Ingresa la ciudad de residencia:")
    ciudades_residencia.push(dato)

    dato = prompt("Ingresa la ciudad de origen:")
    ciudades_origen.push(dato)

    dato = prompt("Ingresa el nombre del artista #1:")
    artistas1.push(dato)

    dato = prompt("Ingresa el nombre del artista #2:")
    artistas2.push(dato)

    dato = prompt("Ingresa el nombre del artista #3:")
    artistas3.push(dato)

    dato = prompt("Ingresa el título de la canción favorita #1:")
    titulos_canciones1.push(dato)

    dato = prompt("Ingresa el título de la canción favorita #2:")
    titulos_canciones2.push(dato)

    dato = prompt("Ingresa el título de la canción favorita #3:")
    titulos_canciones3.push(dato)
}


function consultarDatos() {
    // Validar si hay datos para consultar
    if (nombres.length > 0) {
        // Consultar datos por el índice
        dato = parseInt(prompt("Ingresa el índice que desea consultar, los cuales son del 0 al " + (nombres.length - 1)))
        alert("Los datos de esta persona son: " + "\n" + nombres[dato] + "\n" + numeros_identificacion[dato] + "\n" + fechas_nacimiento[dato] + "\n" + correos_electronicos[dato] + "\n" + ciudades_residencia[dato] + "\n" + ciudades_origen[dato] + "\n" + artistas1[dato] + "\n" + artistas2[dato] + "\n" + artistas3[dato] + "\n" + titulos_canciones1[dato] + "\n" + titulos_canciones2[dato] + "\n" + titulos_canciones3[dato])
    }else {
        alert("No hay datos. Primero debe agregar a una persona")
    }
}


// Ciclo del menú
while (check) {
    // Capturar opción del usuario
    opcion = parseInt(prompt("Ingresa la opción que deseas:\n\n1. Agregar una nueva persona\n2. Consultar datos\n3. Salir"))

    // Menú de opciones
    switch (opcion) {
        case 1:
            agregarPersona()
            break
        case 2:
            consultarDatos()
            break
        case 3:
            alert("¡Hasta pronto!")
            check = false
            break
        default:
            alert("Opción inválida")
            break
    }
}
