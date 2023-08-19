// Ejercicio 9
const numeros = document.getElementById('numeros');
const inicio = document.getElementById('inicio');
const fin = document.getElementById('fin');
const sumar = document.getElementById('sumar-arreglo-rango');
const resultado = document.getElementById('resultado-suma-rango');

const sumarArreglo = (numeros, inicio, fin) => {
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += parseInt(numeros[i], 10);
    }
    return suma;
};

sumar.addEventListener('click', e => {
    e.preventDefault();
    let arreglo = numeros.value.split(',');
    resultado.innerHTML = sumarArreglo(arreglo, inicio.value, fin.value);
    numeros.value = '';
    inicio.value = '';
    fin.value = '';
});
