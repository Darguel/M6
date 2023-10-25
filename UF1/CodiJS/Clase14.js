function miercoles(){
    let anyo1, anyo2;
   
    do {
         anyo1 = parseInt(prompt("Introduce el primer año"))
    }while (anyo1 < 2000 || anyo1 > 2050)
    
    do {
        anyo2 = parseInt(prompt("Introduce el segundo año"))
    }while (anyo2 < 2000 || anyo2 > 2050)

    while (anyo1 <= anyo2){
        let año = new Date(anyo1,0,1)
        if(año.getDay() == 3){
            return console.log("El primer año que empieza en miercoles es: " + anyo1)
        }
        if (anyo1 == anyo2){
            return console.log("No hay ningun año que empieze por miercoles")
        }
        anyo1++
    }
}

function pentavocalica(){
    let palabra = prompt("escribe una palabra: ")
    let vocales = [/[aàáä]/gi, /[eèéë]/gi, /[iìíï]/gi, /[oòóö]/gi, /[uùúü]/gi]
    let letra;

    for (x=0; x< palabra.length; x++){
        if (!palabra.match(vocales[x])){
            console.log("No es pentavocalica")
            break
        }
        if ( x == palabra.length-1){
            console.log("Si es pentavocalica")
        }
    }
}