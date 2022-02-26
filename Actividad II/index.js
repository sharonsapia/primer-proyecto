
function button() {
    let usuario = prompt("Ingrese su Usuario");
    let password = prompt("Ingrese su Password");
    
    if (usuario=="administrador" && password=="1234"){ 
    document.getElementById(true).style.color="red";
    document.getElementById(false).style.color="white";}
    else{
    document.getElementById(false).style.color="red";
    document.getElementById(true).style.color="white";}

}




function button2(){
    let nro1 = prompt("Ingrese nro. 1");
    let nro2 = prompt("Ingrese nro. 2");
    let nro3 = prompt("Ingrese nro. 3");
    if(nro1 > nro2 && nro1 > nro3){console.log("El número mayor es " + nro1);}
    if(nro2 > nro1 && nro2 > nro3){console.log("El número mayor es " + nro2);}
    if(nro3 > nro1 && nro3 > nro2){console.log("El número mayor es " + nro3);}
   

    if(nro1 < nro2 && nro1 < nro3){console.log("El número menor es " + nro1);}
    if(nro2 < nro1 && nro2 < nro3){console.log("El número menor es " + nro2);}
    if(nro3 < nro1 && nro3 < nro2){console.log("El número menor es " + nro3);}

}
function button3(){
    console.log("¡Hola Mundo!");
}


