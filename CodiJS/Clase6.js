function coste(){
    let x = parseInt(prompt("Introduce el numero de horas"))
    let y = parseInt(prompt("Introduce el numero de minutos"))
    let z = parseInt(prompt("Introduce el numero de segundos"))
    let precio_total, euros, centimos
    
    y = (x*60) + y
    z = (5/60)*z
    precio_total = 10 + (y*5) + z
    euros = Math.floor(precio_total/100)
    centimos = Math.floor(precio_total%100)
    console.log("Cost de la trucada " + euros + "€ y " + centimos + "c")
}