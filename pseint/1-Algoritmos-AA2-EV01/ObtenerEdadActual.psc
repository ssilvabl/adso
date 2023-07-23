Proceso ObtenerEdadActual
	// VARIABLES
	Definir mesNacimiento, diaNacimiento, anoNacimiento, mesActual, diaActual, anoActual, mesEdad, diaEdad, anoEdad Como Entero;
	// Mostrar título del programa
	Escribir 'OBTENER EDAD ACTUAL';
	Escribir '###################';
	// Solicitar datos de fecha de nacimiento
	Escribir 'Ingresa el mes de tu nacimiento (ej: 6, 7, 8)';
	Leer mesNacimiento;
	Escribir 'Ingresa el día de tu nacimiento (ej: 16, 7, 18)';
	Leer diaNacimiento;
	Escribir 'Ingresa el año de tu nacimiento (ej: 2006, 1987, 1998)';
	Leer anoNacimiento;
	// Solicitar datos de fecha actual
	Escribir 'Ingresa el mes actual (ej: 6, 7, 8)';
	Leer mesActual;
	Escribir 'Ingresa el día actual (ej: 16, 7, 18)';
	Leer diaActual;
	Escribir 'Ingresa el año actual (ej: 2006, 1987, 1998)';
	Leer anoActual;
	// Calcular edad
	mesEdad <- mesActual-mesNacimiento;
	diaEdad <- diaActual-diaNacimiento;
	anoEdad <- anoActual-anoNacimiento;
	// Mostrar resultado
	Escribir 'Tu edad actual es de: ', anoEdad, ' años ', mesEdad, ' mes/es ', diaEdad, ' día/as';
FinProceso
