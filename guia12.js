/* Ejercicio 1
Elabore un programa que genere un archivo con el nombre de 10 empleados de una
empresa (debe leer los nombres del teclado) */
console.log("=== Ejercicio 1 ===");

const fs = require('fs');
const readline = require('readline');

// Configuración para leer desde consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Guardar en archivo
rl.question('Ingrese el nombre del empleado: ', (nombre) => {
  fs.appendFileSync('empleados.txt', nombre + '\n');
  console.log('Guardado exitosamente');
  rl.close();
});


/* Ejercicio 2
Elabore un programa que lea números enteros de un dígito desde un archivo y
los almacene en un vector, mostrando el vector resultante. Considere un vector de
máximo 10 elementos */
console.log("=== Ejercicio 2 ===");


/* Ejercicio 3
Elabore un programa que permita leer desde un archivo el listado de participantes de un
concurso, los guarde e imprima en consola. */
console.log("=== Ejercicio 3 ===");


/* Ejercicio 4
Haga un archivo con los siguientes números enteros: 20,15,17,64,12,47,36,45,26,
cada uno debe estar en una línea del archivo (en lista) y sin la coma. Elabore un
programa que permita leer los números del archivo creado y asignarlos a una matriz de
3 por 3 de enteros. Imprima la matriz */
console.log("=== Ejercicio 4 ===");

