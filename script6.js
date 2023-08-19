//Ejercicio 6
const texto = document.getElementById('texto');
const caracter = document.getElementById('caracter');
const resultado = document.getElementById('resultado-caracteres');
const calcular = document.getElementById('calcular-caracteres');

const calcularCaracteres = (texto, caracter) => {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            contador++;
        }
    }
    return contador;
};

calcular.addEventListener('click', e => {
    e.preventDefault();
    resultado.innerHTML = calcularCaracteres(texto.value, caracter.value);
    texto.value = '';
    caracter.value = '';
});
