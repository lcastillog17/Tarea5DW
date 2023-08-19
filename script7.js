// Ejercicio 7
const numeros = document.getElementById('numeros');
const resultado = document.getElementById('resultado-suma-arreglo');
const sumar = document.getElementById('sumar-arreglo');

const sumarArreglo = (numeros) => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += parseInt(numeros[i], 10);
    }
    return suma;
};

sumar.addEventListener('click', e => {
    e.preventDefault();
    let arreglo = numeros.value.split(',');
    resultado.innerHTML = sumarArreglo(arreglo);
    numeros.value = '';
});
