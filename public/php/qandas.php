<?php
require_once("config.php");
require_once("connection.php");

$sql = "SELECT id, question, answer FROM qandas";
$result = $conn->query($sql);

$data = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$conn->close();
echo json_encode($data);
