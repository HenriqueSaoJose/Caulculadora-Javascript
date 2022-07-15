// var global
var global1= 0;
var global2= 0;

//function de digitar o numero
function digitar(x){
    digi = document.getElementById('resultado').innerText;
    if(digi == 0){
        digi=''
    }
    digit = digi + x ;
    document.getElementById('resultado').innerText = digit;

}
function reset(){
    document.getElementById('resultado').innerText = 0;
}
function plus(){
    global1 = document.getElementById('resultado').innerText;
    document.getElementById('resultado').innerText = 0;
    global2 = document.getElementById('resultado').innerText;
    result = global1 + global2;
    

   
}