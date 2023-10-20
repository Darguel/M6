function extension(){
    x = prompt("escribe el nombre de un archivo con su extensión")
    separador = "."
    extensiones = x.split(separador)
    final = extensiones.length - 1 
    console.log(extensiones[final])
}

function contador(){
    x = prompt("escribe un texto: ")

    longitud = x.length
    contadorA = 0
    contadorB = 0
    aux = ""
    for (y = 0; y < longitud; y++){
        aux = x.substring(y,y+1)
        if (aux == "a" || aux == "A"){
            contadorA++
        }
        else if (aux == "b" || aux == "B"){
            contadorB++
        }
    }
    if (contadorA==contadorB){
        console.log("Tienen el mismo numero de 'a' que de 'b'")
    }
}

function comparar(){
    x = prompt("escribe un texto: ")
    y = prompt("escribe un texto: ")

    if (x.length == y.length){
        console.log("Tienen la misma longitud")
    }
}