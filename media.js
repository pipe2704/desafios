var valores= Array();

function media(){

    
    var media=0;
    var desviacion_estandar=0;
    var r=0;
    var sumando=0;


    var stringCadena= document.getElementById('Numeros').value;

    document.getElementById('Numeros').value='';
    var arrayWords=stringCadena.split(",");
    var cantidadN=arrayWords.length;


    var sumatoriaN=0;
 

   for(var a=0; a<arrayWords.length;a++){
     sumatoriaN+=Number(arrayWords[a]);
   }

   media=sumatoriaN/(cantidadN);
   console.log(media);
   }
   function desviacion(){
       var sumando=0;
       var desviacion_estandar=0;
   for(var a=0; a<valores.length; a++){
       
sumando+=(parseInt(valores[a]-media))*(parseInt(valores[a]))
   }

   desviacion_estandar=Math.sqrt(sumando/(valores.length-1))
   console.log(desviacion_estandar);
}

 
