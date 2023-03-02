export default function validation(input) {
    const regexEmail = /\S+@\S+\.\S+/
    const regexPass = new RegExp("[0-9]");
    const errors = {};
    if (!regexEmail.test(input.username)) {
        errors.username = "Nombre debe ser un email valido!!"}
    if (!input.username) {
        errors.username = "el nombre es obligatorio"}
    if(input.username.length > 35){
        errors.username = "Maximo 35 caracteres"}
    if (!regexPass.test(input.password)) {
        errors.password = "Almeno un numero" }
    if (input.password.length < 6 || input.password.length > 10){
        errors.password = "entre 6 y 10 carracteres"}
    
    return errors;
}

//{ username: '', password: ''}