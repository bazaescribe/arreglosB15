function listar(){
  var lista = ["Juan", "Paco", "Pedro", "Ana", "Luisa", "Juan", "Manuel", "Karen", "David", "Alex", "Diego"];
  var size = lista.length;

  for(var i=0; i<lista.length; i++){
    console.log("Hola " + lista[i]);
  }
}

function matriz(){
  var lista = [ ["Juan", 28, "Azul"], ["Javier", "", "Rojo"], ["Luis", "28", "Azul", "Perro"], ["Pepe", "21", "Morado"]];
  var fila = "";
  var text = "";

  for (var i = 0; i < lista.length; i++) {
    for (var j = 0; j < lista[i].length; j++) {
      fila = fila + "<div class='celda'>" + lista[i][j] + "</div>";
    }
    text = text + "<div class='fila'>" + fila + "</div>";
    fila = "";
  }
  console.log(text);
  document.getElementById('contenedor').innerHTML = text;
}
