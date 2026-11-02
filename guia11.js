/* Ejercicio 1
Comparar dos cadenas de caracteres haciendo uso de la función localeCompare() */
console.log("\n=== Ejercicio 1 ===\n");

let cadena1 = "Hola";
let cadena2 = "hola";

if (cadena1.localeCompare(cadena2) === 0) {
  console.log("Las cadenas son iguales");
} else if (cadena1.localeCompare(cadena2) > 0) {
  console.log("La primera cadena es mayor que la segunda");
} else {
  console.log("La primera cadena es menor que la segunda");
}


/* Ejercicio 2
Concatenar cuatro cadenas de caracteres utilizando la función concat() */
console.log("\n=== Ejercicio 2 ===\n");

let cadena3 = "Bienvenidos";
let cadena4 = "a";
let cadena5 = "la";
let cadena6 = "programación";

let resultado = cadena3.concat(cadena4, cadena5, cadena6);
console.log("Resultado de la concatenación:", resultado);


/* Ejercicio 3
Invertir los elementos de un vector tipo string. */
console.log("\n=== Ejercicio 3 ===\n");

let vector = ["Hola", "mundo", "de", "JavaScript"];
console.log("Vector original:", vector);

let vectorInvertido = vector.reverse();
console.log("Vector invertido:", vectorInvertido);


/* Ejercicio 4
Se lee una cadena de caracteres. Luego, se leen dos caracteres digitados por el usuario. */
console.log("\n=== Ejercicio 4 ===\n");

let cadena = prompt("Ingrese una cadena de caracteres:");
let caracter1 = prompt("Ingrese el primer caracter:");
let caracter2 = prompt("Ingrese el segundo caracter:");

let resultado = cadena.replace(caracter1, caracter2);
console.log("Resultado de la sustitución:", resultado);


/* Ejercicio 5
Se comparan dos palabras y se despliega la más larga */
console.log("\n=== Ejercicio 5 ===\n");

let palabra1 = prompt("Ingrese la primera palabra:");
let palabra2 = prompt("Ingrese la segunda palabra:");

if (palabra1.length > palabra2.length) {
  console.log("La palabra más larga es:", palabra1);
} else if (palabra1.length < palabra2.length) {
  console.log("La palabra más larga es:", palabra2);
} else {
  console.log("Ambas palabras tienen la misma longitud.");
}


/* Ejercicio 6
Se leen dos palabras por separado y se despliega la de menos caracteres en minúsculas y
en mayúsculas la más larga; si las palabras son de la misma longitud solamente se indica
mediante el mensaje: “Las Cadenas son Iguales”. */
console.log("\n=== Ejercicio 6 ===\n");

let palabra3 = prompt("Ingrese la tercera palabra:");
let palabra4 = prompt("Ingrese la cuarta palabra:");

if (palabra3.length > palabra4.length) {
  console.log("La palabra más larga es:", palabra3.toUpperCase());
  console.log("La palabra más corta es:", palabra4.toLowerCase());
} else if (palabra3.length < palabra4.length) {
  console.log("La palabra más larga es:", palabra4.toUpperCase());
  console.log("La palabra más corta es:", palabra3.toLowerCase());
} else {
  console.log("Las Cadenas son Iguales");
}


/* Ejercicio 7
Se leen diez nombres de frutas y se despliegan sólo las que sus nombres comiencen con
m, reportando la cantidad de frutas seleccionadas. */
console.log("\n=== Ejercicio 7 ===\n");

let frutas = ["manzana", "banana", "mango", "pera", "melón", "kiwi", "mandarina", "uva", "mora", "cereza"];
let frutasConM = frutas.filter(fruta => fruta.toLowerCase().startsWith("m"));

console.log("Frutas que comienzan con 'm':", frutasConM);
console.log("Cantidad de frutas seleccionadas:", frutasConM.length);


/* Ejercicio 8
Escribir una solución que lea una frase del teclado y que despliegue el número de
palabras que contiene la frase. */
console.log("\n=== Ejercicio 8 ===\n");

let frase = prompt("Ingrese una frase:");
let palabras = frase.split(" ").filter(palabra => palabra.length > 0);
console.log("Número de palabras en la frase:", palabras.length);


/* Ejercicio 9
Diseñar un programa que lea el nombre completo de una persona (dos nombres y dos
apellidos) y despliegue solamente el primer apellido. */
console.log("\n=== Ejercicio 9 ===\n");

let nombreCompleto = prompt("Ingrese su nombre completo (dos nombres y dos apellidos):");
let partesNombre = nombreCompleto.trim().split(" ");
if (partesNombre.length >= 4) {
  console.log("El primer apellido es:", partesNombre[2]);
} else {
  console.log("Por favor, ingrese un nombre completo válido con dos nombres y dos apellidos.");
}


/* Ejercicio 10
Diseñar un programa que convierta una cadena a un valor entero y valide si sólo posee
números. */
console.log("\n=== Ejercicio 10 ===\n");

let cadenaNumerica = prompt("Ingrese una cadena que contenga solo números:");
if (/^\d+$/.test(cadenaNumerica)) {
  let valorEntero = parseInt(cadenaNumerica, 10);
  console.log("La cadena convertida a entero es:", valorEntero);
} else {
  console.log("La cadena ingresada no contiene solo números.");
}


/* Ejercicio 11
Conociendo los datos de un estudiante: apellidos, nombres, y año de ingreso realice una
función que devuelva el carnet del estudiante considerando primer carácter del primer
apellido, primer carácter del segundo apellido, dos últimos dígitos del año de ingreso, y un
número de 3 dígitos asignado al azar. */
console.log("\n=== Ejercicio 11 ===\n");

function generarCarnet(apellido1, apellido2, anioIngreso) {
  let primerCaracterApellido1 = apellido1.charAt(0).toUpperCase();
  let primerCaracterApellido2 = apellido2.charAt(0).toUpperCase();
  let ultimosDosDigitosAnio = anioIngreso.toString().slice(-2);
  let numeroAleatorio = Math.floor(Math.random() * 1000).toString().padStart(3, '0');

  return `${primerCaracterApellido1}${primerCaracterApellido2}${ultimosDosDigitosAnio}${numeroAleatorio}`;
}

let apellido1 = prompt("Ingrese el primer apellido del estudiante:");
let apellido2 = prompt("Ingrese el segundo apellido del estudiante:");
let anioIngreso = parseInt(prompt("Ingrese el año de ingreso del estudiante (YYYY):"), 10);

if (!isNaN(anioIngreso) && anioIngreso > 1900 && anioIngreso <= new Date().getFullYear()) {
  let carnet = generarCarnet(apellido1, apellido2, anioIngreso);
  console.log("El carnet del estudiante es:", carnet);
} else {
  console.log("Por favor, ingrese un año de ingreso válido.");
}


/* Ejercicio 12
El zoológico “el garrobito” desea guardar los datos de los pandas que viven en el
zoológico. La información que se desea guardar es la siguiente: nombre, peso, año y
sexo. Además, se quiere determinar cuáles pandas están aptas para tener bebés,
sabiendo que para poder tener bebés debe ser mayor que 5 años y (obvio) ser hembra,
Realizar una solución que realice lo anterior, para los 5 pandas que viven en él
zoológico. */
console.log("\n=== Ejercicio 12 ===\n");

const panda1 = { nombre: "Panda1", peso: 100, anio: 2015, sexo: "hembra" };
const panda2 = { nombre: "Panda2", peso: 120, anio: 2010, sexo: "macho" };
const panda3 = { nombre: "Panda3", peso: 90, anio: 2018, sexo: "hembra" };
const panda4 = { nombre: "Panda4", peso: 110, anio: 2012, sexo: "hembra" };
const panda5 = { nombre: "Panda5", peso: 95, anio: 2016, sexo: "macho" };

const pandas = [panda1, panda2, panda3, panda4, panda5];
const pandasAptosParaBebes = pandas.filter(panda => panda.sexo === "hembra" && (2026 - panda.anio) > 5);

console.log("Pandas aptos para tener bebés:");
pandasAptosParaBebes.forEach(panda => {
  console.log(`Nombre: ${panda.nombre}, Edad: ${2026 - panda.anio} años`);
});