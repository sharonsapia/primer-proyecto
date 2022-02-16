// 1. Definir variables
let num1, num2, suma, resta, multi, divi;
let resultado = document.getElementById("resultado");

resta = num1 - num2;
multi = num1 * num2;
divi = num1 / num2;
// 2. Funciones
function INICIAR() {
    num1 = parseFloat(prompt('Introduzca el 1° número'));
    num2 = parseFloat(prompt('Introduzca el 2° número'));

}

function SUMAR() {
    suma = num1 + num2;
    resultado.innerHTML = "El resultado de la operación es: " + suma;

}

function RESTAR() {
    resta = num1 - num2;
    resultado.innerHTML = "El resultado de la operación es: " + resta;

}

function MULTIPLICAR() {
    multi = num1 * num2;
    resultado.innerHTML = "El resultado de la operación es: " + multi;

}

function DIVIDIR() {
    divi = num1 / num2;
    resultado.innerHTML = "El resultado de la operación es: " + divi;

}



