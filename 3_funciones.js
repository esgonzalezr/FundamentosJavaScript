// Funciones declarativas: Necesitan la palabra reservada function
// Las funciones declarativas pueden ser llamadas antes de ser declaradas.
function miFuncion() {
  return 3;
}

// Funciones de expresión: Se crea la función dentro de una variable.

var sumar = function (a, b) {
  return a + b;
};

// Invocar funciones
miFuncion();
sumar();

//Ejemplos
function saludarEstudiante(estudiante){
    console.log("Hola " + estudiante);
}