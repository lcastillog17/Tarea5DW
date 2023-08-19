// Ejercicio 5
const arreglo = document.getElementById('arreglo');
const imprimir = document.getElementById('imprimir-arreglo');
const resultado = document.getElementById('resultado-arreglo');

const imprimirArreglo = arreglo => {
    let resultado = '';
    for (let i = 0; i < arreglo.length; i++) {
        resultado += `<li>${arreglo[i].trim()}</li>`;
    }
    return resultado;
};

imprimir.addEventListener('click', e => {
    e.preventDefault();
    resultado.innerHTML = imprimirArreglo(arreglo.value.split(','));
    arreglo.value = '';
});
