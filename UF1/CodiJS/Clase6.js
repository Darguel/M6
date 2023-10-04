function coste(){
    let x = parseInt(prompt("Introduce el numero de horas"))
    let y = parseInt(prompt("Introduce el numero de minutos"))
    let z = parseInt(prompt("Introduce el numero de segundos"))
    let precio_total, euros, centimos
    
    y = ((x*60) + y)*5
    z = (5/60)*z
    precio_total = 10 + y + z
    euros = Math.floor(precio_total/100)
    centimos = Math.floor(precio_total%100)
    console.log("Cost de la trucada " + euros + "€ y " + centimos + "c")
} 

function rgb(){
    let x = parseInt(prompt("Introduce el numero de red"))
    let y = parseInt(prompt("Introduce el numero de green"))
    let z = parseInt(prompt("Introduce el numero de blue"))
    if (x<=15){
        x = "0"+toHexadecimal(x)
    }
    else{
        x = toHexadecimal(x)
    }
    if (y<=15){
        y = "0"+toHexadecimal(y)
    }
    else{
        y = toHexadecimal(y)
    }
    if (z<=15){
        z = "0"+toHexadecimal(z)
    }
    else{
        z = toHexadecimal(z)
    }
    console.log("#"+x+y+z)
}

function toHexadecimal(num){
    return num.toString(16)

}