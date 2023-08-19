// Ejercicio 8
const numeros = document.getElementById('numeros');
const resultado = document.getElementById('resultado-multiplicacion-arreglo');
const multiplicar = document.getElementById('multiplicar-arreglo');

const multiplicarArreglo = (numeros) => {
    let multiplicacion = 1;
    for (let i = 0; i < numeros.length; i++) {
        multiplicacion *= parseInt(numeros[i], 10);
    }
    return multiplicacion;
};

multiplicar.addEventListener('click', e => {
    e.preventDefault();
    let arreglo = numeros.value.split(',');
    resultado.innerHTML = multiplicarArreglo(arreglo);
    numeros.value = '';
});
