function calcular(){
    let x = parseInt(prompt("Introduce los dias"))
    console.log("El numero de años son: "+Math.floor(x/365))
    x = x%365
    console.log("El numero de meses son: "+Math.floor(x/30))
    x = x%30
    if (x>=1){
        console.log("El numero de dias son: "+x)
    }
    else{
        console.log("El numero de dias son: 0")
    }
}

function temperatura(){
    let y = prompt("Introduce el tipo de temperatura")
    let x = parseInt(prompt("Introduce los grados"))
    let z
    if (y == "C" || y == "c"){
        z = x * (9.0/5.0) + 32
        console.log(z)
    }
    else {
        z = (x -32) / (9.0/5.0)
        console.log(z)
    }
}

function conversion(){
    let y = prompt("Introduce el tipo al que quieres pasar la base")
    let x = parseInt(prompt("Introduce el numero"))
    let z = ""
    let aux 
    let aux2 = "0123456789ABCDEF"
    if (y == "hexadecimal"){
        while (x != 0) {
            aux = x%16
            z = aux2.charAt(aux)+z
            x = Math.floor(x/16)
        } 
        console.log(z)
    }
    else if (y == "octal"){
        while (Math.floor(x/8) >= 8) {
            aux = x%8
            z = aux+z
            x = Math.floor(x/8)
        } 
        console.log(x+z)
    }
    else {
        while (Math.floor(x/2) >= 1) {
            aux = x%2
            z = aux+z
            x = Math.floor(x/2)
        } 
        console.log(x+z)
    }
}