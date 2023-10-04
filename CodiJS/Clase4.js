function comprobar(){
    let x = prompt("Introduce el primer numero");
    let y = prompt("Introduce el segundo numero");

    let aux1 = Math.abs(x - 100);
    let aux2 = Math.abs(y - 100);
    
    if (aux1 < aux2){
        console.log("El numero mayor de los dos es: "+x);
    }
    else {
        console.log("El numero mayor de los dos es: "+y);
    }
    if (aux1 == aux2){
        console.log("Los dos numeros introducidos son el mismo: " + x)
    }
}

function horas(){
    let x = parseInt(prompt("Introduce las horas"));
    let y = parseInt(prompt("Introduce los minutos"));
    let z = parseInt(prompt("Introduce los segundos"));

    let aux1 = new Date(2005,4,5,x,y,z+1);
    console.log("Horas: "+aux1.getHours()+" Minutos: "+aux1.getMinutes()+" Segundos: "+aux1.getMinutes());

    // hay que comprar el numero que te pasa metido en el date con el get, si da el mismo resultado la fecha es valida
    
}