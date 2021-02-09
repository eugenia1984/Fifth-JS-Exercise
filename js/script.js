let form = document.getElementById('form')

let email = document.getElementById('mail')

let password = document.getElementById('contraseña')

let password2 = document.getElementById('contraseña2')

let tel = document.getElementById('tel')

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    let passwordValue = password.value.trim()
    let password2Value = password2.value.trim()

    if(passwordValue !== password2Value){
        alert(`CUIDADO: 
        Las contraseñas no coinciden`)
    }
}