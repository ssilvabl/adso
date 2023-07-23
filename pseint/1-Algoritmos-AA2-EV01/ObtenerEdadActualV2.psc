Proceso ObtenerEdadActualV2
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
	// Calcular cuando mes y día son mayores a la fecha actual
	Si mesNacimiento>mesActual Y diaNacimiento>diaActual Entonces
		// Calcular edad
		mesEdad <- mesNacimiento-mesActual;
		diaEdad <- diaNacimiento-diaActual;
		anoEdad <- (anoActual-anoNacimiento)-1;
		mesEdad <- (12-mesEdad)-1;
		diaEdad <- 30-diaEdad;
		// Mostrar resultado
		Escribir 'Tu edad actual es de: ', anoEdad, ' años ', mesEdad, ' mes/es ', diaEdad, ' día/as';
	SiNo
		// Calcular cuando mes es mayor a la fecha actual
		Si mesNacimiento>mesActual Entonces
			// Calcular edad
			mesEdad <- mesNacimiento-mesActual;
			diaEdad <- diaActual-diaNacimiento;
			anoEdad <- (anoActual-anoNacimiento)-1;
			mesEdad <- 12-mesEdad;
			// Mostrar resultado
			Escribir 'Tu edad actual es de: ', anoEdad, ' años ', mesEdad, ' mes/es ', diaEdad, ' día/as';
		SiNo
			// Calcular cuando día es mayor a la fecha actual
			Si diaNacimiento>diaActual Entonces
				mesEdad <- mesNacimiento-mesActual;
				diaEdad <- diaNacimiento-diaActual;
				anoEdad <- (anoActual-anoNacimiento)-1;
				mesEdad <- (12-mesEdad)-1;
				diaEdad <- 30-diaEdad;
				// Mostrar resultado
				Escribir 'Tu edad actual es de: ', anoEdad, ' años ', mesEdad, ' mes/es ', diaEdad, ' día/as';
			SiNo
				// Calcular edad
				mesEdad <- mesActual-mesNacimiento;
				diaEdad <- diaActual-diaNacimiento;
				anoEdad <- anoActual-anoNacimiento;
				// Mostrar resultado
				Escribir 'Tu edad actual es de: ', anoEdad, ' años ', mesEdad, ' mes/es ', diaEdad, ' día/as';
			FinSi
		FinSi
	FinSi
FinProceso
