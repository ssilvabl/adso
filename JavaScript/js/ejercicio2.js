// Autor: Santiago Silva Blandón


// VARIABLES
let edades_incompletas = true
let edad = 0;
let edades = []
let menores_edad = []
let mayores_edad = []
let adultos_mayores = []
let promedio_edades = 0

alert("EJERCICIO #2")

// Validar edades ingresadas
do {
    // Validar si el vector está completo
    if(edades.length == 10) {
        alert("Ya se ingresaron todas las edades de forma correcta, las cuales son: " + edades)
        edades_incompletas = false
    }else {
        // Guarda la edad que se ingresó
        edad = parseInt(prompt("Ingresa una edad:"))
        // Valida si la edad cumple con los requisitos
        if(edad > 0 && edad <= 120) {
            // Agregar edad al vector
            edades.push(edad)
        }else {
            alert("El valor ingresado está fuera de rango")
        }
    }
    
// Ejecutarse mientras su valor sea verdadero
}while(edades_incompletas)


// Recorrer todas las edades
for (let i = 0; i < edades.length; i++) {
    // Calcular el promedio
    promedio_edades = promedio_edades + edades[i]
    // Validar cuáles son mayores de edad
    if (edades[i] >= 18) {
        // Añadir al vector de mayores de edad
        mayores_edad.push(edades[i])
        // Validar cuáles son adultos mayores
        if(edades[i] >= 60) {
            // Añadir al vector de adultos mayores
            adultos_mayores.push(edades[i])
        }
    // De lo contrario, son menores de edad
    }else{
        // Añadir al vector de menores de edad
        menores_edad.push(edades[i])
    }
}

// Categorías por edad
alert("Hay " + mayores_edad.length + " personas mayores de edad")
alert("Hay " + menores_edad.length + " personas menores de edad")
alert("Hay " + adultos_mayores.length + " adultos mayores")

// Validar el número más bajo
let edades_ordenadas = edades.sort((a, b) => a - b)
alert("La edad más baja es: " + edades_ordenadas[0])

// Validar el número más alto
alert("La edad más alta es: " + edades_ordenadas[edades.length - 1])

// Calcular el promedio de las edades
alert("El promedio de las edades es de: " + parseInt(promedio_edades / edades.length))
