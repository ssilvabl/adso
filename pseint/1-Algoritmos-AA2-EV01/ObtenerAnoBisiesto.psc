Proceso ObtenerAnoBisiesto
	// VARIABLES
	Definir anoIngresado, resultado Como Entero;
	Definir ANOBISIESTO Como Entero;
	ANOBISIESTO <- 4;
	// T�tulo del programa
	Escribir 'OBTENER A�O BISIESTO';
	Escribir '####################';
	// Capturar datos
	Escribir 'Ingresa un a�o: ';
	Leer anoIngresado;
	// Calcular a�o bisiesto
	resultado <- anoIngresado MOD ANOBISIESTO;
	// Mostrar si es o no a�o bisiesto
	Si resultado==0 Entonces
		Escribir 'El a�o ', anoIngresado, ' es bisiesto.';
	SiNo
		Escribir 'El a�o ', anoIngresado, ' no es bisiesto.';
	FinSi
FinProceso
