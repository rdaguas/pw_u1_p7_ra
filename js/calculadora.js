var num1 = '';
var num2 = '';
var operacion = '';
var ingresandoNum2 = false;

let operacionRealizada = false;
let resultado = 0;

//!funcion setvalor: para mostrar en pantalla el valor de los botones
function recibirValor(valor) {
    if (operacionRealizada) {
        // Reiniciar valores para una nueva operación
        num1 = '';
        num2 = '';
        operacion = '';
        ingresandoNum2 = false;
        operacionRealizada = false;
        document.getElementById('id-display').innerText = '';
    }

    if (ingresandoNum2) {
        num2 += valor; // Concatenar el valor a num2
        document.getElementById('id-display').innerText = num2;
        console.log("num2: " + num2);
    } else {
        num1 += valor; // Concatenar el valor a num1
        document.getElementById('id-display').innerText = num1;
        console.log("num1: " + num1);
    }
}

//! funcion para seleccionar la operacion
function seleccionarOperacion(op) {
    if (operacionRealizada) {
        num1 = resultado.toString();
        num2 = '';
        operacionRealizada = false;
    }
    operacion = op;
    ingresandoNum2 = true;
    document.getElementById('id-display').innerText = '';
    console.log("operacion: " + operacion);
}

//! funcion para realizar la operacion
function calcular() {
    switch (operacion) {
        case '+':
            resultado = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            resultado = parseFloat(num1) - parseFloat(num2);
            break;
        case 'X':
            resultado = parseFloat(num1) * parseFloat(num2);
            break;
        case '%':
            resultado = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            resultado = 'Error';
    }
    document.getElementById('id-display').innerText = resultado;
    console.log("resultado: " + resultado);
    operacionRealizada = true;
}

function limpiar() {
    // Resetear valores
    num1 = '';
    num2 = '';
    operacion = '';
    ingresandoNum2 = false;
    operacionRealizada = false;
    document.getElementById('id-display').innerText = '0';
}

function borrar() {
    // No permitir borrar si se ha realizado una operación
    if (operacionRealizada) {
        return;
    }

    // Borrar el ultimo caracter
    if (ingresandoNum2) {
        num2 = num2.slice(0, -1);
        document.getElementById('id-display').innerText = num2 || '0';
    } else {
        num1 = num1.slice(0, -1);
        document.getElementById('id-display').innerText = num1 || '0';
    }
}

//! funcion para poner los numeros con decimal '.'
function agregarDecimal() {
    if (operacionRealizada) {
        // Reiniciar valores y comenzar con "0."
        num1 = '0.';
        num2 = '';
        operacion = '';
        ingresandoNum2 = false;
        operacionRealizada = false;
        document.getElementById('id-display').innerText = num1;
    } else {
        if (ingresandoNum2) {
            if (!num2.includes('.')) {
                num2 += '.';
                document.getElementById('id-display').innerText = num2;
            }
        } else {
            if (!num1.includes('.')) {
                num1 += '.';
                document.getElementById('id-display').innerText = num1;
            }
        }
    }
}