Proceso ObtenerEdadActual
	// VARIABLES
	Definir mesNacimiento, diaNacimiento, anoNacimiento, mesActual, diaActual, anoActual, mesEdad, diaEdad, anoEdad Como Entero;
	// Mostrar t�tulo del programa
	Escribir 'OBTENER EDAD ACTUAL';
	Escribir '###################';
	// Solicitar datos de fecha de nacimiento
	Escribir 'Ingresa el mes de tu nacimiento (ej: 6, 7, 8)';
	Leer mesNacimiento;
	Escribir 'Ingresa el d�a de tu nacimiento (ej: 16, 7, 18)';
	Leer diaNacimiento;
	Escribir 'Ingresa el a�o de tu nacimiento (ej: 2006, 1987, 1998)';
	Leer anoNacimiento;
	// Solicitar datos de fecha actual
	Escribir 'Ingresa el mes actual (ej: 6, 7, 8)';
	Leer mesActual;
	Escribir 'Ingresa el d�a actual (ej: 16, 7, 18)';
	Leer diaActual;
	Escribir 'Ingresa el a�o actual (ej: 2006, 1987, 1998)';
	Leer anoActual;
	// Calcular edad
	mesEdad <- mesActual-mesNacimiento;
	diaEdad <- diaActual-diaNacimiento;
	anoEdad <- anoActual-anoNacimiento;
	// Mostrar resultado
	Escribir 'Tu edad actual es de: ', anoEdad, ' a�os ', mesEdad, ' mes/es ', diaEdad, ' d�a/as';
FinProceso
