function cerrarSesion()
{
// Destruye todas las variables de sesión.
session_unset();

// Destruye la sesión.
session_destroy();

// Puedes redirigir al usuario a la página de inicio de sesión o a cualquier otra página aquí.
}

<button onclick="cerrarSesion()">
    Cerrar Sesión
</button>