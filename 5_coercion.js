4 + "7"; //47 -> String
4 * "7"; //28 -> Number
2 + true; // 3
false - 3 // -3

//Coersión implícita
//Es cuando el lenguaje cambia de un tipo de valor a otro tipo de valor, por ejemplo cuando cambia un tipo de valor de string a number o viceversa

//Coersión explícita
//Es cuando obligamos a que un tipo de valor cambie a otro tipo de valor distinto, ejemplo:

var a = 20; //number
var b = a + ""; //string
var c = String(a); //Convierte la variable a en string
var d = Number(c); //Convierte la variable c en number