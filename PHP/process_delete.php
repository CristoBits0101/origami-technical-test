<?php

header('Content-Type: application/json');
require_once "./configuration.php";

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['id']) || empty($data['id'])) {
        $response['error'] = "ID de usuario no válido.";
    } else {
        $connection = connect_to_database();
        $userId = $data['id'];

        $stmt = $connection->prepare("DELETE FROM users WHERE id = :id");
        $stmt->bindParam(':id', $userId);

        if ($stmt->execute()) {
            $response['success'] = "Usuario eliminado exitosamente.";
        } else {
            $response['error'] = "Error al eliminar el usuario.";
        }
    }
} else {
    $response['error'] = "Método de solicitud no permitido.";
    http_response_code(405);
}

echo json_encode($response);
exit();
