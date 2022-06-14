//Hoisting es cuando se llama una función/variable antes de ser declarada.
//Sólo ocurre en versiones antiguas de JS.

console.log(miNombre);
var miNombre = "Santiago";

//En runtime, las variables y las funciones se declaran antes que el resto del código.

//Cuando se hace hoisting con una función, el compilador detecta que hay un llamado a una función que no está declarada y automáticamente busca dentro del código el segmento donde esta es declarada y primero la declara y luego si ejecuta el llamado, así en el código el llamado esté antes que la declaración.

// El hoisting es el resultado de una mala práctica. Lo ideal es que en las primeras líneas del código siempre se definan las variables y funciones que van a ser usadas a lo largo del código

