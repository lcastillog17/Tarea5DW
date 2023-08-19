//Ejercicio 1
const resultadoBmi = document.getElementById('resultado-bmi');
const calcularBmi = document.getElementById('calcular-bmi');

const bmi = (peso, altura) => {
    let resultado = '';
    const bmi = peso / (altura * altura);
    if (bmi < 18.5) {
        resultado = 'Bajo de peso';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultado = 'Normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultado = 'Sobrepeso';
    } else if (bmi >= 30) {
        resultado = 'Obeso';
    }
    return resultado;
};

calcularBmi.addEventListener('click', e => {
    e.preventDefault();
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    resultadoBmi.innerHTML = bmi(peso, altura);
    peso.value = '';
    altura.value = '';
});
