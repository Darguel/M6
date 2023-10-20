function comparar(){
    x = prompt("escribe un texto: ")
    y = prompt("escribe un caracter: ")

    longitud = x.length
    let contador = 0

    for (a = 0; a < longitud; a++){
        aux = x.charAt(a)
        if (aux == y){
            contador++
        }
    }
    if (contador >= 2 || contador <= 4){
        console.log("El caracter esta el numero de veces")
    }
    else {
        console.log("No esta dentro del rango")
    }
}

function borrar(){
    x = prompt("escribe un texto: ")
    y = parseInt(prompt("escribe un numero: "))

    z = x.substring(0,y) + x.substring((y+1),x.length)
    console.log(z)

}

function multitarea(){
    x = prompt("escribe un texto: ")
    separador = " "
    let vocales = /[aeiouáéíóúäëïöü]/gi

    document.write(x.toUpperCase())
    document.write("<br/>")

    document.write(x.toLowerCase())
    document.write("<br/>")

    document.write("La longitud de la cadena " + x.length)
    document.write("<br/>")

    extensiones = x.split(separador)
    document.write(extensiones.length)
    document.write("<br/>")

    document.write(x.match(vocales))
    document.write("<br/>")

    document.write(x.match(vocales).length)
    document.write("<br/>")

    for(a = 0; a < x.length; a++){
        document.write(x.substring(a,x.length))
        document.write("<br/>")
    }

}

function medianoche(){
    x = prompt("escribe una hora: ")
    separador = ":"
    tiempo = x.split(separador)
    let y=0, z=0

    y = tiempo[0]
    z = tiempo[1]
    
    
    if (z==0 && y ==0){
        console.log("Bon any Nou!")
    }
    else{
        y = 23-y
        z = 60-z
        console.log((y*60)+z)
    }
}