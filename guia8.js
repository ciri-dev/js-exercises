/* Ejercicio 1
Pedir un número entero del rango entre 1 y 15 y muestre en pantalla el mismo
número de asteriscos. */
console.log("\n=== Ejercicio 1 ===\n");

let numero = 8;
let asteriscos = "";

for (let i = 0; i < numero; i++) {
    asteriscos += "*";
    console.log(asteriscos);
}


/* Ejercicio 2
Pedir dos números y mostrar todos los números pares que van desde el primero al
segundo. Se debe controlar que los valores son correctos. */
console.log("\n=== Ejercicio 2 ===\n");

let num1 = 2;
let num2 = 10;

if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


/* Ejercicio 3
Un número es perfecto si la suma de sus divisores menores a él es el mismo
número, por ejemplo: 28 = 1 + 2 + 4 + 7 + 14. Leer n números enteros y
determinar si son o no perfectos. */
console.log("\n=== Ejercicio 3 ===\n");

let n = 3;
let perfectos = 0;

for (let i = 1; i <= n; i++) {
    let numero = 28; // Puedes cambiar este número para probar otros casos
    let sumaDivisores = 0;

    for (let j = 1; j < numero; j++) {
        if (numero % j === 0) {
            sumaDivisores += j;
        }
    }

    if (sumaDivisores === numero) {
        console.log(`${numero} es un número perfecto.`);
        perfectos++;
    } else {
        console.log(`${numero} no es un número perfecto.`);
    }
}

console.log(`Se encontraron ${perfectos} números perfectos.`);


/* Ejercicio 4
Diseñe un programa que pida un número y determine si es primo. Debe parar
cuando se digite el número: -1 */
console.log("\n=== Ejercicio 4 ===\n");

function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let numeroPrimo = 7; // Puedes cambiar este número para probar otros casos

if (numeroPrimo === -1) {
    console.log("Programa terminado.");
} else {
    if (esPrimo(numeroPrimo)) {
        console.log(`${numeroPrimo} es un número primo.`);
    } else {
        console.log(`${numeroPrimo} no es un número primo.`);
    }
}


/* Ejercicio 5
Se ingresan las temperaturas de cada dia de la semana, determinar e informar:
a. Promedio de temperatura semanal
b. El día mas frio y el más caluroso
c. Porcentaje de temperaturas bajo cero */
console.log("\n=== Ejercicio 5 ===\n");

function calcularTemperaturas(temperaturas) {
    let suma = 0;
    let diaMasFrio = 0;
    let diaMasCaluroso = 0;
    let temperaturasBajoCero = 0;

    for (let i = 0; i < temperaturas.length; i++) {
        suma += temperaturas[i];

        if (temperaturas[i] < temperaturas[diaMasFrio]) {
            diaMasFrio = i;
        }

        if (temperaturas[i] > temperaturas[diaMasCaluroso]) {
            diaMasCaluroso = i;
        }

        if (temperaturas[i] < 0) {
            temperaturasBajoCero++;
        }
    }

    let promedio = suma / temperaturas.length;
    let porcentajeBajoCero = (temperaturasBajoCero / temperaturas.length) * 100;

    console.log(`Promedio de temperatura semanal: ${promedio.toFixed(2)}°C`);
    console.log(`Día más frío: Día ${diaMasFrio + 1} con ${temperaturas[diaMasFrio]}°C`);
    console.log(`Día más caluroso: Día ${diaMasCaluroso + 1} con ${temperaturas[diaMasCaluroso]}°C`);
    console.log(`Porcentaje de temperaturas bajo cero: ${porcentajeBajoCero.toFixed(2)}%`);
}

let temperaturasSemana = [5, -2, 3, 8, 32, -1, 10]; // Puedes cambiar estos valores para probar otros casos
calcularTemperaturas(temperaturasSemana);


/* Ejercicio 6
Según norma de la EPA el nivel máximo permisible de plomo en aire es de 0.15 µg/m3; 
dado un conjunto de puntos y dadas las mediciones de plomo hechas en
aire en cada punto. Desplegar, si los hay, los puntos donde la medición sobrepasa
el nivel permitido */
console.log("\n=== Ejercicio 6 ===\n");

function verificarPlomo(mediciones) {
    const nivelMaximo = 0.15;
    let puntosExcedidos = [];

    for (let i = 0; i < mediciones.length; i++) {
        if (mediciones[i] > nivelMaximo) {
            puntosExcedidos.push(i + 1); // Guardamos el índice del punto (1-based)
        }
    }

    if (puntosExcedidos.length > 0) {
        console.log(`Los siguientes puntos exceden el nivel permitido de plomo: ${puntosExcedidos.join(", ")}`);
    } else {
        console.log("No hay puntos que excedan el nivel permitido de plomo.");
    }
}

let medicionesPlomo = [0.10, 0.20, 0.05, 0.18, 0.12]; // Puedes cambiar estos valores para probar otros casos
verificarPlomo(medicionesPlomo);


/* Ejercicio 7
Parqueo “El Centro” quiere, a partir de los tiquetes de toda la semana, calcular el
total de ingreso diario y semanal, los tiquetes están ordenados por dia, pero la
cantidad diaria de tiquetes no se sabe. Diseñe una solución que despliegue el total
diario y el total semanal de ingreso. */
console.log("\n=== Ejercicio 7 ===\n");

function calcularIngresos(tiquetes) {
    let totalSemanal = 0;

    for (let i = 0; i < tiquetes.length; i++) {
        let totalDiario = tiquetes[i].reduce((acumulador, valor) => acumulador + valor, 0);
        totalSemanal += totalDiario;
        console.log(`Total de ingreso del día ${i + 1}: $${totalDiario.toFixed(2)}`);
    }

    console.log(`Total de ingreso semanal: $${totalSemanal.toFixed(2)}`);
}

let tiquetesSemana = [
    [5.00, 3.50, 4.00], // Día 1
    [6.00, 2.50],       // Día 2
    [4.00, 4.50, 5.00], // Día 3
    [3.00],             // Día 4
    [7.00, 8.50], // Día 5
    [2.00, 3.00, 4.00], // Día 6
    [5.50]              // Día 7
];

calcularIngresos(tiquetesSemana);


/* Ejercicio 8
Dada la cantidad de estudiantes y la cantidad de notas por estudiante imprima el
promedio de cada estudiante, la cantidad y porcentaje de aprobados. */
console.log("\n=== Ejercicio 8 ===\n");

function calcularPromedios(estudiantes) {
    let cantidadAprobados = 0;

    for (let i = 0; i < estudiantes.length; i++) {
        let sumaNotas = estudiantes[i].reduce((acumulador, nota) => acumulador + nota, 0);
        let promedio = sumaNotas / estudiantes[i].length;
        console.log(`Promedio del estudiante ${i + 1}: ${promedio.toFixed(2)}`);

        if (promedio >= 60) { // Suponiendo que la nota mínima para aprobar es 60
            cantidadAprobados++;
        }
    }

    let porcentajeAprobados = (cantidadAprobados / estudiantes.length) * 100;
    console.log(`Cantidad de aprobados: ${cantidadAprobados}`);
    console.log(`Porcentaje de aprobados: ${porcentajeAprobados.toFixed(2)}%`);
}

let notasEstudiantes = [
    [70, 80, 90], // Estudiante 1
    [50, 60, 55], // Estudiante 2
    [90, 85, 95], // Estudiante 3
    [40, 45, 50]  // Estudiante 4
];

calcularPromedios(notasEstudiantes);


/* Ejercicio 9
Diseñe una solución que permita ingresar la nota del primer parcial de IAI115, por
grupo de teórico (asuma que son 3 grupos) la cantidad de alumnos por grupo varía
o se desconoce. Diseñe una solución que imprima el promedio por grupo teórico. */
console.log("\n=== Ejercicio 9 ===\n");

function calcularPromedioPorGrupo(grupos) {
    for (let i = 0; i < grupos.length; i++) {
        let sumaNotas = grupos[i].reduce((acumulador, nota) => acumulador + nota, 0);
        let promedio = sumaNotas / grupos[i].length;
        console.log(`Promedio del grupo ${i + 1}: ${promedio.toFixed(2)}`);
    }
}

let notasGrupos = [
    [85, 90, 78], // Grupo 1
    [70, 75, 80, 65], // Grupo 2
    [88, 92] // Grupo 3
];

calcularPromedioPorGrupo(notasGrupos);


/* Ejercicio 10
Fábrica de Baterías “Trueno” realiza exámenes de plomo en sangre a sus
empleados. Se toman 3 muestras a fin de mes. Diseñe una solución que para cada
empleado lea nombre y los 3 resultados en µg/dL. De encontrarse un trabajador
con niveles de plomo en sangre mayores a 40, imprima nombre, resultado en µg/dL
y el mensaje: pasar a revisión médica. */
console.log("\n=== Ejercicio 10 ===\n");

function verificarPlomoEmpleados(empleados) {
    for (let i = 0; i < empleados.length; i++) {
        let nombre = empleados[i].nombre;
        let resultados = empleados[i].resultados;

        for (let j = 0; j < resultados.length; j++) {
            if (resultados[j] > 40) {
                console.log(`Empleado: ${nombre}, Resultado: ${resultados[j]} µg/dL - Pasar a revisión médica.`);
            }
        }
    }
}

let empleados = [
    { nombre: "Juan", resultados: [35, 42, 38] },
    { nombre: "María", resultados: [30, 28, 25] },
    { nombre: "Carlos", resultados: [45, 50, 48] }
];

verificarPlomoEmpleados(empleados);


/* Ejercicio 11
Diseñe una solución que dada la cantidad n de años permite ingresar las ventas
trimestrales de una tienda por departamentos. y que imprima las ventas totales por
año. */
console.log("\n=== Ejercicio 11 ===\n");

function calcularVentasTotales(ventas) {
    for (let i = 0; i < ventas.length; i++) {
        let totalAnual = ventas[i].reduce((acumulador, venta) => acumulador + venta, 0);
        console.log(`Ventas totales del año ${i + 1}: $${totalAnual.toFixed(2)}`);
    }
}

let ventasAnios = [
    [15000, 20000, 25000, 30000], // Año 1
    [18000, 22000, 27000, 32000], // Año 2
    [20000, 25000, 30000, 35000]  // Año 3
];

calcularVentasTotales(ventasAnios);


/* Ejercicio 12
ANDA regula/verifica el nivel de plomo en agua de las envasadoras comerciales de
agua de bebida. Para lo cual realiza varias visitas no anunciadas durante el mes a
cada envasadora y en cada visita toma varias muestras. Diseñe una solución que
de darse el caso imprima nombre de la envasadora y valor de la(s) muestra(s) que
sobrepase(n) el nivel máximo de plomo que es de 15 µg/L */
console.log("\n=== Ejercicio 12 ===\n");

function verificarPlomoEnvasadoras(envasadoras) {
    const nivelMaximo = 15;

    for (let i = 0; i < envasadoras.length; i++) {
        let nombre = envasadoras[i].nombre;
        let muestras = envasadoras[i].muestras;
        let excedentes = [];

        for (let j = 0; j < muestras.length; j++) {
            if (muestras[j] > nivelMaximo) {
                excedentes.push(muestras[j]);
            }
        }

        if (excedentes.length > 0) {
            console.log(`Envasadora: ${nombre}, Muestras que exceden el nivel permitido: ${excedentes.join(", ")} µg/L`);
        }
    }
}

let envasadoras = [
    { nombre: "Agua Clara", muestras: [10, 12, 16, 14] },
    { nombre: "Aqua Pura", muestras: [8, 9, 11, 13] },
    { nombre: "H2O Fresco", muestras: [15, 17, 14, 18] }
];

verificarPlomoEnvasadoras(envasadoras);


/* Ejercicio 13 
Diseñe una solución que dada la cantidad de años lea para cada año el monto de
cada una de las compras de petróleo en $ (la cantidad de compras por año varía);
se debe imprimir el promedio por año y el total en los n años.*/
console.log("\n=== Ejercicio 13 ===\n");

function calcularPromedioCompras(compras) {
    let totalGeneral = 0;

    for (let i = 0; i < compras.length; i++) {
        let totalAnual = compras[i].reduce((acumulador, compra) => acumulador + compra, 0);
        let promedioAnual = totalAnual / compras[i].length;
        totalGeneral += totalAnual;

        console.log(`Promedio de compras del año ${i + 1}: $${promedioAnual.toFixed(2)}`);
    }

    console.log(`Total de compras en ${compras.length} años: $${totalGeneral.toFixed(2)}`);
}

let comprasPetroleo = [
    [10000, 15000, 20000], // Año 1
    [12000, 18000],        // Año 2
    [25000, 30000, 35000]  // Año 3
];

calcularPromedioCompras(comprasPetroleo);


/* Ejercicio 14
Diseñe una solución que dada la cantidad n de años permite ingresar las ventas
trimestrales de una tienda por departamentos. y que imprima la venta más alta y el
año/trimestre respectivo. */
console.log("\n=== Ejercicio 14 ===\n");

function encontrarVentaMasAlta(ventas) {
    let ventaMasAlta = 0;
    let añoMasAlta = 0;
    let trimestreMasAlta = 0;

    for (let i = 0; i < ventas.length; i++) {
        for (let j = 0; j < ventas[i].length; j++) {
            if (ventas[i][j] > ventaMasAlta) {
                ventaMasAlta = ventas[i][j];
                añoMasAlta = i + 1; // Año (1-based)
                trimestreMasAlta = j + 1; // Trimestre (1-based)
            }
        }
    }

    console.log(`Venta más alta: $${ventaMasAlta.toFixed(2)} en el año ${añoMasAlta}, trimestre ${trimestreMasAlta}`);
}

let ventasAniosTrimestres = [
    [15000, 20000, 25000, 30000], // Año 1
    [18000, 22000, 27000, 32000], // Año 2
    [20000, 25000, 30000, 35000]  // Año 3
];

encontrarVentaMasAlta(ventasAniosTrimestres);


/* Ejercicio 15
Dado que la cantidad de grupos teóricos es diferente y la cantidad de alumnos
examinados por grupo teórico también, diseñe una solución que permita ingresar
por grupo teórico la nota de cada estudiante e imprima la nota promedio de cada
grupo. */
console.log("\n=== Ejercicio 15 ===\n");

function calcularPromedioPorGrupoDinamico(grupos) {
    for (let i = 0; i < grupos.length; i++) {
        let sumaNotas = grupos[i].reduce((acumulador, nota) => acumulador + nota, 0);
        let promedio = sumaNotas / grupos[i].length;
        console.log(`Promedio del grupo ${i + 1}: ${promedio.toFixed(2)}`);
    }
}

let notasGruposDinamicos = [
    [85, 90, 78], // Grupo 1
    [70, 75, 80, 65], // Grupo 2
    [88, 92] // Grupo 3
];

calcularPromedioPorGrupoDinamico(notasGruposDinamicos);


/* Ejercicio 16
 Desplegar por pantalla los primeros 15 números positivos múltiplos de 3 */
console.log("\n=== Ejercicio 16 ===\n");

for (let i = 1; i <= 15; i++) {
    console.log(i * 3);
}


/* Ejercicio 17
 Desplegar por pantalla los primeros 15 números positivos múltiplos de 5 
 y que son impares */
console.log("\n=== Ejercicio 17 ===\n");

for (let i = 1; i <= 15; i++) {
    if ((i * 5) % 2 !== 0) {
        console.log(i * 5);
    }
}


/* Ejercicio 18
Desplegar por pantalla las potencias de 2^0 hasta 2^10 */
console.log("\n=== Ejercicio 18 ===\n");

for (let index = 0; index <= 10; index++) {
    console.log(`2^${index} = ${Math.pow(2, index)}`);    
}


/* Ejercicio 19
Desplegar por pantalla la cantidad de meses acumulados de 1 a 15 años.
Ejemplo: 1 año -> 12 meses
         2 años -> 24 meses
         15 años -> 180 meses */
console.log("\n=== Ejercicio 19 ===\n");

for (let year = 1; year <= 15; year++) {
    let meses = year * 12;
    console.log(`${year} año(s) -> ${meses} meses`);
}


/* Ejercicio 20
Desplegar por pantalla la cantidad de minutos acumulados de 1 a 12 horas.
Ejemplo: 1 hora -> 60 minutos
         2 horas -> 120 minutos
         12 horas -> 720 minutos */
console.log("\n=== Ejercicio 20 ===\n");

for (let hour = 1; hour <= 12; hour++) {
    let minutos = hour * 60;
    console.log(`${hour} hora(s) -> ${minutos} minutos`);
}


/* Ejercicio 21
Desplegar por pantalla la cantidad de segundos acumulados de 1 a 10 minutos.
Ejemplo: 1 minuto -> 60 segundos
         2 minutos -> 120 segundos 
         10 minutos -> 600 segundos */
console.log("\n=== Ejercicio 21 ===\n");

for (let minute = 1; minute <= 10; minute++) {
    let segundos = minute * 60;
    console.log(`${minute} minuto(s) -> ${segundos} segundos`);
}


/* Ejercicio 22
Desplegar por pantalla la cantidad de segundos acumulados de 1 a 12 horas.
Ejemplo: 1 hora -> 3600 segundos
         2 horas -> 7200 segundos 
         12 horas -> 43200 segundos */
console.log("\n=== Ejercicio 22 ===\n");

for (let hour = 1; hour <= 12; hour++) {
    let segundos = hour * 3600;
    console.log(`${hour} hora(s) -> ${segundos} segundos`);
}


/* Ejercicio 23
Desplegar por pantalla la cantidad de horas acumuladas de 1 a 7 días.
Ejemplo: 1 día -> 24 horas
         2 días -> 48 horas 
         7 días -> 168 horas */
console.log("\n=== Ejercicio 23 ===\n");

for (let day = 1; day <= 7; day++) {
    let horas = day * 24;
    console.log(`${day} día(s) -> ${horas} horas`);
}


/* Ejercicio 24
Desplegar por pantalla la cantidad de días acumulados de 1 a 7 años.
Ejemplo: 1 año -> 365 días
         2 años -> 730 días ...
         7 años -> 2555 días */
console.log("\n=== Ejercicio 24 ===\n");

for (let year = 1; year <= 7; year++) {
    let dias = year * 365;
    console.log(`${year} año(s) -> ${dias} días`);
}


/* Ejercicio 25
Desplegar por pantalla el factorial desde 0! hasta 7!.
Ejemplo: 0! -->1
         1! -->1
         2! -->2
         3! -->6 */
console.log("\n=== Ejercicio 25 ===\n");

for (let i = 0; i <= 7; i++) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
        factorial *= j;
    }
    console.log(`${i}! --> ${factorial}`);
}


/* Ejercicio 26
Desplegar por pantalla las tablas de multiplicar del 1 al 9.
Ejemplo: TABLA DEL 1 TABLA DEL 2 TABLA DEL 3 … TABLA DEL
9
1 x 1 = 1 2 x 1 = 2 3 x 1 = 3 9 x 1 = 9
1 x 2 = 2 2 x 2 = 4 3 x 2 = 6 9 x 2 = 18 */
console.log("\n=== Ejercicio 26 ===\n");

for (let i = 1; i <= 9; i++) {
    console.log(`TABLA DEL ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(""); // Línea en blanco para separar las tablas
}


/* Ejercicio 27
Desplegar por pantalla la sumatoria de los primeros 10 números enteros negativos */
console.log("\n=== Ejercicio 27 ===\n");

let sum = 0;
for (let i = -1; i >= -10; i--) {
    sum += i;
}
console.log(`La sumatoria de los primeros 10 números enteros negativos es: ${sum}`);


/* Ejercicio 28
Desplegar por pantalla el cuadrado y el cubo de los números enteros desde -7
hasta 7. */
console.log("\n=== Ejercicio 28 ===\n");

for (let i = -7; i <= 7; i++) {
    console.log(`${i} -> Cuadrado: ${i ** 2}, Cubo: ${i ** 3}`);
}


/* Ejercicio 29
Desplegar por pantalla el producto de los 10 primeros números enteros negativos */
console.log("\n=== Ejercicio 29 ===\n");

let product = 1;
for (let i = -1; i >= -10; i--) {
    product *= i;
}
console.log(`El producto de los 10 primeros números enteros negativos es: ${product}`);


/* Ejercicio 30
Desplegar por pantalla los valores de X y f(X)= X3+3x+1 para valores enteros [-5,5] */
console.log("\n=== Ejercicio 30 ===\n");

for (let x = -5; x <= 5; x++) {
    let fX = Math.pow(x, 3) + 3 * x + 1;
    console.log(`X: ${x}, f(X): ${fX}`);
}