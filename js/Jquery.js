$(document).ready(function() {
    // Código para el formulario de registro
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

    // Código para el formulario de recuperación de contraseña
    document.getElementById('recovery-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        
        // Obtener el valor del campo de correo
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        const successMessage = document.getElementById('success-message');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón regex para validar el formato del correo
        const buttonErrorMessage = document.getElementById('button-error-message'); // Nuevo elemento para mostrar el error sobre el botón

        // Limpiar mensajes anteriores
        buttonErrorMessage.style.display = 'none'; // Ocultar mensaje de error sobre el botón
        successMessage.style.display = 'none'; // Ocultar mensaje de éxito   
        
        // Validar el formato del correo electrónico
        if (emailValue === "") {
            buttonErrorMessage.textContent = "El correo es requerido"; // Mensaje para campo vacío
            buttonErrorMessage.style.display = 'block'; // Mostrar mensaje de error    
        } else if (!emailPattern.test(emailValue)) {
            buttonErrorMessage.textContent = "Formato inválido."; // Mensaje para formato inválido
            buttonErrorMessage.style.display = 'block'; // Mostrar mensaje de error    
        } else {
            successMessage.style.display = 'block'; // Mostrar mensaje de éxito
        }
    });

    // Función para agregar al carrito
    window.agregarAlCarrito = function(event) {
        // Muestra el mensaje en el div correspondiente
        $('.carrito-mensaje').hide(); // Oculta cualquier mensaje que ya esté visible
        $(event.target).siblings('.carrito-mensaje').show(); // Muestra el mensaje correspondiente
    };
});
