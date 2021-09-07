function dividir(){
    var s= parseFloat (document.getElementById('valor1').value);
    var a= parseFloat (document.getElementById('valor2').value);
    var d= s/(a*a);
    d=d.toFixed(2);
    document.getElementById('masa').innerHTML=d;
} 
