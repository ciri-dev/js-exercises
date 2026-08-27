const PRECIO_METRO_CUBICO = 1.32;
const MONTO_FIJO = 20.32;
const IMPUESTOS = 0.35;

const valorActual = Number(prompt("Ingrese el valor actual del medidor: "));
const valorAnterior = Number(prompt("Ingrese el valor anterior del medidor: "));

const consumo = valorActual - valorAnterior;
const valorConsumo = consumo * PRECIO_METRO_CUBICO;

const total = ((valorConsumo + MONTO_FIJO) * (IMPUESTOS / 100) + (valorConsumo + MONTO_FIJO));
alert(`El total de la factura es de: $${total.toFixed(2)}`);