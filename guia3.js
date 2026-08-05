/* Ejercicio 1
Calcular la distancia entre 2 puntos en la recta numérica dados cada uno de los puntos 
en unidades lineales, donde la distancia está dada por: d = |x2 - x1| */
console.log("=== Ejercicio 1 ===");
let punto1 = 6;
let punto2 = 1;
let distancia = Math.abs(punto2 - punto1);
console.log("Distancia entre los puntos: " + distancia);


/* Ejercicio 2
Calcular la distancia entre 2 puntos en el plano dadas las coordenadas x,y de cada uno */
console.log("\n=== Ejercicio 2 ===");
let x1 = 5, y1 = 3;
let x2 = 1, y2 = 9;
let distanciaPlano = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
console.log("Distancia entre los puntos en el plano: " + distanciaPlano.toFixed(2));


/* Ejercicio 3
La energía potencial gravitacional es la energía que posee un cuerpo, debido a su 
posición en un campo gravitacional. Calcular la energía potencial gravitacional terrestre 
para un cuerpo DADAS la masa m y una determinada altura h de la tierra. La fórmula es 
Epg = w.h, donde el peso w = m.g;  es decir, masa m por gravedad g. */
console.log("\n=== Ejercicio 3 ===");
let masa = 10; // en kg
let altura = 5; // en metros
const gravedad = 9.81; // en m/s^2

let peso = masa * gravedad;
let energiaPotencial = peso * altura;
console.log("Energía potencial gravitacional: " + energiaPotencial.toFixed(2) + " J");


/* Ejercicio 4 
Calcular el área de un cubo sabiendo que la fórmula es  A=6 x aristas^2*/
console.log("\n===Ejercicio 4 ===");
let arista = 3;
let areaCubo = 6 * Math.pow(arista, 2);
console.log("Area del cubo: " + areaCubo);


/* Ejercicio 5
Convertir una temperatura en grados Fahrenheit a Celsius utilizando las siguiente 
fórmula: °F = °C × 9/5 + 32 */
console.log("\n===Ejercicio 5 ===");
let fahrenheit = 98.6;
let celsius = (fahrenheit - 32) * 5/9;
console.log("Temperatura en Celsius: " + celsius.toFixed(2) + " °C");


/* Ejercicio 6
Diseñar un programa que lea cuatro números, y calcule la suma de los dos primeros y 
el producto del tercero y el cuarto. */
console.log("\n=== Ejercicio 6 ===");
let numero1 = 6;
let numero2 = 9;
let numero3 = 3;
let numero4 = 8;

let suma = numero1 + numero2;
let producto = numero3 * numero4;
console.log("Suma de los dos primeros numeros: " + suma);
console.log("Producto de los dos ultimos numeros: " + producto);


/* Ejercicio 7
Leer dos números flotantes que corresponden a la longitud de los dos catetos de un 
triángulo rectángulo. Calcular y mostrar el valor de la hipotenusa y el perímetro del 
triángulo. */
console.log("\n=== Ejercicio 7 ===");
let cateto1 = 3;
let cateto2 = 4;
let hipotenusa = Math.hypot(cateto1, cateto2);
let perimetro = cateto1 + cateto2 + hipotenusa;
console.log("Hipotenusa: " + hipotenusa);
console.log("Perímetro: " + perimetro);


/* Ejercicio 8
Calcular y mostrar la distancia entre dos puntos de una recta, dado el valor de 2 puntos 
ingresados por teclado y dada una cadena de caracteres ingresada por teclado, 
conteniendo la abreviatura de la unidad de medida; donde la distancia está dada por:    
d = |x2 - x1|   La salida deberá ser como por ejemplo: 10 cm */
console.log("\n=== Ejercicio 8 ===");
let puntoA = 32;
let puntoB = 12;
let unidadMedida = "cm";
let distanciaRecta = Math.abs(puntoB - puntoA);
console.log(`Distancia entre los puntos: ${distanciaRecta} ${unidadMedida}`);


/* Ejercicio 9
Dado el valor del radio de una esfera y una cadena con la abreviatura de la unidad de 
medida, calcular y desplegar el volumen de la esfera con sus unidades respectivas. La 
salida deberá ser como por ejemplo: 3.14 cm^3 */
console.log("\n=== Ejercicio 9 ===");
let radio = 5;
let unidad = "cm";
let volumenEsfera = (4/3) * Math.PI * Math.pow(radio, 3);
console.log(`Volumen de la esfera: ${volumenEsfera.toFixed(2)} ${unidad}³`);


/* Ejercicio 10
Dada la longitud del lado de un cubo y una cadena conteniendo la abreviatura de la  
unidad de medida de dicha longitud, calcular y desplegar el volumen del cubo. La salida 
deberá ser como por ejemplo: 8 mt^3 */
console.log("\n=== Ejercicio 10 ===");
let longitudLado = 2;
let unidadCubo = "mt";
let volumenCubo = Math.pow(longitudLado, 3);
console.log(`Volumen del cubo: ${volumenCubo} ${unidadCubo}³`);


/* Ejercicio 11
Diseñar una solución que realice y despliegue la suma aritmética de tres cantidades. Se 
pide que se haga de la siguiente forma: se debe ingresar primero una cadena en la que 
el usuario escribe el nombre de los “objetos” a sumar (por ejemplo: manzanas), luego 
ingresa las tres cantidades, el programa las suma y reporta los resultados de la 
siguiente manera: 20 manzanas */
console.log("\n=== Ejercicio 11 ===");
let objeto = "peras";
let cantidad1 = 3;
let cantidad2 = 5;
let cantidad3 = 2;
let sumaCantidades = cantidad1 + cantidad2 + cantidad3;
console.log(`${sumaCantidades} ${objeto}`);


/* Ejercicio 12
Diseñar una solución que realice la división aritmética. Se pide que se haga de la 
siguiente forma: se ingresarán 2 cadenas, la primera corresponde a las unidades del 
numerador y la segunda, son las unidades del denominador. Luego, se pedirán los 
valores numerador y denominador, respectivamente. El resultado podría ilustrarse de la 
siguiente manera: si ingresa “peras” y “niño”, y, luego ingresa 10 y 5, se mostrará como 
salida: 2 peras por niño. */
console.log("\n=== Ejercicio 12 ===");
let unidadNumerador = "ciruelas";
let unidadDenominador = "cesta";
let valorNumerador = 25;
let valorDenominador = 5;
let resultadoDivision = valorNumerador / valorDenominador;
console.log(`${resultadoDivision} ${unidadNumerador} por ${unidadDenominador}`);