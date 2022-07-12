function numero(x){
    var resultado = document.getElementById('resultado').innerText;
    if(resultado=='0'){
        resultado= "";  
    }
    resultado = resultado + x;
    document.getElementById('resultado').innerText= resultado;
}

// function para rest
function resetar(){
    document.getElementById('resultado').innerText = 0;
}

// fuction for pĺus
function plus(){
    var resultado = document.getElementById('resultado').innerText;
    alert(resultado);
}