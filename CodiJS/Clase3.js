function numero(){
    let x = prompt("Numero Base");
    let y = prompt("Numero Exponente");
    manual(x,y)
    automatico(x,y)
}

function manual(x,y){
    console.time("potencia_bucle")
    let z = x
    for (n=1; n < y; n++){
        x *= z
        console.log(x)
    }
    console.log("potencia bucle: " + x)
    console.timeLog("potencia_bucle")
}

function automatico(x,y){
    console.time("potencia_pow")
    z = Math.pow(x,y)
    console.log("potencia_pow: " + z)
    console.timeLog("potencia_pow")
}


function a(){
    let x = parseInt(prompt("Numero 1"));
    let y = parseInt(prompt("Numero 2"));
    let z = parseInt(prompt("Numero 3"));

    let lista_numero = [x,y,z]
    lista_numero.sort()
    console.log("Menor: " + lista_numero[0])
    console.log("Mitjana: " + lista_numero[1])
    console.log("Major: " + lista_numero[2])
    console.log("Mitja: " + (x+y+z)/3)
}