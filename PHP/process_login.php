<?php

require_once "./configuration.php";

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login']) && $_POST['login'] == 'Entrar') {
    foreach ($_REQUEST as $field => $value) {
        if (!isset($value) || empty($value)) {
            echo json_encode(array("error" => "Por favor, complete todos los campos."));
            exit();
        }
    }
}
