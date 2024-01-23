

const incializar = () => {
    let nombre = prompt('What is your name?');
    
    if (nombre != '') {
        asignarTextoElemento('h2',`Hello ${nombre}`);     
    } else{
        alert('Type your name')
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

const calcularIMC = () =>{
    let estado = '';
    
    let alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    var alturaEnMetros = alturaEnCentimetros / 100;
    let pesoEnKilos = parseInt(document.getElementById('peso').value);
    let imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    asignarTextoElemento('h3',`BMI: ${imc}`);

    if (imc<18.5) {
        estado = 'Underweight';
    } else if (imc<25){
        estado = 'Normal Weight'
    } else if (imc<30){
        estado = 'Overweight'
    } else {
        estado = 'Obesity';
    }
    asignarTextoElemento('p',`Range ${estado}`);
}

const limpiar = () => {
    asignarTextoElemento('h2',` `);
    asignarTextoElemento('p',` `);
    asignarTextoElemento('h3',` `);
    limpiarCaja();
}

const  limpiarCaja = () => {
    document.querySelector('#peso').value = '';
    document.querySelector('#altura').value = '';
}
