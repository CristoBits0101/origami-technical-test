<?php

header('Content-Type: application/json');
$response = array();

try {
    if ($_SERVER["REQUEST_METHOD"] === "POST") {

        $data = json_decode(file_get_contents('php://input'), true);

        if (isset($data['logOut']) && $data['logOut'] === true) {
            session_start();
            session_unset();
            session_destroy();
            session_write_close();
            $response['success'] = "Sesión destruida exitosamente";
        } else {
            $response['error'] = "No se proporcionaron datos válidos para cerrar la sesión";
        }

    } else {
        $response['error'] = "Método de solicitud no permitido. Se espera una solicitud POST";
        http_response_code(405);
    }
} catch (Exception $e) {
    http_response_code(500);
    $response['error'] = "Error al destruir la sesión: " . $e->getMessage();
}

echo json_encode($response);
exit();
