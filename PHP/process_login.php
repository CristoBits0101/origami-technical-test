<?php

header('Content-Type: application/json');
require_once "./configuration.php";

session_start();
$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $data = json_decode(file_get_contents('php://input'), true);

    // Verificar si todos los campos necesarios están presentes y no están vacíos
    $requiredFields = ['email', 'password'];
    foreach ($requiredFields as $field) {
        if (!isset($data[$field]) || empty($data[$field])) {
            $response['error'] = "Por favor, complete todos los campos.";
            echo json_encode($response);
            exit();
        }
    }

    $connection = connect_to_database();
    $email = $data['email'];
    $password = $data['password'];

    $stmt = $connection->prepare("SELECT id, user_name, user_password FROM users WHERE user_email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    if (($user = $stmt->fetch(PDO::FETCH_ASSOC)) !== false) {
        if (password_verify($password, $user['user_password'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['name'] = $user['user_name'];
            $response['success'] = "Inicio de sesión correcto.";
        } else {
            $response['error'] = "Inicio de sesión incorrecto.";
        }
    } else {
        $response['error'] = "Credenciales de inicio de sesión incorrectas.";
    }

    $connection = null;
} else {
    $response['error'] = "Método de solicitud no permitido.";
    session_unset();
    session_destroy();
    die("Acceso no permitido");
}

echo json_encode($response);
exit();
