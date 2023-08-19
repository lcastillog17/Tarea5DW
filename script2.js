// Ejercicio 2
const resultadoLikes = document.getElementById('resultado-likes');
const formatearLikes = document.getElementById('formatear-likes');

const likes = cantidad => {
    let resultado = '';
    if (cantidad >= 1000 && cantidad < 1000000) {
        resultado = Math.floor(cantidad / 1000) + 'K';
    } else if (cantidad >= 1000000 && cantidad < 1000000000) {
        resultado = Math.floor(cantidad / 1000000) + 'M';
    }  else {
        resultado = cantidad;
    }
    return resultado;
};

formatearLikes.addEventListener('click', e => {
    e.preventDefault();
    const likesValue = document.getElementById('likes').value;
    resultadoLikes.innerHTML = likes(likesValue);
    likesValue.value = '';
});
