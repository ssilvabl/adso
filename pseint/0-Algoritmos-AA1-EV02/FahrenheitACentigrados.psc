Proceso FahrenheitACentigrados
	
	// Definir variables globales
	Definir gradosFahrenheit, gradosCentigrados Como Real;
	
	// Mostrar mensaje al usuario
	Escribir "Ingresa la cantidad de grados Fahrenheit actuales en la ciudad de New York:";
	// Capturar datos
	Leer gradosFahrenheit;
	
	// Convertir Fahrenheit A Centígrados
	gradosCentigrados <- (gradosFahrenheit - 32) * 5/9;
	
	// Mostrar resultado
	Escribir "La cantidad de grados centígrados equivalente es: ", gradosCentigrados;
	
FinProceso
