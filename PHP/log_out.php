<?php

header('Content-Type: application/json');
$response = array();

try {

    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['logOut']) && $data['logOut'] === true) {
        session_start();
        session_unset();
        session_destroy();
        $response['success'] = "Sesión destruida exitosamente";
    }

} catch (Exception $e) {
    http_response_code(500);
    $response['error'] = "Error al destruir la sesión: " . $e->getMessage();
}

echo json_encode($response);
exit();
