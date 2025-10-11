<?php
header("Content-Type: application/json; charset=UTF-8");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$conn = new mysqli("169.254.0.2", "milha79_milha79", "Miki7979", "milha79_hrizantema_db");
if ($conn->connect_error) {
    die("Greška u konekciji: " . $conn->connect_error);
}

$sql = "SELECT id, question, answer FROM qandas";
$result = $conn->query($sql);

$data = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $cleanRow = [
            'id' => $row['id'],
            'question' => mb_convert_encoding($row['question'], 'UTF-8', 'UTF-8'),
            'answer' => mb_convert_encoding($row['answer'], 'UTF-8', 'UTF-8')
        ];
        $data[] = $cleanRow;
    }
}

echo json_encode($data);
