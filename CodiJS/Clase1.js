function alertar(texto) {
    alert(texto);
}

function alertados(){
    var valor = document.getElementById('value').value;
    alert(valor)
}

function tablamultiplicar(){
    var valor = document.getElementById('numero').value;
    for(let x=0;x<=10;x++){
        console.log(x+' x '+valor+' = '+(x*valor))
    }
}