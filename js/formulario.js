const formulario = document.querySelector('#formulario');
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const inputMensaje = document.querySelector('#mensaje');

inputNombre.addEventListener('blur', validar);
inputEmail.addEventListener('input', validar);
inputAsunto.addEventListener('blur', validar);
inputMensaje.addEventListener('blur', validar);

function validar(e) {
    if (e.target.value.trim() === "") {
        mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        return;
    }

    if (e.target.id === 'email' && !validarEmail(e.target.value)) {
        mostrarAlerta("El email no es válido", e.target.parentElement);
        return;
    }

    limpiarAlerta(e.target.parentElement);
}

function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);


    const error = document.createElement('P');
    error.textContent = mensaje;

    error.classList.add('cartelError');

    referencia.appendChild(error);
}

function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector('.cartelError')
    if (alerta) {
        alerta.remove();
    }
}

function validarEmail(email) {
    const val = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    const resultado = val.test(email);
    return resultado;
}


