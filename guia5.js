/* Ejercicio 1
La Fábrica Esfera S.A., desea una solución que le permita conocer la cantidad de material (volumen en mts3)
necesario para fabricar el molde para una esfera y la cantidad de bloques de material necesarios para fabricar 
un pedido de moldes de longitud a en cada lado. El material que se usa para crear el molde es el acero. El 
molde será en la forma de cubo, cuyo volumen viene dado por vc=a3, mientras que el volumen del hueco (esfera) 
está dado por ve=4/3 ¶ r3, dejando alrededor del hueco de la esfera una distancia mínima de 5% entre la 
superficie de la esfera y la del cubo; por lo que el diámetro de la esfera será d = a - 5a/100. Tome en 
cuenta que el acero usado para fabricar los moldes se adquiere o compra en bloques de 1.25 mts3 y que en el 
proceso de fabricación se desperdicia un 5% del material en cada molde. Además solo se fabrican moldes entre 
0.10 mt y 1.00 mt de longitud por lado del cubo y que la cantidad mínima a fabricar es de 100 unidades (moldes). */
console.log("\n=== Ejercicio 1 ===");
const ladoCubo = 0.5;
const cantidadMoldes = 100;
const volumenBloque = 1.25;

function validarPedido(lado, cantidad) {
	if (!Number.isFinite(lado) || lado < 0.1 || lado > 1) {
		return "La longitud del lado debe estar entre 0.10 m y 1.00 m.";
	}
	if (!Number.isInteger(cantidad) || cantidad < 100) {
		return "La cantidad de moldes debe ser un número entero de al menos 100.";
	}
	return null;
}

function calcularMaterialPorMolde(lado) {
	const volumenCubo = lado ** 3;
	const diametroEsfera = lado * 0.95;
	const radioEsfera = diametroEsfera / 2;
	const volumenEsfera = (4 / 3) * Math.PI * radioEsfera ** 3;
	const aceroPorMolde = volumenCubo - volumenEsfera;
	const materialConDesperdicio = aceroPorMolde * 1.05;

	return { diametroEsfera, aceroPorMolde, materialConDesperdicio };
}

function calcularPedido(lado, cantidad, capacidadBloque) {
	const materialMolde = calcularMaterialPorMolde(lado);
	const materialPedido = materialMolde.materialConDesperdicio * cantidad;
	const bloquesNecesarios = Math.ceil(materialPedido / capacidadBloque);

	return {
		...materialMolde,
		materialPedido,
		bloquesNecesarios,
		materialComprado: bloquesNecesarios * capacidadBloque,
	};
}

function mostrarResultado(lado, cantidad, resultado) {
	console.log(`\nLado del cubo: ${lado.toFixed(2)} m`);
	console.log(`Cantidad de moldes: ${cantidad}`);
	console.log(`Diámetro de la esfera: ${resultado.diametroEsfera.toFixed(3)} m`);
	console.log(`Acero por molde, sin desperdicio: ${resultado.aceroPorMolde.toFixed(5)} m³`);
	console.log(`Acero por molde, con 5% de desperdicio: ${resultado.materialConDesperdicio.toFixed(5)} m³`);
	console.log(`Material total para el pedido: ${resultado.materialPedido.toFixed(3)} m³`);
	console.log(`Bloques de ${volumenBloque} m³ necesarios: ${resultado.bloquesNecesarios}`);
	console.log(`Material comprado: ${resultado.materialComprado.toFixed(2)} m³`);
}

const errorValidacion = validarPedido(ladoCubo, cantidadMoldes);

if (errorValidacion) {
	console.log(errorValidacion);
} else {
	const resultado = calcularPedido(ladoCubo, cantidadMoldes, volumenBloque);
	mostrarResultado(ladoCubo, cantidadMoldes, resultado);
}


/*=== Ejercicio 2 ===
Dada la masa de un cuerpo y dado el tiempo que tarda en caer al suelo de una altura h
sobre la superficie de la tierra. Partiendo de que dicho cuerpo está en reposo a esa
altura h y luego se deja caer (se suelta, por lo que Vi=0). Se pide que calcule:
a) La altura (distancia que recorre el cuerpo verticalmente) hasta el suelo. h= Vi t + ½ .
g . t² donde Vi es velocidad inicial, t tiempo y g gravedad y h altura.
b) La energía potencial gravitacional del cuerpo cuando está a la altura h.
Epg = w . h donde w es peso y h la altura.
c) La energía cinética del cuerpo, justo al momento de llegar al piso: K = 1/2 m.v²

**Todo en unidades sistema internacional y Suponga que son
“movimientos verticales en el vacío” sin resistencia. El peso del cuerpo
W = m.g donde w es peso, m es masa y g es gravedad de la tierra.
La velocidad del cuerpo, al llegar al suelo Vf = g. t donde Vf es la
velocidad, al llegar al suelo, g es la gravedad y t es el tiempo en
segundos que tarda en caer, el objeto. g = 9.8 mts/seg² */
console.log("\n=== Ejercicio 2 ===");

function calcularAltura(velocidadInicial, tiempo, gravedad) {
    return velocidadInicial * tiempo + 0.5 * gravedad * tiempo ** 2;
}

function calcularEnergiaPotencial(peso, altura) {
    return peso * altura;
}

function calcularEnergiaCinetica(masa, velocidadFinal) {
    return 0.5 * masa * velocidadFinal ** 2;
}

function mostrarResultados(alt, energiaP, vFinal, energiaCinetica) {
    console.log(`\nAltura hasta el suelo: ${alt.toFixed(2)} m`);
    console.log(`Energía potencial gravitacional: ${energiaP.toFixed(2)} J`);
    console.log(`Velocidad al llegar al suelo: ${vFinal.toFixed(2)} m/s`);
    console.log(`Energía cinética al llegar al suelo: ${energiaCinetica.toFixed(2)} J`);
}

const masaCuerpo = 10; // kg
const tiempoCaida = 2; // segundos
const GRAVEDAD = 9.8; // m/s²
const velocidadInicial = 0; // m/s

const altura = calcularAltura(velocidadInicial, tiempoCaida, GRAVEDAD);
const peso = masaCuerpo * GRAVEDAD;
const energiaPotencial = calcularEnergiaPotencial(peso, altura);
const velocidadFinal = GRAVEDAD * tiempoCaida;
const energiaCinetica = calcularEnergiaCinetica(masaCuerpo, velocidadFinal);

mostrarResultados(altura, energiaPotencial, velocidadFinal, energiaCinetica);


/* Ejercicio 3
Diseñe una solución que dada una temperatura en grados centígrados la convierta a
grados fahrenheit y grados kelvin. Debe mostrar la temperatura original y las dos
conversiones en pantalla, con sus respectivos mensajes de entrada y salida. */
console.log("\n=== Ejercicio 3 ===");

function convertirTemperatura(centigrados) {
    const fahrenheit = (centigrados * 9/5) + 32;
    const kelvin = centigrados + 273.15;
    return { fahrenheit, kelvin };
}

function mostrarConversion(centigrados, conversion) {
    console.log(`\nTemperatura original: ${centigrados.toFixed(2)} °C`);
    console.log(`Temperatura en Fahrenheit: ${conversion.fahrenheit.toFixed(2)} °F`);
    console.log(`Temperatura en Kelvin: ${conversion.kelvin.toFixed(2)} K`);
}

const temperaturaCentigrados = 25; // °C
const conversionTemperatura = convertirTemperatura(temperaturaCentigrados);
mostrarConversion(temperaturaCentigrados, conversionTemperatura);


/* Ejercicio 4
Diseñe una solución que dados masa (libras), distancia (kilómetros) y tiempo (minutos)
en que recorre móvil horizontalmente desde un punto A a un punto B Calcule e imprima
(usando sistema internacional) la energía cinética del móvil, además debe mostrar los
datos originales de entrada (masa, distancia y tiempo). */
console.log("\n=== Ejercicio 4 ===");

function convertirLibrasAKg(libras) {
    return libras * 0.453592;
}

function convertirKilometrosAMetros(km) {
    return km * 1000;
}

function convertirMinutosASegundos(min) {
    return min * 60;
}

function calcularEnergiaCinetica(masaKg, velocidad) {
    return 0.5 * masaKg * velocidad ** 2;
}

function mostrarDatosYResultados(masaLibras, distanciaKm, tiempoMin, energiaCinetica) {
    console.log(`\nMasa original: ${masaLibras.toFixed(2)} libras`);
    console.log(`Distancia original: ${distanciaKm.toFixed(2)} km`);
    console.log(`Tiempo original: ${tiempoMin.toFixed(2)} minutos`);
    console.log(`Energía cinética del móvil: ${energiaCinetica.toFixed(2)} J`);
}

const masaLibras = 150; // libras
const distanciaKm = 5; // kilómetros
const tiempoMin = 10; // minutos

const masaKg = convertirLibrasAKg(masaLibras);
const distanciaMetros = convertirKilometrosAMetros(distanciaKm);
const tiempoSegundos = convertirMinutosASegundos(tiempoMin);
const velocidad = distanciaMetros / tiempoSegundos;
const energiaCinetica = calcularEnergiaCinetica(masaKg, velocidad);

mostrarDatosYResultados(masaLibras, distanciaKm, tiempoMin, energiaCinetica);


/* Ejercicio 5
Se necesita calcular la superficie y el volumen de prismas de tipo rectangular y 
triangular (ver figura). En el prisma triangular considere que todos los lados 
del triángulo son iguales, mientras que para el rectangular todos los lados son 
diferentes. Diseñe una solución que calcule e imprima superficie y volumen en 
unidades cuadradas y unidades cúbicas respectivamente. */
console.log("\n=== Ejercicio 5 ===");

function calcularPrismaRectangular(largo, ancho, alto) {
    const superficie = 2 * (largo * ancho + largo * alto + ancho * alto);
    const volumen = largo * ancho * alto;
    return { superficie, volumen };
}

function calcularPrismaTriangular(lado, altura) {
    const areaBase = (Math.sqrt(3) / 4) * lado ** 2;
    const superficie = areaBase * 2 + lado * altura * 3; // 2 bases + 3 lados
    const volumen = areaBase * altura;
    return { superficie, volumen };
}

function mostrarResultadosPrisma(tipo, dimensiones, resultados) {
    console.log(`\nPrisma ${tipo}:`);
    console.log(`Dimensiones: ${dimensiones}`);
    console.log(`Superficie: ${resultados.superficie.toFixed(2)} unidades cuadradas`);
    console.log(`Volumen: ${resultados.volumen.toFixed(2)} unidades cúbicas`);
}

// Prisma rectangular
const largoRect = 4;
const anchoRect = 3;
const altoRect = 5;
const resultadosRect = calcularPrismaRectangular(largoRect, anchoRect, altoRect);
mostrarResultadosPrisma("Rectangular", `Largo: ${largoRect}, Ancho: ${anchoRect}, Alto: ${altoRect}`, resultadosRect);

// Prisma triangular
const ladoTri = 4;
const alturaTri = 5;
const resultadosTri = calcularPrismaTriangular(ladoTri, alturaTri);
mostrarResultadosPrisma("Triangular", `Lado: ${ladoTri}, Altura: ${alturaTri}`, resultadosTri);


/* Ejercicio 6
Dados la longitud de un cubo y el radio de una esfera, calcule e imprima la 
superficie y el volumen en unidades cuadradas y cúbicas respectivamente. 
También se pide que calcule e imprima cuál es el volumen total de ambas 
figuras tridimensionales. */
console.log("\n=== Ejercicio 6 ===");

function calcularCubo(lado) {
    const superficie = 6 * lado ** 2;
    const volumen = lado ** 3;
    return { superficie, volumen };
}

function calcularEsfera(radio) {
    const superficie = 4 * Math.PI * radio ** 2;
    const volumen = (4/3) * Math.PI * radio ** 3;
    return { superficie, volumen };
}

function mostrarResultadosCuboEsfera(ladoCubo, radioEsfera, resultadosCubo, resultadosEsfera) {
    console.log(`\nCubo:`);
    console.log(`Lado: ${ladoCubo.toFixed(2)}`);
    console.log(`Superficie: ${resultadosCubo.superficie.toFixed(2)} unidades cuadradas`);
    console.log(`Volumen: ${resultadosCubo.volumen.toFixed(2)} unidades cúbicas`);

    console.log(`\nEsfera:`);
    console.log(`Radio: ${radioEsfera.toFixed(2)}`);
    console.log(`Superficie: ${resultadosEsfera.superficie.toFixed(2)} unidades cuadradas`);
    console.log(`Volumen: ${resultadosEsfera.volumen.toFixed(2)} unidades cúbicas`);

    const volumenTotal = resultadosCubo.volumen + resultadosEsfera.volumen;
    console.log(`\nVolumen total de ambas figuras: ${volumenTotal.toFixed(2)} unidades cúbicas`);
}

const ladoCubo = 3;
const radioEsfera = 2;

const resultadosCubo = calcularCubo(ladoCubo);
const resultadosEsfera = calcularEsfera(radioEsfera);

mostrarResultadosCuboEsfera(ladoCubo, radioEsfera, resultadosCubo, resultadosEsfera);


/* Ejercicio 7
Dado un número real calcule y muestre el cuadrado, cubo, cuarta y quinta potencia del número. */
console.log("\n=== Ejercicio 7 ===");

const numero = 2;
console.log(`Número: ${numero}`);
console.log(`Cuadrado: ${Math.pow(numero, 2)}`);
console.log(`Cubo: ${Math.pow(numero, 3)}`);
console.log(`Cuarta potencia: ${Math.pow(numero, 4)}`);
console.log(`Quinta potencia: ${Math.pow(numero, 5)}`);


/* Ejercicio 8
*/
 

/* Ejercicio 9
Utilizando variables individuales de tipos primitivos, diseñe una solución que dada una
fracción mixta,(Un número entero y una fracción propia juntos) de la forma 4 ⅓ (cuatro
unidades un tercio) la convierta a una fracción no mixta, expresada totalmente como
una fracción a/b Sin parte entera. Debe imprimir la fracción mixta y la no mixta a pantalla. */
console.log("\n=== Ejercicio 9 ===");

function convertirFraccionMixtaAFraccionNoMixta(entero, numerador, denominador) {
    const fraccionNoMixtaNumerador = entero * denominador + numerador;
    return `${fraccionNoMixtaNumerador}/${denominador}`;
}

const entero = 4;
const numerador = 1;
const denominador = 3;

const fraccionNoMixta = convertirFraccionMixtaAFraccionNoMixta(entero, numerador, denominador);
console.log(`\nFracción mixta: ${entero} ${numerador}/${denominador}`);
console.log(`Fracción no mixta: ${fraccionNoMixta}`);


/* Ejercicio 10
Sin utilizar estructuras de datos (debe usar variables individuales de tipos primitivos).
Diseñe una solución que dadas dos fracciones mixtas, calcule e imprima la suma de
dichas fracciones. El resultado expresado como una fracción mixta; se debe mostrar las
fracciones originales. */
console.log("\n=== Ejercicio 10 ===");

function sumarFraccionesMixtas(entero1, numerador1, denominador1, entero2, numerador2, denominador2) {
    const fraccion1Numerador = entero1 * denominador1 + numerador1;
    const fraccion2Numerador = entero2 * denominador2 + numerador2;

    const denominadorComun = denominador1 * denominador2;
    const sumaNumeradores = fraccion1Numerador * denominador2 + fraccion2Numerador * denominador1;

    const resultadoEntero = Math.floor(sumaNumeradores / denominadorComun);
    const resultadoNumerador = sumaNumeradores % denominadorComun;

    return { resultadoEntero, resultadoNumerador, denominadorComun };
}

const entero1 = 4, numerador1 = 1, denominador1 = 3;
const entero2 = 2, numerador2 = 2, denominador2 = 5;

const resultadoSuma = sumarFraccionesMixtas(entero1, numerador1, denominador1, entero2, numerador2, denominador2);
console.log(`\nFracción mixta 1: ${entero1} ${numerador1}/${denominador1}`);
console.log(`Fracción mixta 2: ${entero2} ${numerador2}/${denominador2}`);
console.log(`Suma de fracciones mixtas: ${resultadoSuma.resultadoEntero} ${resultadoSuma.resultadoNumerador}/${resultadoSuma.denominadorComun}`);


/* Ejercicio 11
Utilizando variables individuales de tipos primitivos, Diseñe una solución que dados dos
números complejos (en la forma a + b i) calcule e imprima la suma de dichos números
y el producto de dichos números complejos. Debe mostrar el resultado como número
complejo.
Sugerencia para representar debe usar 2 variables reales para cada complejo igual para
el resultado. c1 = a + bi c2 = c + di c3 = c1 + c2 c4 = c1 . c2 */
console.log("\n=== Ejercicio 11 ===");

function sumarNumerosComplejos(a, b, c, d) {
    const real = a + c;
    const imaginario = b + d;
    return { real, imaginario };
}

function multiplicarNumerosComplejos(a, b, c, d) {
    const real = a * c - b * d;
    const imaginario = a * d + b * c;
    return { real, imaginario };
}

const a = 3, b = 2; // Primer número complejo: 3 + 2i
const c = 1, d = 4; // Segundo número complejo: 1 + 4i

const sumaComplejos = sumarNumerosComplejos(a, b, c, d);
const productoComplejos = multiplicarNumerosComplejos(a, b, c, d);

console.log(`\nNúmero complejo 1: ${a} + ${b}i`);
console.log(`Número complejo 2: ${c} + ${d}i`);
console.log(`Suma de números complejos: ${sumaComplejos.real} + ${sumaComplejos.imaginario}i`);
console.log(`Producto de números complejos: ${productoComplejos.real} + ${productoComplejos.imaginario}i`);


/* Ejercicio 12
Diseñe una solución que dado un ángulo en grados calcule e imprima el seno, coseno
y tangente para ese ángulo. Nota: todos los lenguajes de programación trabajan en
radianes. */
console.log("\n=== Ejercicio 12 ===");

function calcularTrigonometria(anguloGrados) {
    const anguloRadianes = anguloGrados * (Math.PI / 180);
    const seno = Math.sin(anguloRadianes);
    const coseno = Math.cos(anguloRadianes);
    const tangente = Math.tan(anguloRadianes);
    return { seno, coseno, tangente };
}

const anguloGrados = 45;
const resultadosTrigonometria = calcularTrigonometria(anguloGrados);

console.log(`\nÁngulo: ${anguloGrados} grados`);
console.log(`Seno: ${resultadosTrigonometria.seno.toFixed(2)}`);
console.log(`Coseno: ${resultadosTrigonometria.coseno.toFixed(2)}`);
console.log(`Tangente: ${resultadosTrigonometria.tangente.toFixed(2)}`);


/* Ejercicio 13
Diseñe una solución que dado un radio de un disco, la base y altura de un rectángulo,
calcule e imprima el perímetro de la circunferencia del disco y el perímetro del
rectángulo así como el área del disco y el área del rectángulo. */
console.log("\n=== Ejercicio 13 ===");

function calcularPropiedadesGeometricas(radio, base, altura) {
    const perimetroCircunferencia = 2 * Math.PI * radio;
    const areaDisco = Math.PI * radio ** 2;
    const perimetroRectangulo = 2 * (base + altura);
    const areaRectangulo = base * altura;
    return {
        perimetroCircunferencia,
        areaDisco,
        perimetroRectangulo,
        areaRectangulo
    };
}

const radio = 5;
const base = 10;
const altura = 8;

const propiedadesGeometricas = calcularPropiedadesGeometricas(radio, base, altura);

console.log(`\nRadio del disco: ${radio}`);
console.log(`Base del rectángulo: ${base}`);
console.log(`Altura del rectángulo: ${altura}`);
console.log(`Perímetro de la circunferencia: ${propiedadesGeometricas.perimetroCircunferencia.toFixed(2)}`);
console.log(`Área del disco: ${propiedadesGeometricas.areaDisco.toFixed(2)}`);
console.log(`Perímetro del rectángulo: ${propiedadesGeometricas.perimetroRectangulo.toFixed(2)}`);
console.log(`Área del rectángulo: ${propiedadesGeometricas.areaRectangulo.toFixed(2)}`);


/* Ejercicio 14
Se necesita una aplicación para calcular la cuenta telefónica. No importa que compañía
sea, pues todas cobran por segundo exacto en llamadas y por byte en datos. La
diferencia es la tarifa por segundo y por byte. Dados las tarifas en dólares por segundo
de voz y por byte de datos y el consumo en segundos y en bytes que tuvo el cliente, se
pide que calcule e imprima el total de la factura si se sabe que además del costo de la
factura se le debe cargar al cliente 5 centavos por cada dólar o fracción de dólar que
consumió en su servicio telefónico. */
console.log("\n=== Ejercicio 14 ===");

function calcularFactura(tarifaVoz, tarifaDatos, consumoSegundos, consumoBytes) {
    const costoVoz = tarifaVoz * consumoSegundos;
    const costoDatos = tarifaDatos * consumoBytes;
    const subtotal = costoVoz + costoDatos;
    const cargoAdicional = Math.ceil(subtotal) * 0.05; // 5 centavos por cada dólar o fracción
    const totalFactura = subtotal + cargoAdicional;

    return {
        costoVoz,
        costoDatos,
        subtotal,
        cargoAdicional,
        totalFactura
    };
}

const tarifaVoz = 0.10; // dólares por segundo
const tarifaDatos = 0.0001; // dólares por byte
const consumoSegundos = 300; // segundos
const consumoBytes = 500000; // bytes

const factura = calcularFactura(tarifaVoz, tarifaDatos, consumoSegundos, consumoBytes);

console.log(`\nTarifa por segundo de voz: $${tarifaVoz.toFixed(2)}`);
console.log(`Tarifa por byte de datos: $${tarifaDatos.toFixed(4)}`);
console.log(`Consumo de voz: ${consumoSegundos} segundos`);
console.log(`Consumo de datos: ${consumoBytes} bytes`);
console.log(`Costo de voz: $${factura.costoVoz.toFixed(2)}`);
console.log(`Costo de datos: $${factura.costoDatos.toFixed(2)}`);
console.log(`Subtotal: $${factura.subtotal.toFixed(2)}`);
console.log(`Cargo adicional: $${factura.cargoAdicional.toFixed(2)}`);
console.log(`Total de la factura: $${factura.totalFactura.toFixed(2)}`);


/* Ejercicio 15
Dados 2 puntos en el plano cartesiano, calcular e imprimir la distancia entre ambos
puntos, la pendiente de la recta dada por ambos puntos, el área del rectángulo
imaginario dentro del cual está la recta (siendo la recta la diagonal que parte el
rectángulo en dos) y cuál es el área del triángulo imaginario, dado que la recta es la
hipotenusa */
console.log("\n=== Ejercicio 15 ===");

function calcularDistanciaPendienteArea(x1, y1, x2, y2) {
    const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const pendiente = (y2 - y1) / (x2 - x1);
    const areaRectangulo = Math.abs((x2 - x1) * (y2 - y1));
    const areaTriangulo = areaRectangulo / 2;

    return {
        distancia,
        pendiente,
        areaRectangulo,
        areaTriangulo
    };
}

const x1 = 1, y1 = 2;
const x2 = 4, y2 = 6;

const resultados = calcularDistanciaPendienteArea(x1, y1, x2, y2);
console.log(`\nPunto 1: (${x1}, ${y1})`);
console.log(`Punto 2: (${x2}, ${y2})`);
console.log(`Distancia entre puntos: ${resultados.distancia.toFixed(2)}`);
console.log(`Pendiente de la recta: ${resultados.pendiente.toFixed(2)}`);
console.log(`Área del rectángulo imaginario: ${resultados.areaRectangulo.toFixed(2)}`);
console.log(`Área del triángulo imaginario: ${resultados.areaTriangulo.toFixed(2)}`);

/* Ejercicio 16
Una empresa debe manejar los costos, ganancias e impuestos del negocio. Diseñe una
solución que dados en dólares para un año fiscal, las ventas totales, impuesto iva (13%)
de las ventas, los costos totales, calcule e imprima la ganancia bruta y la ganancia neta
(después de aplicar 20% de impuesto sobre la renta). */
console.log("\n=== Ejercicio 16 ===");

function calcularGanancias(ventasTotales, impuestoIva, costosTotales) {
    const gananciaBruta = ventasTotales - costosTotales - impuestoIva;
    const impuestoRenta = gananciaBruta * 0.20;
    const gananciaNeta = gananciaBruta - impuestoRenta;

    return {
        gananciaBruta,
        impuestoRenta,
        gananciaNeta
    };
}

function mostrarGanancias(ventasTotales, impuestoIva, costosTotales, ganancias) {
    console.log(`\nVentas totales: $${ventasTotales.toFixed(2)}`);
    console.log(`Costos totales: $${costosTotales.toFixed(2)}`);
    console.log(`Ganancia bruta: $${ganancias.gananciaBruta.toFixed(2)}`);
    console.log(`Impuesto sobre la renta (20%): $${ganancias.impuestoRenta.toFixed(2)}`);
    console.log(`Ganancia neta: $${ganancias.gananciaNeta.toFixed(2)}`);
    console.log(`Impuesto IVA (13%): $${impuestoIva.toFixed(2)}`);
}

const ventasTotales = 100000;
const impuestoIva = ventasTotales * 0.13;
const costosTotales = 60000;

const ganancias = calcularGanancias(ventasTotales, impuestoIva, costosTotales);
mostrarGanancias(ventasTotales, impuestoIva, costosTotales, ganancias);