
$(document).ready(function(){
    $('#formulario-registro').submit(function(event) {
        event.preventDefault();
        // Limpiar mensajes de error
        $('#nombre-error').text('');
        $('#appaterno-error').text('');
        $('#apmaterno-error').text('');
        $('#email-error').text('');
        $('#nomusuario-error').text('');                 
        $('#password-error').text('');
        $('#password2-error').text('');
        $('#fecha-error').text('');  

        // Validación del nombre, apellidos y nombre de usuario
        if($('#nombre').val() === '') {
            $('#nombre-error').text('El campo nombre no puede quedar vacío');
            return;
        }
        if($('#appaterno').val() === '') {
            $('#appaterno-error').text('El campo apellido paterno no puede quedar vacío');
            return;
        }
        if($('#apmaterno').val() === '') {
            $('#apmaterno-error').text('El campo apellido materno no puede quedar vacío');
            return;
        }

        // Validación del e-mail
        const emailValue = $('#email').val();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === '') {
            $('#email-error').text('El campo correo electrónico no puede quedar vacío');
            return;
        } else if (!emailPattern.test(emailValue)) {
            $('#email-error').text('Debe ingresar un e-mail válido');
            return; 
        }

        // Validación de nombre de usuario    
        if($('#nomusuario').val() === '') {
            $('#nomusuario-error').text('El nombre de usuario no puede quedar vacío');
            return;
        }
        
        // Validación de contraseña
        const passwordValue = $('#password').val();
        const password2Value = $('#password2').val();
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,18}$/;
        if (passwordValue !== password2Value) {
            $('#password-error').text('Las contraseñas no coinciden');
            return;
        }
        if (!passwordPattern.test(passwordValue)) {
            $('#password-error').text('Contraseña debe tener 6 a 18 dígitos, un número y una letra mayúscula');
            return;
        }              
        // Validación de edad
        const fechaValue = $('#fecha').val();
        if (fechaValue === '') {
            $('#fecha-error').text('Debe ingresar una fecha válida');
            return;
        }
        const fecha = new Date(fechaValue);
        const hoy = new Date();
        const edad = hoy.getFullYear() - fecha.getFullYear();
        const mes = hoy.getMonth() - fecha.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
            edad--;
        }
        if (edad < 13) {
            $('#fecha-error').text('Solo pueden registrarse mayores de 13 años');
            return;
        }
        // Envío de formulario            
        this.submit();
    });
});

function limpiarCampos() {
    // Restablecer el formulario a su estado original
    $('#formulario-registro')[0].reset();

    // Limpiar los mensajes de error
    $('#nombre-error').text('');
    $('#appaterno-error').text('');
    $('#apmaterno-error').text('');
    $('#nomusuario-error').text('');
    $('#email-error').text('');
    $('#fecha-error').text('');
    $('#password-error').text('');
    $('#password2-error').text('');
}



$(document).ready(function() {
    $('#formulario-login').submit(function(event) {
        event.preventDefault(); // Evita el envío del formulario
        
        // Obtener los valores de los campos
        var nombreUsuario = $('#username').val().trim();
        var contraseña = $('#passwordLogin').val().trim();
        
        // Limpiar mensajes de error
        $('#username-error').text('');
        $('#password-error-login').text('');

        // Comprobar si hay un nombre de usuario y contraseña
        if (nombreUsuario === '' && contraseña === '') {
            $('#username-error').text('Por favor ingresa tu nombre de usuario.');
            $('#password-error-login').text('Falta la contraseña.');
        } else if (nombreUsuario === '') {
            $('#username-error').text('Debe ingresar un nombre de usuario o e-mail');
        } else if (contraseña === '') {
            $('#password-error-login').text('Debe ingresar una contraseña.');
        } else {
            $('#username-error').text('Credenciales ingresadas con éxito.');                  
            this.submit(); // Envía el formulario si los datos son válidos
        }
    });

    // Función para agregar al carrito
    window.agregarAlCarrito = function(event) {
        // Muestra el mensaje en el div correspondiente
        $('.carrito-mensaje').hide(); // Oculta cualquier mensaje que ya esté visible
        $(event.target).siblings('.carrito-mensaje').show(); // Muestra el mensaje correspondiente
    };
});
