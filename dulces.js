function cantidad(){

    var vendidas=(document.getElementById('costo').value);
    var resultado=(vendidas*450)*0.50;
document.getElementById("PRECIO").innerHTML="Precio habitual:450";
document.getElementById("DESCUENTO").innerHTML="El descuento por ser del dia anterior es del 50%";
document.getElementById("Costo_Final").innerHTML="El costo final es"+ resultado;
}
