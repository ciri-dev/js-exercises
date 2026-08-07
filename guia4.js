/* Ejercicio 1
Una agencia de viajes necesita hacer cotizaciones a sus clientes que viene dado por los 
siguientes elementos:  costo por uso del vehículo por cada día, cantidad de gasolina que se gaste 
en el viaje, según la distancia recorrida, salario diario del motorista, y la ganancia que es un 50 % 
del total de gastos.   Se sabe que el rendimiento del vehículo a utilizar es de 40 km/galón. 
Modifique este ejercicio que se desarrolló como ejemplo de tal forma que presente el costo neto 
del viaje, el total a pagar al conductor, la inversión de gasolina que se hará. */
console.log("\n=== Ejercicio 1 ===");
let costoVehiculo = 100;
let diasUso = 5;
let distanciaRecorrida = 2000;
let salarioDiario = 50;
let rendimientoVehiculo = 40;
let cantidadGasolina = distanciaRecorrida / rendimientoVehiculo;
let inversionGasolina = cantidadGasolina * 3.5;
let totalGastos = (costoVehiculo * diasUso) + inversionGasolina + (salarioDiario * diasUso);
let ganancia = totalGastos * 0.5;
let costoNetoViaje = totalGastos + ganancia;
console.log("Costo neto del viaje: $" + costoNetoViaje);
console.log("Total a pagar al conductor: $" + (salarioDiario * diasUso));
console.log("Inversión en gasolina: $" + inversionGasolina);


/* Ejercicio 2
Elabore un programa que permita encontrar el área de un triángulo rectángulo, y calcule el área 
de un rectángulo, mostrando los resultados con textos de las unidades de medida 
correspondiente. */
console.log("\n=== Ejercicio 2 ===");
let baseTriangulo = 5;
let alturaTriangulo = 10;
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`Área del triángulo: ${areaTriangulo} cm²`);


/* Ejercicio 3
Escribir un programa, que permita convertir una cantidad en pies y las convierta a metros y 
convertir metros a centímetros */
console.log("\n=== Ejercicio 3 ===");
let cantidadPies = 10;
let metros = cantidadPies * 0.3048;
let centimetros = metros * 100;
console.log(`${cantidadPies} pies son ${metros.toFixed(3)} metros`);
console.log(`${metros.toFixed(3)} metros son ${centimetros.toFixed(2)} centímetros`);


/* Ejercicio 4
Un docente necesita calcular la nota final de la asignatura de Introducción a la Informática que 
viene dada por el promedio de 4 notas.  Realice un programa que permita realizarlo. */
console.log("\n=== Ejercicio 4 ===");
let nota1 = 8.5;
let nota2 = 7.9;
let nota3 = 9.2;
let nota4 = 6.8;
let promedioNotas = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("Promedio de notas: " + promedioNotas.toFixed(2));


/* Ejercicio 5
Calcular el monto a pagar en dólares ($) a un empleado, por las vacaciones anuales, 
sabiendo que la ley dice que gozará vacaciones y que tiene derecho a 15 días de salario más un 
30% del mencionado salario. */
console.log("\n=== Ejercicio 5 ===");
let salarioEmpleado = 1000;
let diasVacaciones = salarioEmpleado / 2;
let bonificacionVacaciones = salarioEmpleado * 0.3;
let montoPagar = (salarioEmpleado + diasVacaciones) + bonificacionVacaciones;
console.log("Monto a pagar en vacaciones: $" + montoPagar.toFixed(2));


/* Ejercicio 6
Calcular el Interés compuesto generado por un capital depositado durante cierta cantidad 
de tiempo a una tasa de Interés determinada, aplique las siguientes fórmulas: 
M = (1+r%)t C                                  
I = M-C 
Donde: 
M (Monto): Suma del capital más intereses producidos en un tiempo determinado. 
r (Tasa de Interés): ganancia que se obtiene por cada 100 unidades monetarias en cada 
período de Tiempo. 
T (Tiempo): Período de tiempo durante el cual se cede el capital. 
C (Capital): Dinero invertido para generar una ganancia. 
I (Interés): Utilidad Generada. */
console.log("\n=== Ejercicio 6 ===");
let capital = 1000;
let tasaInteres = 5;
let tiempo = 4;
let monto = capital * Math.pow((1 + tasaInteres / 100), tiempo);
let interes = monto - capital;
console.log("Monto: $" + monto.toFixed(2));
console.log("Interés generado: $" + interes.toFixed(2));


/* Ejercicio 7
Calcular y mostrar la altura de un triángulo equilátero dada la longitud del lado a, donde h 
es la altura. Suponer que la altura se calcula multiplicando la raíz cuadrada de 3 por el valor del 
lado a, y este resultado, se divide entre 2. */
console.log("\n=== Ejercicio 7 ===");
let lado = 10;
let altura = (Math.sqrt(3) * lado) / 2;
console.log("Altura del triángulo equilátero: " + altura.toFixed(2) + " cm");


/* Ejercicio 8
María Teresa del Bosque Inglés tiene un negocio propio en el cual compra artículos por 
Internet para vender. En todos los artículos ha fijado su ganancia de 25%. Ella necesita una 
solución que dado el nombre de producto, el costo (precio de compra) de un artículo se le sume al 
costo el impuesto de aduanas que es del 10% sobre el costo del artículo. Además María debe 
obtener su ganancia la cual se debe aplicar sobre el nuevo costo por lo que la solución debe 
aplicarlo para calcular el precio de venta para el negocio de María. La aplicación debe mostrar el 
nombre de producto, costo total del producto, la ganancia; y el precio de venta que debe etiquetar 
Maria. */
console.log("\n=== Ejercicio 8 ===");
let nombreProducto = "Auriculares";
let costoArticulo = 50;
let impuestoAduanas = costoArticulo * 0.1;
let nuevoCosto = costoArticulo + impuestoAduanas;
let gananciaMaria = nuevoCosto * 0.25;
let precioVenta = nuevoCosto + gananciaMaria;

console.log("Nombre del producto: " + nombreProducto);
console.log("Costo total del producto: $" + nuevoCosto.toFixed(2));
console.log("Ganancia de María: $" + gananciaMaria.toFixed(2));
console.log("Precio de venta: $" + precioVenta.toFixed(2));


/* Ejercicio 9
Diseñe una solución que dado un ángulo en grados calcule e imprima el seno, coseno y 
tangente para ese ángulo. Nota: todos los lenguajes de programación trabajan en radianes */
console.log("\n=== Ejercicio 9 ===");
let anguloGrados = 45;
let anguloRadianes = anguloGrados * (Math.PI / 180);
let seno = Math.sin(anguloRadianes);
let coseno = Math.cos(anguloRadianes);
let tangente = Math.tan(anguloRadianes);
console.log("Seno: " + seno.toFixed(2));
console.log("Coseno: " + coseno.toFixed(2));
console.log("Tangente: " + tangente.toFixed(2));


/* Ejercicio 10
La Distribuidora de Gas la Esquinita, compra y vende cilindros de gas de 3 medidas que 
son 5 libras, 25 libras y 35 libras de gas licuado. Diseñe una solución que calcule e imprima para 
cada medida el precio del cilindro (incluido IVA), esto cuando se recibe un pedido. Por lo que 
dadas las cantidades de cada medida de cilindro, el costo de compra, el porcentaje de ganancia 
del negocio fijo de (30%) y el impuesto que se debe cobrar IVA (13%) al cliente e impuesto de 
renta que debe pagar el Empresario (10%) sobre la ganancia. Se pide que imprima para cada 
medida el precio por unidad y que imprima el impuesto renta que deberá pagar el Empresario por 
esta entrega una vez vendida. También debe imprimir el impuesto IVA que pagará el público en 
total, por la compra de esta entrega. Omita otros costos como son local, energía, etc. SOLO 
considere el costo de compra. */
console.log("\n=== Ejercicio 10 ===");
let cantidad5Libras = 10;
let cantidad25Libras = 5;
let cantidad35Libras = 2;

let costoCompra5Libras = 20;
let costoCompra25Libras = 80;
let costoCompra35Libras = 120;

let gananciaPorcentaje = 0.3;
let ivaPorcentaje = 0.13;
let impuestoRentaPorcentaje = 0.1;

function calcularPrecio(costoCompra, cantidad) {
    let ganancia = costoCompra * gananciaPorcentaje;
    let precioSinIVA = costoCompra + ganancia;
    let iva = precioSinIVA * ivaPorcentaje;
    let precioConIVA = precioSinIVA + iva;
    let impuestoRenta = ganancia * impuestoRentaPorcentaje;

    console.log(`Precio por unidad: $${precioConIVA.toFixed(2)} (IVA incluido)`);
    console.log(`Impuesto de renta a pagar por el empresario: $${impuestoRenta.toFixed(2)}`);
    console.log(`Impuesto IVA total a pagar por el público: $${(iva * cantidad).toFixed(2)}`);
}

console.log("\nCilindros de 5 libras:");
calcularPrecio(costoCompra5Libras, cantidad5Libras);

console.log("\nCilindros de 25 libras:");
calcularPrecio(costoCompra25Libras, cantidad25Libras);

console.log("\nCilindros de 35 libras:");
calcularPrecio(costoCompra35Libras, cantidad35Libras);