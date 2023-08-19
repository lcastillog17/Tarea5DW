// Ejercicio 3
const usuario = document.getElementById('usuario');
const password = document.getElementById('password');
const resultadoValidacion = document.getElementById('resultado-validacion');
const validar = document.getElementById('validar-usuario');

const validarUsuario = (usuario, password) => {
    if (usuario === 'admin' && password === '123456') {
        return `Bienvenido ${usuario}!`;
    } else {
        return 'Usuario o contraseña incorrectos';
    }
};

validar.addEventListener('click', e => {
    e.preventDefault();
    resultadoValidacion.innerHTML = validarUsuario(usuario.value, password.value);
    usuario.value = '';
    password.value = '';
});
