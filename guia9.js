/* Ejercicio 1
Diseñe un programa que lea 100 números enteros y positivos. Después debe leer otro
valor (con las mismas características) y contar e imprimir la cantidad de veces que aparece
en el vector. */
console.log("\n=== Ejercicio 1 ===\n");

function contarApariciones() {
    let numeros = [];
    let cantidad = 100;

    // Leer 100 números enteros y positivos
    for (let i = 0; i < cantidad; i++) {
        let numero;
        do {
            numero = parseInt(prompt(`Ingrese el número entero positivo ${i + 1} de ${cantidad}:`));
        } while (isNaN(numero) || numero <= 0);
        numeros.push(numero);
    }

    // Leer otro valor
    let valor;
    do {
        valor = parseInt(prompt("Ingrese otro número entero positivo para contar sus apariciones:"));
    } while (isNaN(valor) || valor <= 0);

    // Contar apariciones
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === valor) {
            contador++;
        }
    }

    // Imprimir resultado
    console.log(`El número ${valor} aparece ${contador} veces en el vector.`);
}

contarApariciones();


/* Ejercicio 2
Se tiene un vector de 50 elementos se necesita saber si todos son positivos o negativos.
Para ello se le pide que diseñe un programa que imprima “CIERTO” si todos son positivos,
“FALSO” si todos son negativos y, “MIXTO” si el vector tiene elementos positivos y
negativos. */
console.log("\n=== Ejercicio 2 ===\n");

vector = [43, 12, 5, 7, 9, 15, 22, 31, 44, 55, 66, 77, 88, 99, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10,
          11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function verificarPositivosNegativos(vector) {
    let todosPositivos = true;
    let todosNegativos = true;

    for (let i = 0; i < vector.length; i++) {
        if (vector[i] > 0) {
            todosNegativos = false;
        } else if (vector[i] < 0) {
            todosPositivos = false;
        }
    }

    if (todosPositivos) {
        console.log("CIERTO");
    } else if (todosNegativos) {
        console.log("FALSO");
    } else {
        console.log("MIXTO");
    }
}

verificarPositivosNegativos(vector);


/* Ejercicio 3
En un vector de 25 elementos, se desea buscar un dato que será leído. Diseñe un
programa que imprima el mensaje: “VALOR ENCONTRADO”, si en efecto el valor buscado
ya se encuentra entre los elementos, y la posición o subíndice donde se encontró la
primera vez.
Si el valor no se encuentra, se debe sustituir el valor menor por el buscado, imprimiendo
el elemento que sale del vector y la posición que ocupaba. */
console.log("\n=== Ejercicio 3 ===\n");

function buscarValor() {
    let vector = [];
    let cantidad = 25;

    // Leer 25 números enteros
    for (let i = 0; i < cantidad; i++) {
        let numero;
        do {
            numero = parseInt(prompt(`Ingrese el número entero ${i + 1} de ${cantidad}:`));
        } while (isNaN(numero));
        vector.push(numero);
    }

    // Leer el valor a buscar
    let valorBuscado;
    do {
        valorBuscado = parseInt(prompt("Ingrese el valor a buscar:"));
    } while (isNaN(valorBuscado));

    // Buscar el valor en el vector
    let encontrado = false;
    let posicion = -1;

    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === valorBuscado) {
            encontrado = true;
            posicion = i;
            break;
        }
    }

    if (encontrado) {
        console.log(`VALOR ENCONTRADO en la posición ${posicion}`);
    } else {
        // Encontrar el valor menor y su posición
        let valorMenor = vector[0];
        let posicionMenor = 0;

        for (let i = 1; i < vector.length; i++) {
            if (vector[i] < valorMenor) {
                valorMenor = vector[i];
                posicionMenor = i;
            }
        }

        // Sustituir el valor menor por el buscado
        vector[posicionMenor] = valorBuscado;
        console.log(`Se sustituyó el valor ${valorMenor} en la posición ${posicionMenor} por el valor buscado ${valorBuscado}.`);
    }
}

buscarValor();


/* Ejercicio 4
Diseñe un programa que lea dos vectores de igual magnitud o dimensión y luego los
compare. Se debe de imprimir los dos vectores y un mensaje que indique si son iguales
o no. Recordar que: dos vectores son iguales si cada elemento del primer vector se
encuentra exactamente en la misma posición en el segundo. */
console.log("\n=== Ejercicio 4 ===\n");

let vector1 = [3, 5, 7, 9, 11];
let vector2 = [3, 5, 7, 9, 23];

function compararVectores(v1, v2) {
    if (v1.length !== v2.length) {
        console.log("Los vectores no son iguales en magnitud.");
        return;
    }

    let iguales = true;
    for (let i = 0; i < v1.length; i++) {
        if (v1[i] !== v2[i]) {
            iguales = false;
            break;
        }
    }

    console.log("Vector 1:", v1);
    console.log("Vector 2:", v2);
    if (iguales) {
        console.log("Los vectores son iguales.");
    } else {
        console.log("Los vectores no son iguales.");
    }
}

compararVectores(vector1, vector2);

/* Ejercicio 5
Diseñe un programa que almacene en un vector los 50 primeros números primos. Se debe
imprimir todo el vector generado. */
console.log("\n=== Ejercicio 5 ===\n");

function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generarPrimos(cantidad) {
    let primos = [];
    let numero = 2; // Comenzamos desde el primer número primo

    while (primos.length < cantidad) {
        if (esPrimo(numero)) {
            primos.push(numero);
        }
        numero++;
    }

    return primos;
}

let primos50 = generarPrimos(50);
console.log("Los primeros 50 números primos son:", primos50);


/* Ejercicio 6
Se tienen dos vectores a[20] y b[20] diseñe un programa que calcule e imprima los vectores
s[20] y d[20]; sabiendo que: s[i] =a[i]+b[i] y d[i] = a[i] – b[i] */
console.log("\n=== Ejercicio 6 ===\n");

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let b = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let s = [];
let d = [];

for (let i = 0; i < a.length; i++) {
    s[i] = a[i] + b[i];
    d[i] = a[i] - b[i];
}

console.log("Vector a:", a);
console.log("Vector b:", b);
console.log("Vector s:", s);
console.log("Vector d:", d);


/* Ejercicio 7
Se desea conocer la siguiente información de una empresa:
• Imprimir toda la nómina de empleados ordenados por un número correlativo.
• Cuantos empleados ganan más de $1500.00
• Cuántos entre $850.00 y $1500.oo
• Cuantos menos de $850.00
• Porcentaje de empleados con salarios menores de $850.oo
• Porcentaje de empleados cuyo salario oscila entre $850.oo y $1000.oo
• Porcentaje de empleados con salario mayor a $1000.oo
Diseñe el programa correspondiente utilizando vectores. */
console.log("\n=== Ejercicio 7 ===\n");

let empleados = [["Juan", 1200], ["María", 1600], ["Pedro", 800], ["Ana", 950], ["Luis", 2000], ["Sofía", 700], ["Carlos", 1500], ["Lucía", 1100], ["Jorge", 1300], ["Marta", 900]];

function analizarNomina(empleados) {
    let totalEmpleados = empleados.length;
    let masDe1500 = 0;
    let entre850y1500 = 0;
    let menosDe850 = 0;

    console.log("Nómina de empleados:");
    for (let i = 0; i < empleados.length; i++) {
        console.log(`${i + 1}. ${empleados[i][0]} - $${empleados[i][1]}`);
        if (empleados[i][1] > 1500) {
            masDe1500++;
        } else if (empleados[i][1] >= 850 && empleados[i][1] <= 1500) {
            entre850y1500++;
        } else {
            menosDe850++;
        }
    }

    console.log(`\nCantidad de empleados que ganan más de $1500.00: ${masDe1500}`);
    console.log(`Cantidad de empleados que ganan entre $850.00 y $1500.00: ${entre850y1500}`);
    console.log(`Cantidad de empleados que ganan menos de $850.00: ${menosDe850}`);

    let porcentajeMenosDe850 = (menosDe850 / totalEmpleados) * 100;
    let porcentajeEntre850y1000 = (entre850y1500 / totalEmpleados) * 100;
    let porcentajeMasDe1000 = (masDe1500 / totalEmpleados) * 100;

    console.log(`Porcentaje de empleados con salarios menores de $850.00: ${porcentajeMenosDe850.toFixed(2)}%`);
    console.log(`Porcentaje de empleados cuyo salario oscila entre $850.00 y $1500.00: ${porcentajeEntre850y1000.toFixed(2)}%`);
    console.log(`Porcentaje de empleados con salario mayor a $1500.00: ${porcentajeMasDe1000.toFixed(2)}%`);
}

analizarNomina(empleados);


/* Ejercicio 8
Utilizando vectores resuelva el siguiente problema
Teniendo el registro de los equipos de fútbol de la liga española en un vector y la cantidad de
goles obtenidos por cada uno en el último torneo en otro vector
Determine los siguiente datos:
Cual fue el equipo más goleador
Cual fue el equipo con menos goles
Cuantos goles en promedio obtuvo cada equipo
Cuantos goles se dieron en el torneo
Cuales equipos están abajo del promedio de goles
cuales equipos obtuvieron más del promedio de goles */
console.log("\n=== Ejercicio 8 ===\n");

let equipos = ["Real Madrid", "Barcelona", "Atlético de Madrid", "Sevilla", "Valencia"];
let goles = [80, 95, 60, 55, 50];

function analizarGoles(equipos, goles) { 
    let totalGoles = 0;
    let equipoMasGoles = equipos[0];
    let equipoMenosGoles = equipos[0];
    let maxGoles = goles[0];
    let minGoles = goles[0];

    for (let i = 0; i < goles.length; i++) {
        totalGoles += goles[i];
        if (goles[i] > maxGoles) {
            maxGoles = goles[i];
            equipoMasGoles = equipos[i];
        }
        if (goles[i] < minGoles) {
            minGoles = goles[i];
            equipoMenosGoles = equipos[i];
        }
    }

    let promedioGoles = totalGoles / goles.length;

    console.log(`Equipo más goleador: ${equipoMasGoles} con ${maxGoles} goles.`);
    console.log(`Equipo con menos goles: ${equipoMenosGoles} con ${minGoles} goles.`);
    console.log(`Promedio de goles por equipo: ${promedioGoles.toFixed(2)}`);
    console.log(`Total de goles en el torneo: ${totalGoles}`);

    console.log("Equipos abajo del promedio de goles:");
    for (let i = 0; i < goles.length; i++) {
        if (goles[i] < promedioGoles) {
            console.log(`${equipos[i]} con ${goles[i]} goles.`);
        }
    }

    console.log("Equipos con más del promedio de goles:");
    for (let i = 0; i < goles.length; i++) {
        if (goles[i] > promedioGoles) {
            console.log(`${equipos[i]} con ${goles[i]} goles.`);
        }
    }
}

analizarGoles(equipos, goles);


/* Ejercicio 9
Se tiene el registro de notas de 10 estudiantes, ingresados de manera aleatoria
Se solicita que diseñe una solución informática que:
a) Presente el listado de estudiantes por orden alfabético con sus respectivas notas
b) Presente un listado de estudiantes con sus respectivas notas ordenados de menor a
mayor nota
c) Encuentre y muestre al estudiante con mayor nota y cual fue
d) Encuentre y muestre número de aprobados y reprobados
e) Cuál fue la nota menor */
console.log("\n=== Ejercicio 9 ===\n");

let estudiantes = ["Juan", "María", "Pedro", "Ana", "Luis", "Sofía", "Carlos", "Elena", "Diego", "Laura"];
let notas = [85, 92, 78, 96, 88, 91, 84, 89, 87, 90];

function analizarEstudiantes(estudiantes, notas) {
    // a) Listado de estudiantes por orden alfabético con sus respectivas notas
    let estudiantesOrdenados = estudiantes.map((estudiante, index) => ({ nombre: estudiante, nota: notas[index] }));
    estudiantesOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    console.log("Listado de estudiantes por orden alfabético:");
    estudiantesOrdenados.forEach(est => console.log(`${est.nombre}: ${est.nota}`));

    // b) Listado de estudiantes con sus respectivas notas ordenados de menor a mayor nota
    let notasOrdenadas = estudiantes.map((estudiante, index) => ({ nombre: estudiante, nota: notas[index] }));
    notasOrdenadas.sort((a, b) => a.nota - b.nota);
    console.log("\nListado de estudiantes ordenados por nota (menor a mayor):");
    notasOrdenadas.forEach(est => console.log(`${est.nombre}: ${est.nota}`));

    // c) Estudiante con mayor nota
    let maxNota = Math.max(...notas);
    let estudianteMaxNota = estudiantes[notas.indexOf(maxNota)];
    console.log(`\nEstudiante con mayor nota: ${estudianteMaxNota} con ${maxNota}`);

    // d) Número de aprobados y reprobados
    let aprobados = notas.filter(nota => nota >= 60).length;
    let reprobados = notas.length - aprobados;
    console.log(`Número de aprobados: ${aprobados}`);
    console.log(`Número de reprobados: ${reprobados}`);

    // e) Nota menor
    let minNota = Math.min(...notas);
    let estudianteMinNota = estudiantes[notas.indexOf(minNota)];
    console.log(`Nota menor: ${minNota} obtenida por ${estudianteMinNota}`);
}

analizarEstudiantes(estudiantes, notas);