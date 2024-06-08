<?php

header('Content-Type: application/json');
require_once "./configuration.php";

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $data = json_decode(file_get_contents('php://input'), true);

    $requiredFields = ['name', 'email', 'password'];
    foreach ($requiredFields as $field) {
        if (!isset($data[$field]) || empty($data[$field])) {
            $response['error'] = "Por favor, complete todos los campos.";
            echo json_encode($response);
            exit();
        }
    }

    $connection = connect_to_database();
    $name = $data['name'];
    $email = $data['email'];
    $password = $data['password'];

    $stmt = $connection->prepare("SELECT id FROM users WHERE user_email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    if ($userExists = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $response['error'] = "El correo electrónico ya está registrado.";
    } else {

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $connection->prepare("INSERT INTO users (user_name, user_email, user_password) VALUES (:name, :email, :password)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $hashedPassword);

        if ($stmt->execute()) {
            $response['success'] = "Usuario registrado exitosamente.";
        } else {
            $response['error'] = "Error al registrar el usuario.";
        }
    }

} else {
    $response['error'] = "Método de solicitud no permitido.";
    http_response_code(405);
}

echo json_encode($response);
exit();
