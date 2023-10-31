function cosas_tiempo(){
    let fecha = new Date()
    let fecha2 = new Date(2023,0,1)
    let fecha3 = new Date(fecha.getFullYear(),fecha.getMonth(),fecha.getDate(),0,0,0)
    // 01
    console.log("Hoy és " + fecha.getDate() + " del " + (fecha.getMonth()+1) + " del " + fecha.getFullYear())

    // 02
    let semanas = Math.floor((fecha.getTime()- fecha2.getTime()) / (24*3600*1000*7))
    console.log("Han pasado " + semanas + " semanas del año")
    
    //03
    let dias = ((fecha.getTime()- fecha2.getTime()) / (24*3600*1000))
    let percent = ((dias*100)/365).toFixed(2)
    console.log("El % de dies transcurridos es: " + percent + "%")

    //04
    console.log("Queda un " + (100-percent).toFixed(2) + "% de dias del año")

    //05
    console.log("Ahora son las " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds())

    //06
    let horas = (fecha.getTime()- fecha3.getTime())
    let milisegundos = 24*60*60*1000
    console.log("El % del dia que ha pasado es " + (horas*100/milisegundos).toFixed(2) + "%")

    //07
    console.log("Queda un " + (100-(horas*100/milisegundos)).toFixed(2) + "% del dia")    
}

//calculae el EAN8 o EAN13

function calcular(){
    codigo = prompt("Escribe un codigo")
    if (codigo.length < 8){
        codigo = addLeftZeropadding(codigo,8)
    }
    else if (codigo.length > 8 && codigo.length < 13){
        codigo = addLeftZeropadding(codigo,13)
    }
    else if (codigo.length == 8 || codigo.length == 13){
        checkDigitControl(codigo)
    }
}

function addLeftZeropadding(code,max){
    let result = code.padStart(max, '0')
    return result
}

function checkDigitControl(code){
    let pedro, numero = 0;
    control = codigo.substring(0,(codigo.length - 1))

    for(let x = 1; x < codigo.length; x++ ){
        pedro = codigo.charAt((codigo.length-x-1))
        pedro.parseInt()
        if (x%2 == 0){
            numero += pedro
        }
        else {
            numero += (pedro * 3)
        }
        
    }

}