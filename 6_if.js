//Ejemplo 1

if (true) {
  console.log("Es verdadero");
} else {
  console.log("Es falso");
}

//Ejemplo 2
var edad = 18;

if (edad == 18) {
  console.log("Puedes votar, es tu primera vez");
} else if (edad > 18) {
  console.log("Puedes votar de nuevo");
} else {
  console.log("Aún no puedes votar, eres menore de 18");
}

// Operador ternario: es un if en una sola línea
// sintaxis: condicion ? true : false

var numero = 1;
var resultado = numero === 1 ? "Si, es un 1" : "No, no es un uno";
