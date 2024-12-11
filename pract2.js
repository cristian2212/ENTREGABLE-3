function realizarOperacion() {
    let continuar= true;
    while (continuar){

    let cantidad1 = parseFloat (prompt( "ingrese un valor"));
    let cantidad2 = parseFloat (prompt( "ingrese un valor"));
    let operacion= prompt ("ingrese la operación a realizar (+-*/) y si desea salir escriba salir");
    let resultado= (cantidad1,cantidad2);

    if (operacion==="+"){
        resultado = cantidad1+cantidad2;
    } else if (operacion==="-"){
        resultado= cantidad1-cantidad2;
    } else if (operacion==="*"){
        resultado= cantidad1*cantidad2;
    } else if (operacion==="/"){
        if(cantidad2!==0){
        resultado= cantidad1/cantidad2;
    }else{ 
        resultado= ("no se puede dividir entre 0")}
        
    } else if (operacion==="salir") {
        continuar=false;
        document.write("<br> salio de la operación");break;
    }
    else{ 
        resultado= ("error de operación")
    }

    
document.write("el resultado es: "+ resultado);
}

}
realizarOperacion();
