//ejercicio practico del entregable 3
let nombre="Fredy Padron";
let edad=25;
let peso=78.5;
let esMayor= true;

//declarar dos variables
let cantidad1=50;
let cantidad2=100;
let suma=cantidad1+cantidad2;
let resta=cantidad1-cantidad2;
let mult=cantidad1*cantidad2;
let div=cantidad1/cantidad2

//document.write ("la suma es : "+ suma+ "<br>");
//document.write("la resta es: "+ resta+ "<br>");
//document.write("la multiplicacion es:"+ mult+"<br>");
//document.write("la division es:"+ div+ "<br>" );

//funciones
//operacion= prompt("digite la operacion")
function realizarOperacion(cantidad1,cantidad2,operacion){
    if (operacion=='suma'){
    document.write ("la suma es : "+ suma+ "<br>");
} else if (operacion=='resta'){
    document.write ("la resta es : "+ resta+ "<br>");
} else if (operacion=='mult'){
    document.write ("la multiplicación es : "+ mult+ "<br>");
}else if (operacion=='div'){
    //validar que los valores sean diferentes de 0
    if(cantidad2 == 0)
        document.write ("valores indivisibles")
    else
    document.write ("la division es : "+ div+ "<br>");
} else {
    document.write ("el parametro no es valido")
}

}

realizarOperacion(cantidad1,cantidad2,'mult');

