// Ejercicio 4
const edad = document.getElementById('edad');
const ingresos = document.getElementById('ingresos');
const calcular = document.getElementById('calcular-impuestos');
const resultado = document.getElementById('resultado-impuestos');

const calcularImpuestos = (edad, ingresos) => {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4;
    } 
    return 0;
};

calcular.addEventListener('click', e => {
    e.preventDefault();
    resultado.innerHTML = calcularImpuestos(edad.value, ingresos.value);
    edad.value = '';
    ingresos.value = '';
});
