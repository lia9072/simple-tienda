var min = 1;
var max = 100;
var mensaje = "Ingresa un número para adivinar el número mágico";

var numero_secreto = Math.random() * (max-min) + min;

numero_secreto = parseInt(numero_secreto);

console.log(numero_secreto);

while(true){
  var numero_usuario = prompt(mensaje,"0");  
  numero_usuario = parseInt(numero_usuario);

  if(numero_usuario === numero_secreto){
    alert("Ganaste, adivinaste el número mágico");
    break;
  } else if(numero_usuario === 0) {
      break;
  } else if(numero_usuario > numero_secreto) {
      mensaje = "El número que ingresaste es mayor que el número mágico";
  } else if(numero_usuario < numero_secreto) {
      mensaje = "El número que ingresaste es menor que el número mágico";
  }
}