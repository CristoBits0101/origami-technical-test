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
        $name = $data['name'];
        $email = $data['email'];

        $stmt = $connection->prepare("UPDATE users SET name = :name, email = :email WHERE id = :id");
        $stmt->bindParam(':id', $userId);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);

        if ($stmt->execute()) {
            $affected_rows = $stmt->rowCount();
            if ($affected_rows > 0) {
                $response['success'] = "Usuario actualizado exitosamente.";
            } else {
                $response['error'] = "Ningún usuario actualizado. ¿El usuario con ID $userId existe?";
            }
        } else {
            $errorInfo = $stmt->errorInfo();
            $response['error'] = "Error al actualizar el usuario: " . implode(", ", $errorInfo);
        }
    }
} else {
    $response['error'] = "Método de solicitud no permitido.";
    http_response_code(405);
}

echo json_encode($response);
exit();
