<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// 🔍 Prikaz grešaka
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ime = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $poruka = htmlspecialchars($_POST["message"]);

    if (!empty($_POST["botcheck"])) {
        exit("Spam detektovan.");
    }

    $db_host = "169.254.0.2";
    $db_user = "milha79_milha79";
    $db_pass = "Miki7979";
    $db_name = "milha79_hrizantema_db";

    $conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

    if ($conn->connect_error) {
        die("Greška u konekciji: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO poruke (ime, email, poruka) VALUES (?, ?, ?)");
    if (!$stmt) {
        die("Greška u pripremi upita: " . $conn->error);
    }

    $stmt->bind_param("sss", $ime, $email, $poruka);
    $stmt->execute();
    $stmt->close();
    $conn->close();

    $to = 'sztrhrizantema@gmail.com';
    $subject = 'Postavljeno pitanje na sajtu';
    $message = "
Pozdrav,

Upravo je postavljeno pitanje.

Ime: $ime  
Email: $email  
Poruka: $poruka

Proveri bazu za više detalja.
";

    $headers = [
        'From' => 'noreply@domen.rs',
        'Reply-To' => $email,
        'Content-Type' => 'text/plain; charset=UTF-8'
    ];

    mail($to, $subject, $message, implode("\r\n", $headers));
    // echo "Poslato!";
    // echo "Poruka je uspešno sačuvana!";
    echo json_encode(["success" => true]);
    exit;
} else {
    echo "Neovlašćen pristup.";
}
