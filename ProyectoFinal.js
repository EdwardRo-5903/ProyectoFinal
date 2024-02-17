
// Variables útiles
var precio_base = 2000;
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%
var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%
var hijos_recargo = 0.2; // 20%
var recargo_total = 0;
var precio_final = 0;

// Mensajes de alerta para ingresar datos
var nombre = prompt("Ingrese su nombre, por favor");
var edad = parseInt(prompt("¿Cuántos años tiene? Ingrese solamente números"));

if (edad<=17){
    alert("Es menor de edad");
}else{

var casado = prompt("¿Está casado actualmente?");
var edad_conyuge = 0;

if (casado.toUpperCase() === "SI") {
  edad_conyuge = parseInt(prompt("¿Qué edad tiene su esposo/a?", "Borre e ingrese edad"));
}

var hijos = prompt("¿Tiene hijos o hijas?");
var cantidad_hijos = 0;

if (hijos.toUpperCase() === "SI") {
  cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?", "Borre e ingrese cantidad"));
}

// Calcula recargos
if (edad >= 18 && edad < 25) {
  recargo_total += precio_base * edad_18;
} else if (edad >= 25 && edad < 50) {
  recargo_total += precio_base * edad_25;
} else if (edad >= 50) {
  recargo_total += precio_base * edad_50;
}

if (edad_conyuge >= 18 && edad_conyuge < 25) {
  recargo_total += precio_base * casado_18;
} else if (edad_conyuge >= 25 && edad_conyuge < 50) {
  recargo_total += precio_base * casado_25;
} else if (edad_conyuge >= 50) {
  recargo_total += precio_base * casado_50;
}

var recargo_hijos = cantidad_hijos * (hijos_recargo * precio_base);
precio_final = precio_base + recargo_total + recargo_hijos;

// Resultado
alert("Para el asegurado " + nombre);
alert("El recargo total será de: " + recargo_total + " y " + recargo_hijos);
alert("El precio será de: " + precio_final);
}