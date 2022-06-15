//Arrays are objects that can save different type data
var frutas = ["manzana","pera","fresa","piña"];

//Method .push(): Add an element in the last position of the array
var masFrutas = frutas.push("banano");

//Method .pop(): Delete the last element of the array and store the deleted element in the assigned variable.
var borrarFruta = frutas.pop();

//Method .unshift(): Add an element in the first position of the array
var addFirst = frutas.unshift("banano");

//Method .shift(): Delete the first element of the array and store the deleted element in the assigned variable
var deleteFirst = frutas.shift();

//Method .indexOf(): Retrieve the position of the given element
var position = frutas.indexOf("pera");