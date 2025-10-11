<?php
header("Content-Type: text/plain");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

echo "Test fajl se učitao.\n";

// Konekcija
$conn = new mysqli("169.254.0.2", "milha79_milha79", "Miki7979", "milha79_hrizantema_db");
if ($conn->connect_error) {
    die("Greška u konekciji: " . $conn->connect_error);
}

echo "Konekcija uspešna.\n";

// Upit
$sql = "SELECT id, question, answer FROM qandas";
$result = $conn->query($sql);

if ($result) {
    while ($row = $result->fetch_assoc()) {
        echo "\nID: " . $row['id'];
        echo "\nQuestion: " . mb_convert_encoding($row['question'], 'UTF-8', 'UTF-8');
        echo "\nAnswer: " . mb_convert_encoding($row['answer'], 'UTF-8', 'UTF-8');
        echo "\n---\n";
    }
}


echo "\nJSON:\n";
echo json_encode($data);
