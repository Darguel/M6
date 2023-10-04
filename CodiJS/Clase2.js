function numero(){
    let x = prompt("Escribe un numero");
    multiplicar(x)
}

function multiplicar(x){
    for (let y=0;y <= 10;y++){
        console.log(`${x} x ${y} = ${x*y}`)
    }
}

function fibonacci(){
    let z = prompt("Escribe un numero");
    let x=1, y=1, aux
    console.log(`Termino 1: 1`)
    console.log(`Termino 2: 1`)
    for (let n=3;n <= z; n++){
        console.log(`Termino ${n}: ${x+y}`)
        aux = x + y
        x = y
        y = aux
    }
}