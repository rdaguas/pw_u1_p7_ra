var num1=null;
var num2=0;
var operacion = '';

function setearValor(valor) {
   let valorActual = document.getElementById('id-display').innerText;
    console.log(valorActual);
    document.getElementById('id-display').innerText = valor;
}

function setearValorConcatenado(valor) {
    let valorActual = document.getElementById('id-display').innerText;
     console.log(valorActual);
     document.getElementById('id-display').innerText = valorActual + valor;
 }
//crear una funcion para recibirValor y mostrarlo en la pantalla de la calculadora "id_display"
fuction

/* function recibirValor(valor) {
    console.log(valor);
    if (num1 === 0) {
        num1 = valor;
    } else {
        num2 = valor;
    }
    console.log(num1);
    // Obtener el elemento de la pantalla de la calculadora por su ID
    var display = document.getElementById('id_display');
    // Mostrar el valor en la pantalla
    display.value = valor;
} */

