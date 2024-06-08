<?php
header('Content-Type: application/json');
require_once "./configuration.php";

$response = array();

// Solo permitir solicitudes GET
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $connection = connect_to_database();
    $stmt = $connection->prepare("SELECT id, user_name, user_email FROM users");
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $response['users'] = $users;
} else {
    $response['error'] = "Método de solicitud no permitido.";
    http_response_code(405);
}

echo json_encode($response);
exit();
