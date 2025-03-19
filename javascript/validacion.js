"use strict";
// Definición de variables para los campos
const form = document.getElementById('registrationForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const usernameInput = document.getElementById('username');
const cityInput = document.getElementById('city');
const stateSelect = document.getElementById('state');
const termsCheck = document.getElementById('termsCheck');
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const usernameError = document.getElementById('usernameError');
const cityError = document.getElementById('cityError');
const stateError = document.getElementById('stateError');
const termsError = document.getElementById('termsError');
// Función de validación
function validateForm() {
    let isValid = true;
    // Validar nombre
    if (firstNameInput.value.trim() === '') {
        firstNameInput.classList.add('is-invalid');
        firstNameError.style.display = 'block';
        isValid = false;
    }
    else {
        firstNameInput.classList.remove('is-invalid');
        firstNameError.style.display = 'none';
    }
    // Validar apellido
    if (lastNameInput.value.trim() === '') {
        lastNameInput.classList.add('is-invalid');
        lastNameError.style.display = 'block';
        isValid = false;
    }
    else {
        lastNameInput.classList.remove('is-invalid');
        lastNameError.style.display = 'none';
    }
    // Validar nombre de usuario (al menos 5 caracteres)
    if (usernameInput.value.trim().length < 5) {
        usernameInput.classList.add('is-invalid');
        usernameError.style.display = 'block';
        isValid = false;
    }
    else {
        usernameInput.classList.remove('is-invalid');
        usernameError.style.display = 'none';
    }
    // Validar ciudad
    if (cityInput.value.trim() === '') {
        cityInput.classList.add('is-invalid');
        cityError.style.display = 'block';
        isValid = false;
    }
    else {
        cityInput.classList.remove('is-invalid');
        cityError.style.display = 'none';
    }
    // Validar estado (debe seleccionarse una opción)
    if (stateSelect.value === '') {
        stateSelect.classList.add('is-invalid');
        stateError.style.display = 'block';
        isValid = false;
    }
    else {
        stateSelect.classList.remove('is-invalid');
        stateError.style.display = 'none';
    }
    // Validar check de términos
    if (!termsCheck.checked) {
        termsCheck.classList.add('is-invalid');
        termsError.style.display = 'block';
        isValid = false;
    }
    else {
        termsCheck.classList.remove('is-invalid');
        termsError.style.display = 'none';
    }
    return isValid;
}
// Función para manejar el evento submit del formulario
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el envío del formulario si no es válido
    // Si el formulario es válido, lo podemos enviar (aquí solo mostramos el mensaje de éxito)
    if (validateForm()) {
        alert('Formulario enviado correctamente!');
        form.reset(); // Resetear el formulario si todo es correcto
    }
});
