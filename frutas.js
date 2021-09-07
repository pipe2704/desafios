function Buscar(){
var valor_fruta=0;
var kilo_fruta= Number(document.getElementById("kilos").value);
var encontrar_fruta= document.getElementById("fruta").value;

fruta_Base= baseDatos.find(elemento=>elemento.fruta==encontrar_fruta);
if (fruta_Base==fruta_Base.fruta)
{
    console.log ("si tenemos la fruta");
    console.log (fruta_Base.fruta);

    valor_fruta=kilo_fruta*fruta_Base.valor_fruta;
    document.getElementById('precio').innerHTML= valor_fruta
}
}