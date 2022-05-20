window.onload = function () {

    //traemos del localstorage a los datos ingresados en registro
    let usuario = localStorage.getItem('email', [0]); 
    let contraseña = localStorage.getItem('pass', [0]);

    //al tocar el botón de login, comprueba si lo ingresado en los campos de email + contraseña corresponden a lo que está en localstorage
    let login = document.getElementById ('ingresar').onclick = function () {
        //si coincide, te avisa que iniciaste sesión exitosamente y aparece un botón que redirige al Shop
    if (document.getElementById ('correoLogin').value == usuario && document.getElementById('passLogin').value == contraseña){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Iniciaste sesión correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          
        document.getElementById ('correoLoginDiv').innerHTML = ""
        document.getElementById ('passLoginDiv').innerHTML = ""
        document.getElementById ('checkboxDiv').innerHTML = ""
        document.getElementById ('olvidasteDiv').innerHTML = ""
        document.getElementById ('iniciarDiv').innerHTML = ""
        document.getElementById ('miembroDiv').innerHTML = ""
        document.getElementById ('ingresar').innerHTML = "<a href=Shop.html>Comprar</a>"        
    }

    else {
        //caso contrario, te avisa que algún dato está mal y consulta si querés volver o reiniciar la contraseña
        Swal.fire({
            title: 'Advertencia',
            text: "El usuario y/o contraseña ingresado es incorrecto.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'black',
            cancelButtonColor: 'gold',
            cancelButtonText: 'Volver',
            confirmButtonText: 'Cambiar contraseña'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                
              )
              const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success',
                },
                buttonsStyling: false,
              })
              //para restaurar el pass, pide que ingreses una casilla para enviar un email con instrucciones
              swalWithBootstrapButtons.fire({
                title: 'Restaurar Contraseña',
                input: 'text',
                text: "Ingresá tu correo electrónico para comenzar el proceso",
                showCancelButton: false,
                confirmButtonText: 'Enviar',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire(
                    'Gracias!',
                    `Te enviamos un correo a la casilla proporcionada. Por favor seguí los pasos para reiniciar tu contraseña.`,
                    'success'
                  )
                }
              })
            }
          })

          
    }

    }


    
}