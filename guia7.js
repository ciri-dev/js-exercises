/* Ejercicio 1
Una tienda por departamentos vende productos nuevos (sellados), abiertos y usados (devueltos
por los clientes). Dado el nombre y precio original de producto, departamento al que pertenece y si
está nuevo, abierto o usado; se le pide desplegar el nombre del producto y el total a cancelar. Los
departamentos y descuentos son Electrónicos 5%, Enseres 7% y Muebles 10%. Si el producto
está sólo abierto tiene 25% descuento y usado 50% de descuento pero no se les aplica ningún
descuento por departamento, sólo a los nuevos. */
console.log("\n=== Ejercicio 1 ===\n");

function calcularTotal(nombre, precioOriginal, departamento, estado) {
  let descuentoDepartamento = 0;
  let descuentoEstado = 0;

  // Calcular descuento por departamento
  switch (departamento.toLowerCase()) {
    case 'electrónicos':
      descuentoDepartamento = 0.05;
      break;
    case 'enseres':
      descuentoDepartamento = 0.07;
      break;
    case 'muebles':
      descuentoDepartamento = 0.10;
      break;
    default:
      console.log("Departamento no válido.");
      return;
  }

  // Calcular descuento por estado del producto
  switch (estado.toLowerCase()) {
    case 'nuevo':
      // No se aplica descuento adicional para productos nuevos
      break;
    case 'abierto':
      descuentoEstado = 0.25;
      break;
    case 'usado':
      descuentoEstado = 0.50;
      break;
    default:
      console.log("Estado del producto no válido.");
      return;
  }

  // Calcular el total a cancelar
  let total = precioOriginal;

  if (estado.toLowerCase() === 'nuevo') {
    total -= precioOriginal * descuentoDepartamento;
  } else {
    total -= precioOriginal * descuentoEstado;
  }

  console.log(`Producto: ${nombre}`);
  console.log(`Total a cancelar: $${total.toFixed(2)}\n`);
}

// Ejemplo de uso
calcularTotal("Televisor", 1000, "Electrónicos", "nuevo");
calcularTotal("Refrigerador", 800, "Enseres", "abierto");
calcularTotal("Sofá", 500, "Muebles", "usado"); 


/* Ejercicio 2
Para la realización del segundo examen parcial de Introducción a la Informática se exigirá que cada
estudiante haya asistido a, por lo menos, el 75% de las 8 clases teóricas y 4 sesiones de laboratorios
a evaluar. Dado el carnet del estudiante y sus respectivas asistencias, despliegue carnet, porcentaje
de asistencia de cada tipo de actividad y si tiene derecho a realizar el examen. */
console.log("\n=== Ejercicio 2 ===\n");

function verificarAsistencia(carnet, asistenciasTeoricas, asistenciasLaboratorio) {
  const totalTeoricas = 8;
  const totalLaboratorio = 4;

  const porcentajeTeoricas = (asistenciasTeoricas / totalTeoricas) * 100;
  const porcentajeLaboratorio = (asistenciasLaboratorio / totalLaboratorio) * 100;

  const tieneDerechoExamen = porcentajeTeoricas >= 75 && porcentajeLaboratorio >= 75;

  console.log(`Carnet: ${carnet}`);
  console.log(`Porcentaje de asistencia a clases teóricas: ${porcentajeTeoricas.toFixed(2)}%`);
  console.log(`Porcentaje de asistencia a laboratorios: ${porcentajeLaboratorio.toFixed(2)}%`);
  console.log(`¿Tiene derecho a realizar el examen? ${tieneDerechoExamen ? 'Sí' : 'No'}\n`);
}

// Ejemplo de uso
verificarAsistencia("ZV21001", 6, 3);
verificarAsistencia("OC21002", 5, 2);


/* Ejercicio 3
Dada una cantidad en bytes imprimir su representación en la unidad más próxima sin pasarse.
Ejemplos: 999 Bytes -> 999 B
 2000 Bytes -> 2 KB
 999,500,000 Bytes -> 999.5 MB
7,000,000,000 Bytes -> 7 GB
Resolver el ejercicio, usando potencias de 10 y no de 2. */
console.log("\n=== Ejercicio 3 ===\n");

function convertirBytes(cantidadBytes) {
  let unidad = "B";
  let cantidad = cantidadBytes;

  if (cantidadBytes >= 1e9) {
    unidad = "GB";
    cantidad = cantidadBytes / 1e9;
  } else if (cantidadBytes >= 1e6) {
    unidad = "MB";
    cantidad = cantidadBytes / 1e6;
  } else if (cantidadBytes >= 1e3) {
    unidad = "KB";
    cantidad = cantidadBytes / 1e3;
  }

  console.log(`${cantidad.toFixed(1)} ${unidad}\n`);
}

// Ejemplo de uso
convertirBytes(999);
convertirBytes(2000);
convertirBytes(999500000);
convertirBytes(7000000000);


/* Ejercicio 4
Dado el carnet y una nota, desplegar “Aprobado” o “Reprobado” y la clasificación de la nota, de
acuerdo a lo siguiente: Excelente es mayor a 9 pero menor o igual a 10, Muy Bueno es mayor a 8
pero menor o igual a 9, Bueno es mayor a 7 pero menor o igual a 8, Regular es mayor a 6 pero
menor o igual a 7, Malo es mayor a 4 pero menor o igual a 6, Muy Malo es mayor a 2 pero menor o
igual a 4 y, por último, Necesita Menjorar es mayor o igual a 0 pero menor o igual a 2. */
console.log("\n=== Ejercicio 4 ===\n");

function clasificarNota(carnet, nota) {
  let clasificacion = "";
  let resultado = "";

  if (nota > 9 && nota <= 10) {
    clasificacion = "Excelente";
  } else if (nota > 8 && nota <= 9) {
    clasificacion = "Muy Bueno";
  } else if (nota > 7 && nota <= 8) {
    clasificacion = "Bueno";
  } else if (nota > 6 && nota <= 7) {
    clasificacion = "Regular";
  } else if (nota > 4 && nota <= 6) {
    clasificacion = "Malo";
  } else if (nota > 2 && nota <= 4) {
    clasificacion = "Muy Malo";
  } else if (nota >= 0 && nota <= 2) {
    clasificacion = "Necesita Mejorar";
  }

  resultado = nota >= 7 ? "Aprobado" : "Reprobado";

  console.log(`Carnet: ${carnet}`);
  console.log(`Nota: ${nota}`);
  console.log(`Clasificación: ${clasificacion}`);
  console.log(`Resultado: ${resultado}\n`);
}

// Ejemplo de uso
clasificarNota("ZV21001", 9.5);
clasificarNota("OC22002", 6.5);


/* Ejercicio 5
Dada la cantidad de semanas de clase en la Universidad, cursadas por un estudiante egresado,
despliegue la cantidad de años y ciclos clase del mencionado estudiante. Si la cantidad de años es
mayor a 5, desplegar “Retraso”, dado que las carreras duran 5 años. Las medidas a considerar
son: 1 mes clase = 4 semanas clase, 1 ciclo clase = 4 meses clase, 1 año clase = 8 meses clase =
2 ciclos clase. */
console.log("\n=== Ejercicio 5 ===\n");

function calcularAniosYCiclos(semanasClase) {
  const mesesClase = semanasClase / 4;
  const ciclosClase = mesesClase / 4;
  const aniosClase = mesesClase / 8;

  console.log(`Semanas de clase: ${semanasClase}`);
  console.log(`Años de clase: ${aniosClase.toFixed(2)}`);
  console.log(`Ciclos de clase: ${ciclosClase.toFixed(2)}`);

  if (aniosClase > 5) {
    console.log("Retraso\n");
  } else {
    console.log("\n");
  }
}

// Ejemplo de uso
calcularAniosYCiclos(160);
calcularAniosYCiclos(200);


/* Ejercicio 6
Diseñe una solución que dado el sexo de una persona y el día de la semana imprima el valor de la
entrada a una discoteca. El precio para hombres es de $10 y para mujer es de $5, pero
dependiendo del día de la semana, se tienen los siguientes descuentos: para hombres: Domingo
50%, Jueves 10%, Martes 30% y para mujer: Lunes, Miércoles y Sábado se hace 50%. Además
el Viernes las mujeres entran gratis. */
console.log("\n=== Ejercicio 6 ===\n");

function calcularEntrada(sexo, diaSemana) {
  let precioBase = sexo.toLowerCase() === 'hombre' ? 10 : 5;
  let descuento = 0;

  // Calcular descuento según el día de la semana
  switch (diaSemana.toLowerCase()) {
    case 'domingo':
      if (sexo.toLowerCase() === 'hombre') descuento = 0.50;
      break;
    case 'lunes':
    case 'miércoles':
    case 'sabado':
      if (sexo.toLowerCase() === 'mujer') descuento = 0.50;
      break;
    case 'martes':
      if (sexo.toLowerCase() === 'hombre') descuento = 0.30;
      break;
    case 'jueves':
      if (sexo.toLowerCase() === 'hombre') descuento = 0.10;
      break;
    case 'viernes':
      if (sexo.toLowerCase() === 'mujer') {
        precioBase = 0; // Entrada gratis para mujeres
        descuento = 0;
      }
      break;
    default:
      console.log("Día de la semana no válido.");
      return;
  }

  const total = precioBase - (precioBase * descuento);

  console.log(`Sexo: ${sexo}`);
  console.log(`Día de la semana: ${diaSemana}`);
  console.log(`Precio de entrada: $${total.toFixed(2)}\n`);
}

// Ejemplo de uso
calcularEntrada("Hombre", "Domingo");
calcularEntrada("Mujer", "Viernes");
calcularEntrada("Hombre", "Martes");
calcularEntrada("Mujer", "Lunes");


/* Ejercicio 7
BancoCredit ofrece préstamos a un plazo mínimo de 1 año y máximo de 5 años plazo, a
empleados públicos o privados. El monto del crédito es 2 veces el salario por cada año plazo
para públicos y 1.5 para privados. Dado salario, plazo y tipo de empleado cuánto se puede
prestar, si el monto no puede ser menor a $600.00 y el salario no menor de $300.00? */
console.log("\n=== Ejercicio 7 ===\n");

function calcularPrestamo(salario, plazo, tipoEmpleado) {
  if (salario < 300) {
    console.log("El salario no puede ser menor a $300.00.");
    return;
  }

  if (plazo < 1 || plazo > 5) {
    console.log("El plazo debe ser entre 1 y 5 años.");
    return;
  }

  let montoPrestamo = 0;

  if (tipoEmpleado.toLowerCase() === 'publico') {
    montoPrestamo = salario * 2 * plazo;
  } else if (tipoEmpleado.toLowerCase() === 'privado') {
    montoPrestamo = salario * 1.5 * plazo;
  } else {
    console.log("Tipo de empleado no válido.");
    return;
  }

  if (montoPrestamo < 600) {
    console.log("El monto del préstamo no puede ser menor a $600.00.");
    return;
  }

  console.log(`Salario: $${salario.toFixed(2)}`);
  console.log(`Plazo: ${plazo} años`);
  console.log(`Tipo de empleado: ${tipoEmpleado}`);
  console.log(`Monto del préstamo: $${montoPrestamo.toFixed(2)}\n`);
}

// Ejemplo de uso
calcularPrestamo(400, 3, "publico");
calcularPrestamo(500, 2, "privado");
calcularPrestamo(250, 4, "publico"); // Salario menor a $300
calcularPrestamo(700, 6, "privado"); // Plazo mayor a 5 años


/* Ejercicio 8
Dada la cantidad en metros imprima la representación en la unidad más próxima sin pasarse
(sistema internacional hasta petametros). Ejemplo 999 Mts-> 999 Mts; 2000 Mts->2 Kilómetros */
console.log("\n=== Ejercicio 8 ===\n");

function convertirMetros(cantidadMetros) {
  let unidad = "Mts";
  let cantidad = cantidadMetros;

  if (cantidadMetros >= 1e15) {
    unidad = "Pm";
    cantidad = cantidadMetros / 1e15;
  } else if (cantidadMetros >= 1e12) {
    unidad = "Tm";
    cantidad = cantidadMetros / 1e12;
  } else if (cantidadMetros >= 1e9) {
    unidad = "Gm";
    cantidad = cantidadMetros / 1e9;
  } else if (cantidadMetros >= 1e6) {
    unidad = "Mm";
    cantidad = cantidadMetros / 1e6;
  } else if (cantidadMetros >= 1e3) {
    unidad = "Km";
    cantidad = cantidadMetros / 1e3;
  }

  console.log(`${cantidad.toFixed(2)} ${unidad}\n`);
}

// Ejemplo de uso
convertirMetros(999);
convertirMetros(2000);
convertirMetros(1500000);
convertirMetros(7000000000);
convertirMetros(1e13);
convertirMetros(1e16);


/* Ejercicio 9
La Cooperativa de la Clase Trabajadora, ofrece préstamos a un plazo mínimo de 2 años y
máximo de 7 años plazo, a empleados públicos, privados o independientes. El monto del crédito
es 2 veces el salario por cada año plazo para públicos, 1.5 para privados y 1 salario por año plazo
para independientes. Dado el salario, plazo y tipo de empleado cuánto se puede prestar, si el monto
no puede ser menor a $500.00? */
console.log("\n=== Ejercicio 9 ===\n");

function calcularPrestamoCooperativa(salario, plazo, tipoEmpleado) {
  if (plazo < 2 || plazo > 7) {
    console.log("El plazo debe ser entre 2 y 7 años.");
    return;
  }

  let montoPrestamo = 0;

  switch (tipoEmpleado.toLowerCase()) {
    case 'publico':
      montoPrestamo = salario * 2 * plazo;
      break;
    case 'privado':
      montoPrestamo = salario * 1.5 * plazo;
      break;
    case 'independiente':
      montoPrestamo = salario * plazo;
      break;
    default:
      console.log("Tipo de empleado no válido.");
      return;
  }

  if (montoPrestamo < 500) {
    console.log("El monto del préstamo no puede ser menor a $500.00.");
    return;
  }

  console.log(`Salario: $${salario.toFixed(2)}`);
  console.log(`Plazo: ${plazo} años`);
  console.log(`Tipo de empleado: ${tipoEmpleado}`);
  console.log(`Monto del préstamo: $${montoPrestamo.toFixed(2)}\n`);
}

// Ejemplo de uso
calcularPrestamoCooperativa(400, 3, "publico");
calcularPrestamoCooperativa(500, 2, "privado");
calcularPrestamoCooperativa(300, 4, "independiente");
calcularPrestamoCooperativa(250, 5, "publico"); // Monto menor a $500
calcularPrestamoCooperativa(700, 8, "privado"); // Plazo mayor a 7 años


/* Ejercicio 10
Diseñe una calculadora básica que dados dos números y dada la operación a realizar (suma,
resta, producto o división), despliegue el resultado o mensaje de error en caso que no pueda
realizarse. */
console.log("\n=== Ejercicio 10 ===\n");

function calculadoraBasica(num1, num2, operacion) {
  let resultado;

  switch (operacion.toLowerCase()) {
    case 'suma':
      resultado = num1 + num2;
      break;
    case 'resta':
      resultado = num1 - num2;
      break;
    case 'producto':
      resultado = num1 * num2;
      break;
    case 'division':
      if (num2 === 0) {
        console.log("Error: No se puede dividir entre cero.");
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      console.log("Operación no válida. Use 'suma', 'resta', 'producto' o 'division'.");
      return;
  }

  console.log(`Número 1: ${num1}`);
  console.log(`Número 2: ${num2}`);
  console.log(`Operación: ${operacion}`);
  console.log(`Resultado: ${resultado}\n`);
}

// Ejemplo de uso
calculadoraBasica(10, 5, "suma");
calculadoraBasica(10, 5, "resta");
calculadoraBasica(10, 5, "producto");
calculadoraBasica(10, 0, "division"); // Error división entre cero
calculadoraBasica(10, 5, "potencia"); // Operación no válida


/* Ejercicio 11
En la empresa “REGALONA S.A.” se dará una bonificación para los empleados por haber
logrado el premio de mejor empresa del año, de acuerdo al cargo que desempeñan y al tiempo de
trabajo laborado de la siguiente forma:
| Cargo      | Salario   | Menos de 5 años | Entre 5 y 10 años | Más de 10 años |
|------------|-----------|-----------------|------------------|----------------|
| Gerente    | $2,500.00 | 10% | 15% | 20% |
| Jefe       | $2,000.00 | 8% | 12% | 17% |
| Técnico    | $1,300.00 | 5% | 8% | 13% |
| Secretaria | $600.00   | 4% | 5% | 10% |

Realice una solución para mostrar el nombre del empleado y la bonificación que recibirá */
console.log("\n=== Ejercicio 11 ===\n");

function calcularBonificacion(nombre, cargo, tiempoTrabajo) {
  let salarioBase = 0;
  let porcentajeBonificacion = 0;

  // Determinar salario base según el cargo
  switch (cargo.toLowerCase()) {
    case 'gerente':
      salarioBase = 2500;
      if (tiempoTrabajo < 5) porcentajeBonificacion = 0.10;
      else if (tiempoTrabajo <= 10) porcentajeBonificacion = 0.15;
      else porcentajeBonificacion = 0.20;
      break;
    case 'jefe':
      salarioBase = 2000;
      if (tiempoTrabajo < 5) porcentajeBonificacion = 0.08;
      else if (tiempoTrabajo <= 10) porcentajeBonificacion = 0.12;
      else porcentajeBonificacion = 0.17;
      break;
    case 'técnico':
      salarioBase = 1300;
      if (tiempoTrabajo < 5) porcentajeBonificacion = 0.05;
      else if (tiempoTrabajo <= 10) porcentajeBonificacion = 0.08;
      else porcentajeBonificacion = 0.13;
      break;
    case 'secretaria':
      salarioBase = 600;
      if (tiempoTrabajo < 5) porcentajeBonificacion = 0.04;
      else if (tiempoTrabajo <= 10) porcentajeBonificacion = 0.05;
      else porcentajeBonificacion = 0.10;
      break;
    default:
      console.log("Cargo no válido.");
      return;
  }

  const bonificacion = salarioBase * porcentajeBonificacion;

  console.log(`Nombre del empleado: ${nombre}`);
  console.log(`Cargo: ${cargo}`);
  console.log(`Tiempo de trabajo: ${tiempoTrabajo} años`);
  console.log(`Bonificación: $${bonificacion.toFixed(2)}\n`);
}

// Ejemplo de uso
calcularBonificacion("Juan Pérez", "Gerente", 12);
calcularBonificacion("María López", "Jefe", 7);
calcularBonificacion("Carlos Sánchez", "Técnico", 3);
calcularBonificacion("Ana Gómez", "Secretaria", 11);