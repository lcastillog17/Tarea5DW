// Ejercicio 10
const numeros = document.getElementById('numeros');
const encontrar = document.getElementById('encontrar-maximo');
const resultado = document.getElementById('resultado-maximo');

const encontrarMaximo = numeros => {
    let maximo = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (parseInt(numeros[i], 10) > maximo) {
            maximo = parseInt(numeros[i], 10);
        }
    }
    return maximo;
    //return Math.max(...numeros);
};

encontrar.addEventListener('click', e => {
    e.preventDefault();
    let arreglo = numeros.value.split(',');
    resultado.innerHTML = encontrarMaximo(arreglo);
    numeros.value = '';
});
