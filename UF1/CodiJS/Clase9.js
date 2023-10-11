function tabla() {
    let x = parseInt(prompt("numero de columnas"));
    // y es el numero de filas
    let y = Math.floor(x/2)+1
    const tabla = document.createElement("table");
    const tablaBody = document.createElement("tbody");
    let blanco, rojo
    blanco = Math.floor((x-1)/2)
    rojo = 1
    
    for (let a = 0; a < y; a++) {
      const fila = document.createElement("tr");
  
      for (let b = 0; b < blanco; b++) {
        crearCelda("white", fila)
      }
      for (let b = 0; b < rojo; b++) {
        crearCelda("red", fila)
      }
      for (let b = 0; b < blanco; b++) {
        crearCelda("white", fila)
      }
      rojo += 2
      blanco--
      tablaBody.appendChild(fila);
    }
  
    tabla.appendChild(tablaBody);
    document.body.appendChild(tabla);
    tabla.style.border="1px solid black";
}

function crearCelda(color, fila){
    const celda = document.createElement("td");
    celda.style.border="1px solid black"
    celda.style.width="20px"
    celda.style.height="20px"
    celda.style.backgroundColor=color;
    const cellText = document.createTextNode("");
    celda.appendChild(cellText);
    fila.appendChild(celda);
}