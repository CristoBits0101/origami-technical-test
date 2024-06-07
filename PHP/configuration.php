<?php

// Configuración de la base de datos.
define('DB_HOST', 'localhost');
define('DB_NAME', 'origami_technical_test');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');

// Función para conectar a la base de datos.
function connect_to_database()
{
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME;

    try {
        $conn = new PDO($dsn, DB_USERNAME, DB_PASSWORD);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
        return null;
    }
}
