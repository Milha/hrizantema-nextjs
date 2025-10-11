<?php

$db_host = "169.254.0.2";
$db_user = "milha79_milha79";
$db_pass = "Miki7979";
$db_name = "milha79_hrizantema_db";

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
$conn->set_charset("utf8mb4");

if ($conn->connect_error) {
    echo json_encode(["error" => "Greška u konekciji: " . $conn->connect_error]);
    exit;
}
