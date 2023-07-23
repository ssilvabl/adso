// Autor: Santiago Silva Blandón


// VARIABLES
let vector1_incompleto = true
let vector2_incompleto = true
let vector_final1 = []
let vector_final2 = []
let vector_ordenado = []
let vector1 = []
let vector2 = []
let numero1 = 0
let numero2 = 0
let numero_uno_v1 = 0
let numero_uno_v2 = 0
let iv1 = -1
let iv2 = -1

alert("EJERCICIO #3")

// Función para ordenar los vectores
function ordenarVectores(vectorA, vectorB) {
    // Concatenar vectores
    vector_ordenado = vector_ordenado.concat(vectorA)
    vector_ordenado = vector_ordenado.concat(vectorB)
    // Mostar vectores antes de ordenar
    alert("El vector antes de ordenar es: " + vector_ordenado)
    
    // Ordenar vectores
    vector_ordenado = vector_ordenado.sort((item1, item2) => item1 - item2)
    // Retornar vector ordenado
    return vector_ordenado
}

function completarVectores(vector, numero_entrada,numero_uno, check, i) {
    alert("Debes completar los datos del vector")
    // Ciclo para validar que los datos siempre sean ascendentes
    while (check) {
        // Pedir números
        numero_entrada = parseInt(prompt("Ingresa un número:"))
        // Ingresar el primer número
        if(vector.length == 0) {
            vector.push(numero_entrada)
            numero_uno = numero_entrada
            i++
        // Ingresar todos los números que sean mayores al primero
        }else if (numero_entrada > vector[i]) {
            vector.push(numero_entrada)
            i++
        // Mensaje de error si es menor el número a todos los anteriores
        }else{
            alert("Debes ingresar un número mayor al anterior")
        }
        // Validar que el vector tenga sólo 5 elementos
        if (vector.length == 5) {
            alert("Los número correctos que has ingresaso son: " + vector)
            check = false
        }
    }
    return vector
}

vector_final1 = completarVectores(vector1, numero1, numero_uno_v1, vector1_incompleto, iv1)
vector_final2 = completarVectores(vector2, numero2, numero_uno_v2, vector2_incompleto, iv2)

alert("El vector ordenado es: " + ordenarVectores(vector_final1, vector_final2))
