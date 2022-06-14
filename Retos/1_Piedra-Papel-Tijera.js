//Generar variables, una función y adentro deben haber validaciones.
//

var seleccion = window.prompt("Seleccione: Piedra, Papel o Tijera","piedra");

function piedraPapelTijera(paramUser) {
  //Se calcula la opción seleccionada por el sistema
  var paramSysNumb = Math.round(Math.random() * 2);
  var paramSys;
  if (paramSysNumb == 0) {
    paramSys = "piedra";
  } else if (paramSysNumb == 1) {
    paramSys = "papel";
  } else {
    paramSys = "tijera";
  }

  //Se validan las dos opciones para determinar el ganador
  if (paramUser.toLowerCase() == paramSys ) {
    console.log("Empate, sistema y usuario seleccionaron " + paramUser.toLowerCase());
  } else if (paramUser.toLowerCase() == "piedra" && paramSys == "papel") {
    console.log("Gana sistema. Usuario Seleccionó " + paramUser.toLowerCase() + " y sistema seleccionó " + paramSys);
  } else if (paramUser.toLowerCase() == "piedra" && paramSys == "tijera"){
    console.log("Gana usuario. Usuario Seleccionó " + paramUser.toLowerCase() + " y sistema seleccionó " + paramSys);
  } else if (paramUser.toLowerCase() == "papel" && paramSys == "piedra"){
    console.log("Gana usuario. Usuario Seleccionó " + paramUser.toLowerCase() + " y sistema seleccionó " + paramSys);
  } else if (paramUser.toLowerCase() == "papel" && paramSys == "tijera"){
    console.log("Gana sistema. Usuario Seleccionó " + paramUser.toLowerCase() + " y sistema seleccionó " + paramSys);
  } else {
    console.log("Escenario no especificado: Usuario="+paramUser + ", Sistema=" + paramSys);
  }
}
