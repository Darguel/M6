function tabla() {
    let x = parseInt(prompt("numero de filas"));
    let y = parseInt(prompt("numero de columnas"));

    const tabla = document.createElement("table");
    const tablaBody = document.createElement("tbody");
  
    for (let a = 0; a < x; a++) {
      const fila = document.createElement("tr");
  
      for (let b = 0; b < y; b++) {
        const celda = document.createElement("td");
        celda.style.border="1px solid black"
        const cellText = document.createTextNode(`fila ${a}, columna ${b}`);
        celda.appendChild(cellText);
        fila.appendChild(celda);
      }
      tablaBody.appendChild(fila);
    }
  
    tabla.appendChild(tablaBody);
    document.body.appendChild(tabla);
    tabla.style.border="1px solid black";

  }
  

  