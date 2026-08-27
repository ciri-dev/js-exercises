const asistencias = Number(prompt("Ingrese el total de asistencias: "));
const inasistencias = Number(prompt("Ingrese la cantidad de inasistencias: "));
const totalClases = asistencias + inasistencias;

const porcentaje = (asistencias * 100) / totalClases
alert(`El porcentaje de asistencia es: ${porcentaje}%`);