var ts= document.getElementById("input_ts");
var k= document.getElementById("input_k");


var boton=document.getElementById("boton");
var botonayuda=document.getElementById("botonayuda");

var r=document.getElementById("resultado");
var r2=document.getElementById("ayuda");
var ganancia=0.0;
var a=0.0;

var aux=0;

function calcular(){

    ts.value=parseFloat(ts.value);
    k.value=parseFloat(k.value);

    if (ts.value > 0 && k.value>0 )
    {
        a=1/(ts.value/4);   
        ganancia=k.value*a;
        r.innerHTML="La funcion de transferencia del sistema de primer orden es:"+"<br/>"+"<br/>" + "&nbsp&nbsp&nbsp&nbsp"+ ganancia.toFixed(2)  +"<br/>"+"G(s)=   ----------------"+"<br/>"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"s + "+ a.toFixed(2);

    }
    else
    {   
        r.innerHTML="Error de parametros";
    }

}
function ayuda()
{
    if(aux==1)
    {
        aux=0;
        r2.innerHTML="";

    }
    else
    {
        aux=aux+1;
        r2.innerHTML="Este programa entrega la función de transferencia de un sistema de primer orden a partir de unos valores de ganancia y tiempo de estabilización deseados.";
    }
    
}
botonayuda.addEventListener("click",ayuda);
boton.addEventListener("click",calcular);
