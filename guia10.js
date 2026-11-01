/* Ejercicio 1
Se tienen las 4 calificaciones de cada uno de 5 alumnos, se necesita
conocer: el promedio de cada estudiante y el promedio de todos.*/
console.log("\n=== Ejercicio 1 ===\n");

let calificaciones = [
  [8, 7, 9, 8],
  [6, 8, 7, 9],
  [9, 9, 8, 7],
  [7, 6, 8, 9],
  [8, 9, 7, 8]
];

let alumnos = ["Alumno 1", "Alumno 2", "Alumno 3", "Alumno 4", "Alumno 5"];

let promedioTotal = 0;

for (let i = 0; i < calificaciones.length; i++) {
  let suma = 0;
  for (let j = 0; j < calificaciones[i].length; j++) {
    suma += calificaciones[i][j];
  }
  let promedioAlumno = suma / calificaciones[i].length;
  promedioTotal += promedioAlumno;
  console.log(`${alumnos[i]}: Promedio = ${promedioAlumno.toFixed(2)}`);
}

let promedioGeneral = promedioTotal / calificaciones.length;
console.log(`Promedio general de todos los alumnos: ${promedioGeneral.toFixed(2)}`);    


/* Ejercicio 2
Diseñe un programa que llene de ceros una matriz cuadrada de nxn, excepto la
diagonal principal donde debe asignar 1. Por ejemplo, si n=4 la matriz resultante, que
se debe de imprimir es: */
console.log("\n=== Ejercicio 2 ===\n");

let n = 4;
let matriz = [];

for (let i = 0; i < n; i++) {
  matriz[i] = [];
  for (let j = 0; j < n; j++) {
    if (i === j) {
      matriz[i][j] = 1;
    } else {
      matriz[i][j] = 0;
    }
  }
}

console.log("Matriz resultante:");
for (let i = 0; i < n; i++) {
  console.log(matriz[i].join(" "));
}


/* Ejercicio 3
Dada una matriz de nxm elementos, diseñe un programa que permita calcular
cuántos elementos son múltiplos de 5. */
console.log("\n=== Ejercicio 3 ===\n");

function contarMultiplosDeCinco(matriz) {
    let contador = 0;
    let filas = matriz.length;
    let columnas = matriz[0].length;

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            // Un número es múltiplo de 5 si el residuo de dividirlo entre 5 es 0
            if (matriz[i][j] % 5 === 0) {
                contador++;
            }
        }
    }

    return contador;
}

let matrizEjemplo = [
    [10, 3, 15, 7],
    [8,  25, 4, 40],
    [5,  12, 19, 20]
];

let resultado = contarMultiplosDeCinco(matrizEjemplo);
console.log(`La cantidad de elementos múltiplos de 5 es: ${resultado}`); 


/* Ejercicio 4
Dada una matriz cuadrada nxn, cuyos elementos enteros deben estar entre 10 y
60, diseñar un programa que determine si dicha matriz es simétrica.
Se considera que una matriz es simétrica, si
a[i][j]==a[j][i] */
console.log("\n=== Ejercicio 4 ===\n");

function esSimetrica(matriz) {
  let n = matriz.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matriz[i][j] !== matriz[j][i]) {
        return false;
      }
    }
  }
  return true;
}

let matrizSimetrica = [
  [10, 20, 30],
  [20, 40, 50],
  [30, 50, 60]
];

let matrizNoSimetrica = [
  [10, 20, 30],
  [25, 40, 50],
  [30, 50, 60]
];

console.log(`La matriz simétrica es: ${esSimetrica(matrizSimetrica) ? "Sí" : "No"}`);
console.log(`La matriz no simétrica es: ${esSimetrica(matrizNoSimetrica) ? "Sí" : "No"}`);


/* Ejercicio 5
En una universidad se conoce el número de alumnos que ingresaron en sus 7
diferentes carreras, en los últimos 12 años. Diseñe un programa que pueda
proporcionar la siguiente información:
Total de alumnos por año
Porcentaje de alumnos ingresados en el año X de la carrera Y
En qué año y en qué carrera se dio el menor ingreso de alumnos
Año en el cual la carrera T tuvo mayor ingreso de alumnos. */
console.log("\n=== Ejercicio 5 ===\n");

function analizarIngresos(matriz, carreraT) {
  let totalPorAnio = [];
  let menorIngreso = { anio: -1, carrera: -1, cantidad: Infinity };
  let mayorIngresoCarreraT = { anio: -1, cantidad: -1 };

  for (let i = 0; i < matriz.length; i++) {
    let totalAnio = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      totalAnio += matriz[i][j];

      // Verificar menor ingreso
      if (matriz[i][j] < menorIngreso.cantidad) {
        menorIngreso = { anio: i + 1, carrera: j + 1, cantidad: matriz[i][j] };
      }

      // Verificar mayor ingreso para la carrera T
      if (j === carreraT && matriz[i][j] > mayorIngresoCarreraT.cantidad) {
        mayorIngresoCarreraT = { anio: i + 1, cantidad: matriz[i][j] };
      }
    }
    totalPorAnio.push(totalAnio);
  }

  return {
    totalPorAnio,
    menorIngreso,
    mayorIngresoCarreraT
  };
}

let ingresos = [
  [50, 60, 70, 80, 90, 100, 110],
  [55, 65, 75, 85, 95, 105, 115],
  [60, 70, 80, 90, 100, 110, 120],
  [65, 75, 85, 95, 105, 115, 125],
  [70, 80, 90, 100, 110, 120, 130],
  [75, 85, 95, 105, 115, 125, 135],
  [80, 90, 100, 110, 120, 130, 140],
];

let carreraT = 2; // Carrera T (índice basado en cero)

let resultados = analizarIngresos(ingresos, carreraT);

console.log("Total de alumnos por año:", resultados.totalPorAnio);
console.log(`Menor ingreso de alumnos: Año ${resultados.menorIngreso.anio}, Carrera ${resultados.menorIngreso.carrera}, Cantidad ${resultados.menorIngreso.cantidad}`);
console.log(`Mayor ingreso de alumnos en la carrera T: Año ${resultados.mayorIngresoCarreraT.anio}, Cantidad ${resultados.mayorIngresoCarreraT.cantidad}`);


/* Ejercicio 6
En un almacén se requiere consolidar la información mensual de la
cantidad de productos en existencia. Se tienen 5 diferentes tipos. Diseñe un
programa que muestre lo siguiente:
Total de productos de todos los tipos en el mes. Promedio de productos de tipo 2 en
existencia. Total de productos por tipo. */
console.log("\n=== Ejercicio 6 ===\n");

function consolidarExistencias(matriz) {
  let totalPorMes = [];
  let totalTipo2 = 0;
  let totalPorTipo = new Array(matriz[0].length).fill(0);

  for (let i = 0; i < matriz.length; i++) {
    let totalMes = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      totalMes += matriz[i][j];
      totalPorTipo[j] += matriz[i][j];

      if (j === 1) { // Tipo 2 (índice basado en cero)
        totalTipo2 += matriz[i][j];
      }
    }
    totalPorMes.push(totalMes);
  }

  let promedioTipo2 = totalTipo2 / matriz.length;

  return {
    totalPorMes,
    promedioTipo2,
    totalPorTipo
  };
}

let existencias = [
  [10, 20, 30, 40, 50],
  [15, 25, 35, 45, 55],
  [20, 30, 40, 50, 60],
  [25, 35, 45, 55, 65],
  [30, 40, 50, 60, 70]
];

let resultadosExistencias = consolidarExistencias(existencias);

console.log("Total de productos por mes:", resultadosExistencias.totalPorMes);
console.log("Promedio de productos de tipo 2 en existencia:", resultadosExistencias.promedioTipo2);
console.log("Total de productos por tipo:", resultadosExistencias.totalPorTipo);


/* Ejercicio 7
Se tienen las 6 calificaciones de 25 alumnos de Programación I, se necesita
calcular lo siguiente:
La nota promedio de cada examen
El promedio final de cada alumno
El mayor promedio final de los alumnos.
DEBE TRABAJAR CON MATRICES Y VECTORES */
console.log("\n=== Ejercicio 7 ===\n");

function calcularPromedios(calificaciones) {
  let promediosExamen = new Array(calificaciones[0].length).fill(0);
  let promediosFinales = new Array(calificaciones.length).fill(0);
  let mayorPromedioFinal = -Infinity;

  for (let i = 0; i < calificaciones.length; i++) {
    let sumaAlumno = 0;
    for (let j = 0; j < calificaciones[i].length; j++) {
      sumaAlumno += calificaciones[i][j];
      promediosExamen[j] += calificaciones[i][j];
    }
    promediosFinales[i] = sumaAlumno / calificaciones[i].length;
    if (promediosFinales[i] > mayorPromedioFinal) {
      mayorPromedioFinal = promediosFinales[i];
    }
  }

  for (let j = 0; j < promediosExamen.length; j++) {
    promediosExamen[j] /= calificaciones.length;
  }

  return {
    promediosExamen,
    promediosFinales,
    mayorPromedioFinal
  };
}

let calificacionesAlumnos = [
  [8, 7, 9, 8, 7, 9],
  [6, 8, 7, 9, 8, 7],
  [9, 9, 8, 7, 9, 8],
  [7, 6, 8, 9, 7, 6],
  [8, 9, 7, 8, 9, 7],
];

let resultadosPromedios = calcularPromedios(calificacionesAlumnos);

console.log("Promedio de cada examen:", resultadosPromedios.promediosExamen);
console.log("Promedio final de cada alumno:", resultadosPromedios.promediosFinales);
console.log("Mayor promedio final de los alumnos:", resultadosPromedios.mayorPromedioFinal.toFixed(2));


/* Ejercicio 8
Se tiene una matriz cuadrada de 25 filas y columnas. Se necesita un
programa que genere dos vectores vec1 y vec2 a partir de la matriz, de la
siguiente manera: Si el elemento de la matriz es un número par, se almacenará en
vec1 en caso contrario el elemento formará parte de vec2. El programa debe de
imprimir además la suma de todos los elementos de vec1 y el número de elementos
que forman vec2. */
console.log("\n=== Ejercicio 8 ===\n");

function generarVectores(matriz) {
  let vec1 = [];
  let vec2 = [];

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] % 2 === 0) {
        vec1.push(matriz[i][j]);
      } else {
        vec2.push(matriz[i][j]);
      }
    }
  }

  let sumaVec1 = vec1.reduce((acc, val) => acc + val, 0);
  let cantidadVec2 = vec2.length;

  return {
    vec1,
    vec2,
    sumaVec1,
    cantidadVec2
  };
}

let matriz25x25 = Array.from({ length: 25 }, () => Array.from({ length: 25 }, () => Math.floor(Math.random() * 100)));

let resultadosVectores = generarVectores(matriz25x25);

console.log("Vector vec1 (números pares):", resultadosVectores.vec1);
console.log("Vector vec2 (números impares):", resultadosVectores.vec2);
console.log("Suma de todos los elementos de vec1:", resultadosVectores.sumaVec1);
console.log("Número de elementos que forman vec2:", resultadosVectores.cantidadVec2);


/* Ejercicio 9
En una empresa laboran 25 empleados que obtienen sus ingresos de acuerdo a las
comisiones obtenidas por sus ventas. Si se tiene el registro del salario mensual, en los
últimos tres meses de cada uno de los empleados(inicialice la matriz), se solicita elaborar
un programa que calcule:
Salario promedio de todos los empleados
Total a pagar por la empresa en la planilla de cada mes(Almacenar en un vector y
mostrar)
Empleado que ganó más en cada mes y cuanto fue su salario
Empleado que gano más en el trimestre y cual fue su salario en los tres meses
Nombre de los empleados cuyo salario fue menor que el promedio en el segundo mes */
console.log("\n=== Ejercicio 9 ===\n");

function analizarSalarios(salarios, nombresEmpleados) {
  let totalSalarios = [0, 0, 0];
  let totalEmpleados = salarios.length;
  let salarioPromedio = 0;
  let totalPorMes = [0, 0, 0];
  let empleadoMayorPorMes = [{ nombre: "", salario: -Infinity }, { nombre: "", salario: -Infinity }, { nombre: "", salario: -Infinity }];
  let empleadoMayorTrimestre = { nombre: "", salario: -Infinity };
  let empleadosMenorPromedioMes2 = [];

  for (let i = 0; i < salarios.length; i++) {
    let sumaEmpleado = salarios[i][0] + salarios[i][1] + salarios[i][2];
    salarioPromedio += sumaEmpleado;

    for (let j = 0; j < salarios[i].length; j++) {
      totalPorMes[j] += salarios[i][j];

      if (salarios[i][j] > empleadoMayorPorMes[j].salario) {
        empleadoMayorPorMes[j] = { nombre: nombresEmpleados[i], salario: salarios[i][j] };
      }
    }

    if (sumaEmpleado > empleadoMayorTrimestre.salario) {
      empleadoMayorTrimestre = { nombre: nombresEmpleados[i], salario: sumaEmpleado };
    }
  }

  salarioPromedio /= totalEmpleados;

  for (let i = 0; i < salarios.length; i++) {
    if (salarios[i][1] < salarioPromedio) {
      empleadosMenorPromedioMes2.push(nombresEmpleados[i]);
    }
  }

  return {
    salarioPromedio,
    totalPorMes,
    empleadoMayorPorMes,
    empleadoMayorTrimestre,
    empleadosMenorPromedioMes2
  };
}

let salariosEmpleados = [
  [2000, 2500, 3000],
  [2200, 2700, 3200],
  [2100, 2600, 3100],
  [2300, 2800, 3300],
  [2400, 2900, 3400],
];

let nombresEmpleados = ["Empleado 1", "Empleado 2", "Empleado 3", "Empleado 4", "Empleado 5"];

let resultadosSalarios = analizarSalarios(salariosEmpleados, nombresEmpleados);

console.log("Salario promedio de todos los empleados:", resultadosSalarios.salarioPromedio.toFixed(2));
console.log("Total a pagar por la empresa en la planilla de cada mes:", resultadosSalarios.totalPorMes);
console.log("Empleado que ganó más en cada mes y su salario:", resultadosSalarios.empleadoMayorPorMes);
console.log("Empleado que ganó más en el trimestre y su salario:", resultadosSalarios.empleadoMayorTrimestre);
console.log("Nombre de los empleados cuyo salario fue menor que el promedio en el segundo mes:", resultadosSalarios.empleadosMenorPromedioMes2);
