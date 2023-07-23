Algoritmo PesosADolar
	
	// Definir variables globales
	Definir pesos, tasaCambio, resultado Como Real;
	
	// Mostrar mensaje al usuario
	Escribir "Ingresa la cantidad de pesos colombianos:";
	// Capturar datos
	Leer pesos;
	
	// Mostrar mensaje al usuario
	Escribir "Ingresa la tasa de cambio para el dólar:";
	// Capturar datos
	Leer tasaCambio;
	
	// Convertir pesos a dólares
	resultado <- pesos / tasaCambio;
	
	// Mostrar resultado
	Escribir "La cantidad de dólares equivalentes es: ", resultado;
	
FinAlgoritmo
