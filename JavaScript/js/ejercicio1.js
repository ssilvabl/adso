// Autor: Santiago Silva Blandón


// Capturar opción del usuario
let opcion = parseInt(prompt("EJERCICIO #1\n\nOpciones:\n1. Triángulo\n2. Rectángulo\n3. Cuadrado\n4. Círculo\n5. Salir\nIngresa la opción:"))

// FUNCIONES
///////////////////////////////////////////////////////////////
// Funciones para el triángulo
function obtenerPerimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3
}

function obtenerAreaTriangulo(base, altura) {
    return (base * altura) / 2
}

///////////////////////////////////////////////////////////////

// Funciones para el rectángulo
function obtenerPerimetroRectangulo(longitud, ancho) {
    return (longitud + ancho) * 2
}

function obtenerAreaRectangulo(longitud, ancho) {
    return longitud * ancho
}

///////////////////////////////////////////////////////////////

// Funciones para el cuadrado
function obtenerPerimetroCuadrado(lado) {
    return lado * 4
}

function obtenerAreaCuadrado(lado) {
    return lado * lado
}

///////////////////////////////////////////////////////////////

// Funciones para el círculo
function obtenerPerimetroCirculo(radio) {
    const PI = 3.14
    return 2 * PI * radio
}

function obtenerAreaCirculo(radio) {
    const PI = 3.14
    return PI * (radio * radio)
}

///////////////////////////////////////////////////////////////

switch(opcion) {
    case 1:
        alert("Calcular el perímetro")
        let lado1 = parseFloat(prompt("Ingresa el lado 1:"))
        let lado2 = parseFloat(prompt("Ingresa el lado 2:"))
        let lado3 = parseFloat(prompt("Ingresa el lado 3:"))
        alert("El perímetro es: " + obtenerPerimetroTriangulo(lado1, lado2, lado3))
        alert("Calcular el área")
        let base = parseFloat(prompt("Ingresa la base:"))
        let altura = parseFloat(prompt("Ingresa la altura:"))
        alert("El area es: " + obtenerAreaTriangulo(base, altura))
        break;
    case 2:
        alert("Calcular el perímetro")
        let longitud = parseFloat(prompt("Ingresa la longitud:"))
        let ancho = parseFloat(prompt("Ingresa el ancho:"))
        alert("El perímetro es: " + obtenerPerimetroRectangulo(longitud, ancho))
        alert("Calcular el área")
        longitud = parseFloat(prompt("Ingresa la longitud:"))
        ancho = parseFloat(prompt("Ingresa el ancho:"))
        alert("El area es: " + obtenerAreaRectangulo(longitud, ancho))
        break;
    case 3:
        alert("Calcular el perímetro")
        let lado = parseFloat(prompt("Ingresa el lado:"))
        alert("El perímetro es: " + obtenerPerimetroCuadrado(lado))
        alert("Calcular el área")
        lado = parseFloat(prompt("Ingresa el lado:"))
        alert("El area es: " + obtenerAreaCuadrado(lado))
        break;
    case 4:
        alert("Calcular el perímetro")
        let radio = parseFloat(prompt("Ingresa el radio:"))
        alert("El perímetro es: " + obtenerPerimetroCuadrado(radio))
        alert("Calcular el área")
        radio = parseFloat(prompt("Ingresa el radio:"))
        alert("El area es: " + obtenerAreaCuadrado(radio))
        break;
    case 5:
        alert("¡Hasta pronto!")
        break;
    default:
        alert("Esa opción está fuera de rango, recarga la página e intenta de nuevo")
        break;
}
