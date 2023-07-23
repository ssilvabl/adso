Proceso ObtenerAnoBisiesto
	// VARIABLES
	Definir anoIngresado, resultado Como Entero;
	Definir ANOBISIESTO Como Entero;
	ANOBISIESTO <- 4;
	// Título del programa
	Escribir 'OBTENER AÑO BISIESTO';
	Escribir '####################';
	// Capturar datos
	Escribir 'Ingresa un año: ';
	Leer anoIngresado;
	// Calcular año bisiesto
	resultado <- anoIngresado MOD ANOBISIESTO;
	// Mostrar si es o no año bisiesto
	Si resultado==0 Entonces
		Escribir 'El año ', anoIngresado, ' es bisiesto.';
	SiNo
		Escribir 'El año ', anoIngresado, ' no es bisiesto.';
	FinSi
FinProceso
