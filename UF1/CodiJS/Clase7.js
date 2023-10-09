function coste(){
    const billetes = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
    let x = parseFloat(prompt("Introduce el coste")).toFixed(2)
    let y = parseFloat(prompt("Introduce el dinero entregado")).toFixed(2)
    let cambio = (y - x).toFixed(2);

    console.log("Precio = " + x + "€    Pagado = " + y + "€");

    for (a=0; a < billetes.length; a++){
        let tipo = billetes[a];
        if(cambio >= tipo){
            let cantidad = Math.floor(cambio / tipo);
            cambio = (cambio % tipo).toFixed(2);
            if (cantidad != 0) {
                console.log(`${cantidad} ${tipo >= 5 ? 'billete' : 'moneda'} de ${tipo}${tipo >= 1 ? '€' : ' centimos'}`);
            }
        }
    }
    console.log("Cambio total: " + (y - x).toFixed(2) + "€");
}

function tabla(){
    let x = parseInt(prompt("numero de filas"))
    let y = parseInt(prompt("numero de columnas"))
    let tr

    let body = document.getElementsByTagName("body")[0]

    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (let a = 0; a <= x; a++){

        tr = document.createElement("tr")
    
        for (let b=0; b <= y; b++){
            var celda = document.createElement("td")
        }
    
        tblBody.appendChild(tr);
        
    }
        
    tabla.appendChild(tblBody)

    body.appendChild(tabla)

    tabla.setAttribute("border", "2")
}