window.onload=function(){

//defino que se guardará lo ingresado en el campo del newsletter en el localStorage    
let correoNewsletter = document.getElementById ('emailNewsletter');
correoNewsletter.addEventListener ('input', () => {
    localStorage.setItem ('correoNewsletter', (correoNewsletter.value))
})

//el correo ingresado recibe un email automático de registro al newsletter a través de emailJS, y la casilla que lo envía recibe una notificación de que hay una nueva suscripción
document.getElementById("boton-enviar").onclick = function() {suscribir()};
function suscribir() {document.getElementById("boton-enviar").innerHTML = " ✓ Te suscribiste!";
emailjs.send('contact_service', 'newsletter', {email: correoNewsletter.value}, 'o4rCMo2xirymBawG3');}

}
