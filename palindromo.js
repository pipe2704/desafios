function buscar(palabra){
    var palabra=(document.getElementById('palabra').value);
    var g= palabra.split('').reverse().join (''); 
  var c= ""
if (palabra === g){
 c ="es un palindromo";
}
else
{
    c ="no es un palindromo";

}
 document.getElementById('salida').innerHTML= c;

}


 
 
