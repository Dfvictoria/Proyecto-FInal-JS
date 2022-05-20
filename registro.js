// para cargar la funcion de entrada

    window.onload=function(){

        // establezco que cada uno de los campos registre un dato para utilizarlo luego
        let primerNombre = document.getElementById("primerNombre");
        primerNombre.addEventListener ('input', () => {});
        let apellido = document.getElementById ("apellido");
        apellido.addEventListener ('input', () =>{});
        //guarda localmente el telefono, nombre de usuario y contraseña
        let telefono = document.getElementById ("telefono");
        telefono.addEventListener ('input', () => {
            localStorage.setItem ('telefono', JSON.parse(telefono.value))
        });
        let correo = document.getElementById ("correo");
        correo.addEventListener ('input', () => {
            localStorage.setItem ('email', (correo.value)) 
        });
        let pass = document.getElementById ("pass");
        pass.addEventListener ('input', () => {
            localStorage.setItem ('pass', (pass.value))
        });
        
    
        // al presionar el botón de registro sale un mensaje de registro completado, desaparecen todos los campos de ingreso, y el botón de registro se transforma en botón de login, el cual te lleve a iniciar sesión
        let registrarse = document.getElementById ("registrarse").onclick = function () {
            
            let mensaje = document.getElementById ("celularDiv")
            mensaje.innerHTML = `Gracias por registrarte, ${primerNombre.value}! Enviamos un e-mail a ${correo.value} y un código a ${telefono.value} para verificar tu cuenta.`
            //el servicio de emailJS envia un correo ambos a una casilla de registro, notificando a la empresa, y otro al usuario registrado, para darle un código de descuento
            emailjs.send('contact_service', 'contact_form', {email: correo.value, name: primerNombre.value}, 'o4rCMo2xirymBawG3');
            document.getElementById ("nombreDiv").innerHTML = ""
            document.getElementById ("apellidoDiv").innerHTML = ""
            document.getElementById ("correoDiv").innerHTML = ""
            document.getElementById ("passDiv").innerHTML = ""
            document.getElementById ("tituloDiv").innerHTML = ""
            let registrarseTexto = document.getElementById ("registrarse")
            registrarseTexto.innerHTML = "Iniciar Sesión"
            registrarseTexto.addEventListener ('click', () => {
            location.href = "./Miembros.html"
            })
            }    
        }





    
    
    
    
    



