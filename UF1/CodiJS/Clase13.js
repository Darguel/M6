function juego(){
    let numero = getRandomInt(100)+1
    let contador = 0
    let adivinador = 0
    console.log(numero)
    do {
        contador++
        adivinador = parseInt(prompt("Introduce un numero entre el 1 y el 100: "))
        if (adivinador == 0){
            return console.log("Game over")
        }
        else if (adivinador > 0 && adivinador < numero){
            console.log("Mayor")
        }
        else if (adivinador <= 100 && adivinador > numero){
            console.log("Menor")
        }
        else if (adivinador == numero){
            return console.log("Obtenido en " + contador + " intentos")
        }
        else {
            console.log("Numero invalido")
        }
    }while (adivinador!=numero) 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }