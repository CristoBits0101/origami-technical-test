<?php

    function cerrarSesion()
    {
        // Destruye todas las variables de sesión.
        session_unset();

        // Destruye la sesión.
        session_destroy();

        // Puedes redirigir al usuario a la página de inicio de sesión o a cualquier otra página aquí.
    }

    if (isset($_POST['cerrarSesion'])) 
        cerrarSesion();

?>
<script>
    function cerrarSesion()
    {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () 
        {
            if (xhr.readyState == 4 && xhr.status == 200) 
            {
                // Puedes redirigir al usuario a la página de inicio de sesión o a cualquier otra página aquí.
                window.location.href = "form_login.php";
            }
        };
        xhr.send("cerrarSesion=true");
    }
</script>
<header>
    <h1>Origami Technical Test</h1>
    <nav>
        <ul>
            <li>
                <a href="./index.php">Home</a>
            </li>
        </ul>
    </nav>
    <?php 
        if (isset($_SESSION['name']) && !empty($_SESSION['name']))
            echo "<p> Sesión iniciada como: " . $_SESSION['name'] . "</p>";
    ?>
    <button onclick="cerrarSesion()">
        Cerrar Sesión
    </button>
</header>
