<?php

// Iniciamos sesión.
session_start();

// Verifica si no hay una sesión activa.
if (!isset($_SESSION['user_id']) || empty($_SESSION['user_id'])) {
    // Se le comunica al usuario que para acceder al resto de páginas debe loguearse primero.
    $_SESSION['session_inactiva'] = '¡Debe inicar sesión primero para poder usar nuestros servicios!';

    // Redirige al usuario a la página de inicio de sesión.
    header("Location: form_login.php");

    // Asegura que el script se detenga después de la redirección.
    exit;
}

// Si intenta ir al formulario de login con la sesión activa se le comunica que no puede ir a login porque está autenticado.
if (isset($_SESSION['session_activa']))
    echo "<script>alert('Usted está ya está logueado, para entrar con otra sesión cierre está primero.')</script>";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KonvaJS Editor</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div id="container">
        <!-- Incluye el menú dentro de la aplicación -->
        <?php
        include_once "./menu.php";
        ?>
        <main>
            <button id="addText">Add Text</button>
            <button id="downloadPDF">Download PDF</button>
            <button id="downloadJSON">Download JSON</button>
        </main>
    </div>

</body>

</html>