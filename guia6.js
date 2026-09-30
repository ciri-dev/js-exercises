/* Ejercicio 1
Dado un número entero, desplegar un mensaje indicando si es positivo, es negativo o es cero. */
console.log("\n=== Ejercicio 1 ===");

let numero = 5;
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}


/* Ejercicio 2
En la empresa “Plásticos S.A.”, se ha descompuesto el medidor de temperatura en grados centígrados 
con graduación de color. Pero se tiene un termómetro en grados fahrenheit sin graduación de color. 
Crear una solución que dada la temperatura en grados fahrenheit muestre el color y mensaje que 
corresponde al medidor de grados centígrados. */
console.log("\n=== Ejercicio 2 ===");

let temperaturaFahrenheit = 77;
let temperaturaCentigrados = (temperaturaFahrenheit - 32) * 5/9;

if (temperaturaCentigrados >= 0 && temperaturaCentigrados <= 15.00) {
    console.log("Azul (Frío)");
} else if (temperaturaCentigrados > 15.00 && temperaturaCentigrados <= 35.00) {
    console.log("Verde (Normal)");
} else if (temperaturaCentigrados > 35.00 && temperaturaCentigrados <= 45.00) {
    console.log("Amarillo (Precaucion)");
} else {
    console.log("Rojo (Peligro)");
}


/* Ejercicio 3
Diseñe una solución que dado un número calcule el valor absoluto del número. El número
puede ser entero o real. NO DEBE USAR la clase Math. */
console.log("\n=== Ejercicio 3 ===");

let numero = -10;
let valorAbsoluto;

if (numero < 0) {
    valorAbsoluto = -numero;
} else {
    valorAbsoluto = numero;
}

console.log(`El valor absoluto de ${numero} es: ${valorAbsoluto}`);


/* Ejercicio 4
Diseñe una solución que dado un número real y un exponente entero; calcule el valor del
número elevado a la potencia dada por el exponente. El cálculo debe poder realizarse para
exponentes enteros entre -4 y 4, incluyendo el cero. NO DEBE USAR la clase Math. */
console.log("\n=== Ejercicio 4 ===");

let base = 2;
let exponente = 2;
let resultado = 1;

if (exponente < -4 || exponente > 4) {
    console.log("El exponente debe estar entre -4 y 4.");
} else if (exponente === 0) {
    resultado = 1;
} else if (exponente > 0) {
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
} else {
    for (let i = 0; i < -exponente; i++) {
        resultado /= base;
    }
}

console.log(`${base} elevado a la potencia de ${exponente} es: ${resultado}`);


/* Ejercicio 5
Diseñe una solución que dado un valor en Bytes, lo imprima en términos de Gigabytes,
Megabytes y Kilobytes. Ejemplo de impresiones: 1 Gb 3 Mb 2 Kb, pero sí la cantidad resulta
ser cero no debe imprimirse. Ejemplo: 3 Mb 100 Kb (la cantidad de Gb es cero) */
console.log("\n=== Ejercicio 5 ===");

let bytes = 1448576; // 1 MB in bytes
let gigabytes = Math.floor(bytes / (1024 * 1024 * 1024));
let megabytes = Math.floor((bytes % (1024 * 1024 * 1024)) / (1024 * 1024));
let kilobytes = Math.floor((bytes % (1024 * 1024)) / 1024);

let impresion = "";
if (gigabytes > 0) {
    impresion += `${gigabytes} Gb `;
}
if (megabytes > 0) {
    impresion += `${megabytes} Mb `;
}
if (kilobytes > 0) {
    impresion += `${kilobytes} Kb `;
}

console.log(impresion.trim());


/* Ejercicio 6
Dadas la talla de cintura de una persona y la distancia de la cintura al tobillo en
centímetros, despliegue si su talla es S, M ó L y la cantidad de tela, en yardas, necesaria para
hacer un pantalón. Tomar en cuenta que: S (menor a 60 cm), M (de 60 a 80cm), L (mayor que
80cm). La cantidad de tela a utilizar, viene dada por la relación: ((cintura+altura)/2) * 2.5 / 91.44 */
console.log("\n=== Ejercicio 6 ===\n");

let tallaCintura = 75; // en cm
let distanciaCinturaTobillo = 100; // en cm

let talla;
if (tallaCintura < 60) {
    talla = "S";
} else if (tallaCintura <= 80) {
    talla = "M";
} else {
    talla = "L";
}

let cantidadTelaYardas = ((tallaCintura + distanciaCinturaTobillo) / 2) * 2.5 / 91.44;

console.log(`Talla: ${talla}`);
console.log(`Cantidad de tela necesaria: ${cantidadTelaYardas.toFixed(2)} yardas`);


/* Ejercicio 7
Diseñe una solución que calcule y despliegue la raíz cuadrada de un número. Sí el número es
negativo, debe desplegar la raíz imaginaria en la forma ai, donde i=√-1 Ejemplo: √-4 = 2i */
console.log("\n=== Ejercicio 7 ===\n");

let numero = -4;
if (numero >= 0) {
    let raizCuadrada = 0;
    let i = 0;
    while (i * i < numero) {
        i++;
    }
    if (i * i === numero) {
        raizCuadrada = i;
    } else {
        raizCuadrada = "No es un cuadrado perfecto";
    }
    console.log(`La raíz cuadrada de ${numero} es: ${raizCuadrada}`);
} else {
    let raizImaginaria = 0;
    let i = 0;
    while (i * i < -numero) {
        i++;
    }
    if (i * i === -numero) {
        raizImaginaria = i;
    } else {
        raizImaginaria = "No es un cuadrado perfecto";
    }
    console.log(`La raíz cuadrada de ${numero} es: ${raizImaginaria}i`);
}


/* Ejercicio 8
Diseñe una solución que dado el tiempo en segundos, lo calcule en términos de días, horas y
minutos. Ejemplo: 1 Día 3 Horas 2 Minutos, pero sí la cantidad es cero no debe desplegarse.
Ejemplo: 1 Día 7 Minutos (la cantidad de Horas es cero) */
console.log("\n=== Ejercicio 8 ===\n");

let tiempoSegundos = 93784; // Ejemplo de tiempo en segundos
let dias = Math.floor(tiempoSegundos / (24 * 3600));
let horas = Math.floor((tiempoSegundos % (24 * 3600)) / 3600);
let minutos = Math.floor((tiempoSegundos % 3600) / 60);

let tiempoDesplegado = "";
if (dias > 0) {
    tiempoDesplegado += `${dias} Día${dias > 1 ? 's' : ''} `;
}
if (horas > 0) {
    tiempoDesplegado += `${horas} Hora${horas > 1 ? 's' : ''} `;
}
if (minutos > 0) {
    tiempoDesplegado += `${minutos} Minuto${minutos > 1 ? 's' : ''}`;
}

console.log(tiempoDesplegado.trim());


/* Ejercicio 9
Diseñe una solución que dada una distancia en Millas, la calcule en términos de Kilómetros, Metros
y Centímetros. Ejemplo: 1 Km 3 Mts 2 Cms, pero sí la cantidad es cero no debe desplegarse.
Ejemplo: 3 Mts (la cantidad de Kms y de Cms es cero) */
console.log("\n=== Ejercicio 9 ===\n");

let distanciaMillas = 1; // Ejemplo de distancia en millas
let distanciaKilometros = distanciaMillas * 1.00334;
let kilometros = Math.floor(distanciaKilometros);
let metros = Math.floor((distanciaKilometros - kilometros) * 1000);
let centimetros = Math.floor(((distanciaKilometros - kilometros) * 1000 - metros) * 100);

let distanciaDesplegada = "";
if (kilometros > 0) {
    distanciaDesplegada += `${kilometros} Km `;
}
if (metros > 0) {
    distanciaDesplegada += `${metros} Mts `;
}
if (centimetros > 0) {
    distanciaDesplegada += `${centimetros} Cms`;
}

console.log(distanciaDesplegada.trim());


/* Ejercicio 10
Diseñe una solución que dadas dos temperaturas (máxima y mínima) en grados centígrados las
convierta a grados fahrenheit y grados kelvin. Debe mostrar las temperaturas original y las
conversiones en pantalla, con sus respectivos mensajes de entrada y salida. */
console.log("\n=== Ejercicio 10 ===\n");

let tempMaxima = 30; // Ejemplo de temperatura máxima en grados centígrados
let tempMinima = 10; // Ejemplo de temperatura mínima en grados centígrados

let tempMaxFahrenheit = (tempMaxima * 9/5) + 32;
let tempMinFahrenheit = (tempMinima * 9/5) + 32;
let tempMaxKelvin = tempMaxima + 273.15;
let tempMinKelvin = tempMinima + 273.15;

console.log(`Temperatura máxima: ${tempMaxima}°C, ${tempMaxFahrenheit.toFixed(2)}°F, ${tempMaxKelvin.toFixed(2)}K`);
console.log(`Temperatura mínima: ${tempMinima}°C, ${tempMinFahrenheit.toFixed(2)}°F, ${tempMinKelvin.toFixed(2)}K`);


/* Ejercicio 11
Diseñe una solución que dado un ángulo en grados calcule y despliegue el seno, coseno y tangente
para ese ángulo. Considere que en algunos casos dichas razones trigonométricas no están
definidas. Ejemplo: Tang(90) Nota: recordar que los lenguajes de programación trabajan en
radianes. */
console.log("\n=== Ejercicio 11 ===\n");

let anguloGrados = 45; // Ejemplo de ángulo en grados
let anguloRadianes = (anguloGrados * Math.PI) / 180;
let seno = Math.sin(anguloRadianes);
let coseno = Math.cos(anguloRadianes);
let tangente = Math.tan(anguloRadianes);

console.log(`Seno: ${seno.toFixed(2)}`);
console.log(`Coseno: ${coseno.toFixed(2)}`);
console.log(`Tangente: ${tangente.toFixed(2)}`);


/* Ejercicio 12
Diseñe una solución que dado el radio de un disco, la base y altura de un rectángulo, calcule y
despliegue la circunferencia del disco y el perímetro del rectángulo así como el área del disco y el
área del rectángulo. Los radios y longitudes deben ser positivos y la base diferente a la altura. */
console.log("\n=== Ejercicio 12 ===\n");

let radioDisco = 5; // Ejemplo de radio del disco
let baseRectangulo = 10; // Ejemplo de base del rectángulo
let alturaRectangulo = 5; // Ejemplo de altura del rectángulo

if (radioDisco <= 0 || baseRectangulo <= 0 || alturaRectangulo <= 0) {
    console.log("Los radios y longitudes deben ser positivos.");
} else if (baseRectangulo === alturaRectangulo) {
    console.log("La base y la altura del rectángulo deben ser diferentes.");
} else {
    let circunferenciaDisco = 2 * Math.PI * radioDisco;
    let areaDisco = Math.PI * radioDisco * radioDisco;
    let perimetroRectangulo = 2 * (baseRectangulo + alturaRectangulo);
    let areaRectangulo = baseRectangulo * alturaRectangulo;

    console.log(`Circunferencia del disco: ${circunferenciaDisco.toFixed(2)}`);
    console.log(`Área del disco: ${areaDisco.toFixed(2)}`);
    console.log(`Perímetro del rectángulo: ${perimetroRectangulo.toFixed(2)}`);
    console.log(`Área del rectángulo: ${areaRectangulo.toFixed(2)}`);
}


/* Ejercicio 13
Dada la cantidad de televisores ordenada por una comercial a la fábrica y el precio por unidad,
calcule el monto total que debe pagar la comercial, si el pedido minimo es de 100 unidades, y se
aplica descuento del 5% de 201 a 300 unidades y del 10% de 301 unidades en adelante. */
console.log("\n=== Ejercicio 13 ===\n");

function calcularMontoTotal(cantidad, precioUnidad) {
    if (cantidad < 100) {
        console.log("El pedido mínimo es de 100 unidades.");
        return;
    }

    let montoTotal = cantidad * precioUnidad;

    if (cantidad >= 201 && cantidad <= 300) {
        montoTotal *= 0.95; // Aplicar descuento del 5%
    } else if (cantidad >= 301) {
        montoTotal *= 0.90; // Aplicar descuento del 10%
    }

    console.log(`Monto total a pagar por ${cantidad} televisores a $${precioUnidad} cada uno: $${montoTotal.toFixed(2)}`);
}

calcularMontoTotal(250, 500); // Pedido de 250 televisores a $500 cada uno
calcularMontoTotal(350, 400); // Pedido de 350 televisores a $400 cada uno
calcularMontoTotal(50, 600);  // Pedido de 50 televisores a $600 cada uno 


/* Ejercicio 14
Dados el nombre, salario y puesto de un empleado, calcule y despliegue el Bono Navideño en
dólares. Bonos->Gerente 30% Supervisor 20% Asistente 15% Secretaria 10% Ordenanza 5% */
console.log("\n=== Ejercicio 14 ===\n");

function calcularBonoNavideno(nombre, salario, puesto) {
    let bono = 0;

    switch (puesto.toLowerCase()) {
        case "gerente":
            bono = salario * 0.30;
            break;
        case "supervisor":
            bono = salario * 0.20;
            break;
        case "asistente":
            bono = salario * 0.15;
            break;
        case "secretaria":
            bono = salario * 0.10;
            break;
        case "ordenanza":
            bono = salario * 0.05;
            break;
        default:
            console.log("Puesto no reconocido.");
            return;
    }

    console.log(`Empleado: ${nombre}, Puesto: ${puesto}, Salario: $${salario.toFixed(2)}, Bono Navideño: $${bono.toFixed(2)}`);
}

calcularBonoNavideno("Juan Pérez", 50000, "Gerente");
calcularBonoNavideno("María López", 40000, "Supervisor");
calcularBonoNavideno("Carlos Sánchez", 30000, "Asistente");
calcularBonoNavideno("Ana Gómez", 25000, "Secretaria");
calcularBonoNavideno("Luis Torres", 20000, "Ordenanza");


/* Ejercicio 15
Diseñe una solución que permita leer dos números y que despliegue el número mayor, el número
menor o un mensaje de que los números son iguales. */
console.log("\n=== Ejercicio 15 ===\n");

let numero1 = 10; // Primer número
let numero2 = 20; // Segundo número

if (numero1 > numero2) {
    console.log(`El número mayor es: ${numero1}`);
} else if (numero1 < numero2) {
    console.log(`El número mayor es: ${numero2}`);
} else {
    console.log("Los números son iguales.");
}   


/* Ejercicio 16
Dadas las coordenadas de un punto en el plano cartesiano, despliegue un mensaje indicando en
qué cuadrante se encuentra ó si está en el eje x, ó en eje y, ó en el origen. */
console.log("\n=== Ejercicio 16 ===\n");

let x = 5; // Coordenada x
let y = 10; // Coordenada y

if (x === 0 && y === 0) {
    console.log("El punto está en el origen.");
} else if (x === 0) {
    console.log("El punto está en el eje y.");
} else if (y === 0) {
    console.log("El punto está en el eje x.");
} else if (x > 0 && y > 0) {
    console.log("El punto está en el primer cuadrante.");
} else if (x < 0 && y > 0) {
    console.log("El punto está en el segundo cuadrante.");
} else if (x < 0 && y < 0) {
    console.log("El punto está en el tercer cuadrante.");
} else {
    console.log("El punto está en el cuarto cuadrante.");
}


/* Ejercicio 17
Dado el número de apartamento en un complejo de edificios, despliegue el edificio, la planta o nivel
y el número de puerta dentro de dicho nivel al que corresponde el departamento. Son 7 edificios,
cada edificio es de 7 plantas y posee 7 apartamentos por planta o nivel. Diseñe ud. el número de
apartamento dentro del cual debe poder identificarse edificio, nivel y número de puerta. */
console.log("\n=== Ejercicio 17 ===\n");

let numeroApartamento = 150; // Ejemplo de número de apartamento
let apartamentosPorEdificio = 7 * 7;
let edificio = Math.floor((numeroApartamento - 1) / apartamentosPorEdificio) + 1;
let planta = Math.floor(((numeroApartamento - 1) % apartamentosPorEdificio) / 7) + 1;
let puerta = ((numeroApartamento - 1) % 7) + 1;

console.log(`Apartamento ${numeroApartamento} corresponde a: Edificio ${edificio}, Planta ${planta}, Puerta ${puerta}`);


/* Ejercicio 18
En la Facultad de Ingeniería y Arquitectura, los alumnos que obtengan una nota de ciclo entre 5.0 y
5.94 inclusive, tienen derecho a realizar un examen de Suficiencia con el cual tienen la opción de
aprobar la asignatura. Diseñe una solución que permita conocer a partir del promedio del estudiante,
si califica o no para hacer el examen de Suficiencia. También se debe reportar si el alumno aprobó o
reprobó, con el promedio proporcionado. */
console.log("\n=== Ejercicio 18 ===\n");

let promedio = 5.5; // Ejemplo de promedio del estudiante

if (promedio >= 5.0 && promedio <= 5.94) {
    console.log("El estudiante califica para realizar el examen de Suficiencia.");
} else if (promedio >= 6.0) {
    console.log("El estudiante aprobó la asignatura.");
} else {
    console.log("El estudiante reprobó la asignatura.");
}   


/* Ejercicio 19
En un cine se hace un 50% de descuento en el valor de la entrada a las personas mayores de 60
años y a los menores de 18 años, el resto de personas (18-60) paga el monto sin descuento. Dadas
la edad y el precio del boleto, calcule cuánto pagará una persona por su entrada. */
console.log("\n=== Ejercicio 19 ===\n");

let edad = 25; // Ejemplo de edad
let precioBoleto = 10000; // Ejemplo de precio del boleto
let montoPagar;

if (edad > 60 || edad < 18) {
    montoPagar = precioBoleto * 0.5;
} else {
    montoPagar = precioBoleto;
}

console.log(`La persona pagará: $${montoPagar}`);


/* Ejercicio 20
Dada la cantidad de productos y el precio por unidad, calcule y despliegue el total a pagar si el
pedido mínimo de productos es de 500 y se aplican descuentos del 10% para pedidos de 700 -
800 ambos inclusive y 20% para pedidos de más de 800 productos. */
console.log("\n=== Ejercicio 20 ===\n");

function calcularTotalAPagar(cantidadProductos, precioUnidad) {
    if (cantidadProductos < 500) {
        console.log("El pedido mínimo es de 500 productos.");
        return;
    }

    let total = cantidadProductos * precioUnidad;

    if (cantidadProductos >= 700 && cantidadProductos <= 800) {
        total *= 0.90; // Aplicar descuento del 10%
    } else if (cantidadProductos > 800) {
        total *= 0.80; // Aplicar descuento del 20%
    }

    console.log(`Total a pagar por ${cantidadProductos} productos a $${precioUnidad} cada uno: $${total.toFixed(2)}`);
}

calcularTotalAPagar(750, 50); // Pedido de 750 productos a $50 cada uno
calcularTotalAPagar(850, 40); // Pedido de 850 productos a $40 cada uno
calcularTotalAPagar(400, 60); // Pedido de 400 productos a $60 cada uno


/* Ejercicio 21
Diseñe una solución que dado dos puntos en la recta numérica muestre un mensaje indicando si
ambos están en el segmento positivo o ambos están en el segmento negativo o si están en diferente
segmento, NO se permite que ingrese puntos ubicados en el origen o punto cero. */
console.log("\n=== Ejercicio 21 ===\n");

let punto1 = 5; // Primer punto
let punto2 = -3; // Segundo punto

if (punto1 === 0 || punto2 === 0) {
    console.log("No se permite que los puntos estén ubicados en el origen (punto cero).");
}
else if (punto1 > 0 && punto2 > 0) {
    console.log("Ambos puntos están en el segmento positivo.");
} else if (punto1 < 0 && punto2 < 0) {
    console.log("Ambos puntos están en el segmento negativo.");
} else {
    console.log("Los puntos están en diferente segmento.");
} 


/* Ejercicio 22
Una tienda vende Agua embotellada en garrafones de 5 galones, a un precio de $2.50 la unidad. Si
la compra es de 10 ó menos unidades no se hace descuento, pero si es de más de 10 unidades, las
primeras 10 cuestan el precio establecido, las demás tienen un 10% de descuento. Si la compra es
mayor de 30, obtiene un 30% de descuento, tomando como base el precio establecido,
exclusivamente sobre las que pasen de 30. Dado el número de unidades que compra un cliente,
calcule y despliegue el total de la compra, el descuento, y el total a cancelar por la compra. */
console.log("\n=== Ejercicio 22 ===\n");

function calcularCompra(unidades) {
    const precioUnitario = 2.50;
    let totalCompra = unidades * precioUnitario;
    let descuento = 0;

    if (unidades > 10 && unidades <= 30) {
        descuento = (unidades - 10) * precioUnitario * 0.10;
    } else if (unidades > 30) {
        descuento = (unidades - 30) * precioUnitario * 0.30;
    }

    let totalPagar = totalCompra - descuento;

    console.log(`Total de la compra: $${totalCompra.toFixed(2)}`);
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    console.log(`Total a cancelar: $${totalPagar.toFixed(2)}\n`);
}

calcularCompra(8);   // Compra de 8 unidades
calcularCompra(15);  // Compra de 15 unidades
calcularCompra(35);  // Compra de 35 unidades


/* Ejercicio 23
Zapatería ABC hace descuentos del 15% en el total de la compra, si cumple uno de los siguientes
criterios: compró más de 3 pares ó el monto total de la compra es mayor a $100. Dado el monto de
la compra en dólares y la cantidad de pares comprados, calcule y despliegue el total a pagar. */
console.log("\n=== Ejercicio 23 ===\n");

function calcularTotalZapateria(montoCompra, cantidadPares) {
    let descuento = 0;

    if (cantidadPares > 3 || montoCompra > 100) {
        descuento = montoCompra * 0.15;
    }

    let totalPagar = montoCompra - descuento;

    console.log(`Monto de la compra: $${montoCompra.toFixed(2)}`);
    console.log(`Cantidad de pares comprados: ${cantidadPares}`);
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    console.log(`Total a pagar: $${totalPagar.toFixed(2)}\n`);
}

calcularTotalZapateria(120, 2); // Compra de $120 con 2 pares
calcularTotalZapateria(80, 4);  // Compra de $80 con 4 pares
calcularTotalZapateria(90, 3);  // Compra de $90 con 3 pares


/* Ejercicio 24
Diseñe una solución que dado un número entre 1 y 11 despliegue si el número es primo o no. */
console.log("\n=== Ejercicio 24 ===\n");

function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let numero = 7; // Ejemplo de número entre 1 y 11
if (numero < 1 || numero > 11) {
    console.log("El número debe estar entre 1 y 11.");
} else {
    if (esPrimo(numero)) {
        console.log(`El número ${numero} es primo.`);
    } else {
        console.log(`El número ${numero} no es primo.`);
    }
}


/* Ejercicio 25
Diseñe una solución que dado un número, despliegue un mensaje si es par o es impar o es cero. */
console.log("\n=== Ejercicio 25 ===\n");

function verificarNumero(numero) {
    if (numero === 0) {
        console.log("El número es cero.");
    } else if (numero % 2 === 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
}

verificarNumero(0);  // Número cero
verificarNumero(5);  // Número impar
verificarNumero(8);  // Número par


/* Ejercicio 26
Diseñe una solución que dado un código ASCII, despliegue su caracter respectivo. Ejemplo: 65 es A */
console.log("\n=== Ejercicio 26 ===\n");

function obtenerCaracterASCII(codigo) {
    return String.fromCharCode(codigo);
}

let codigoASCII = 65; // Ejemplo de código ASCII
console.log(`El carácter correspondiente al código ${codigoASCII} es: ${obtenerCaracterASCII(codigoASCII)}`);


/* Ejercicio 27
Diseñe una solución que dado un carácter ASCII, despliegue el código numérico. Ejemplo: ’A’ es 65 */
console.log("\n=== Ejercicio 27 ===\n");

function obtenerCodigoASCII(caracter) {
    return caracter.charCodeAt(0);
}

let caracter = 'A'; // Ejemplo de carácter ASCII
console.log(`El código numérico del carácter '${caracter}' es: ${obtenerCodigoASCII(caracter)}`);


/* Ejercicio 28
Diseñe una solución que dado el Código de Carrera, despliegue el nombre correspondiente de la
carrera de la FIA, donde por ejemplo “Ingenieria de Sistemas Informáticos” tiene el código “I10515” */
console.log("\n=== Ejercicio 28 ===\n");

function obtenerNombreCarrera(codigo) {
    const carreras = {
        "I10515": "Ingenieria de Sistemas Informáticos",
        "I10516": "Ingenieria de Software",
        "I10517": "Ingenieria de Computación"
    };
    return carreras[codigo] || "Código de carrera no encontrado";
}

let codigoCarrera = "I10515"; // Ejemplo de código de carrera
console.log(`El nombre correspondiente al código ${codigoCarrera} es: ${obtenerNombreCarrera(codigoCarrera)}`);


/* Ejercicio 29
Diseñe una solución que dado el monto de compra y el color de la bolita extraída de una tómbola,
calcule y despliegue el total a pagar. Considerar que si el color es blanco no tiene descuento, el azul
tiene 5% y el verde tiene 10%. */
console.log("\n=== Ejercicio 29 ===\n");

function calcularTotalCompra(montoCompra, colorBolita) {
    let descuento = 0;

    switch (colorBolita.toLowerCase()) {
        case "blanco":
            descuento = 0;
            break;
        case "azul":
            descuento = montoCompra * 0.05;
            break;
        case "verde":
            descuento = montoCompra * 0.10;
            break;
        default:
            console.log("Color de bolita no reconocido.");
            return;
    }

    let totalPagar = montoCompra - descuento;
    console.log(`Monto de la compra: $${montoCompra.toFixed(2)}`);
    console.log(`Color de la bolita: ${colorBolita}`);
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    console.log(`Total a pagar: $${totalPagar.toFixed(2)}\n`);
}

calcularTotalCompra(100, "blanco"); // Compra de $100 con bolita blanca
calcularTotalCompra(200, "azul");   // Compra de $200 con bolita azul
calcularTotalCompra(300, "verde");  // Compra de $300 con bolita verde


/* Ejercicio 30
Diseñe una solución que dado el número correlativo de departamento de El Salvador (número
correlativo según la posición en orden alfabéticamente y ascendente), despliegue el nombre del
Departamento y nombre de Cabecera Departamental del mismo. */
console.log("\n=== Ejercicio 30 ===\n");

function obtenerDepartamento(correlativo) {
    const departamentos = {
        1: { nombre: "Ahuachapán", cabecera: "Ahuachapán" },
        2: { nombre: "Cabañas", cabecera: "Sensuntepeque" },
        3: { nombre: "Chalatenango", cabecera: "Chalatenango" },
        4: { nombre: "Cuscatlán", cabecera: "Cojutepeque" },
        5: { nombre: "La Libertad", cabecera: "Santa Tecla" },
        6: { nombre: "La Paz", cabecera: "Zacatecoluca" },
        7: { nombre: "La Unión", cabecera: "La Unión" },
        8: { nombre: "Morazán", cabecera: "San Francisco Gotera" },
        9: { nombre: "San Miguel", cabecera: "San Miguel" },
        10: { nombre: "San Salvador", cabecera: "San Salvador" },
        11: { nombre: "San Vicente", cabecera: "San Vicente" },
        12: { nombre: "Santa Ana", cabecera: "Santa Ana" },
        13: { nombre: "Sonsonate", cabecera: "Sonsonate" },
        14: { nombre: "Usulután", cabecera: "Usulután" }
    };

    return departamentos[correlativo] || { nombre: "Departamento no encontrado", cabecera: "N/A" };
}

let correlativoDepartamento = 8; // Ejemplo de número correlativo
let departamento = obtenerDepartamento(correlativoDepartamento);
console.log(`Departamento: ${departamento.nombre}, Cabecera Departamental: ${departamento.cabecera}`);