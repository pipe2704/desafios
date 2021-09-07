var f= 0;
var numeros= Array();
function sumar(){
 numeros[f] = document.getElementById('num').value;
 f++;
 document.getElementById('num').value='';
 console.log(numeros);
}

function resultado(){
    var incremento =0;
    for (var p=0; p<numeros.length;p++) {
       
        incremento += parseInt(numeros[p]);
    
}
   document.getElementById('suma'). innerHTML=" el resultado de la suma es:"+ incremento;
    
}
