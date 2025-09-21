<?php
// 🔍 Prikaz grešaka
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Prikupljanje i sanitizacija
    $ime = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $poruka = htmlspecialchars($_POST["message"]);

    // 2. Honeypot zaštita
    if (!empty($_POST["botcheck"])) {
        exit("Spam detektovan.");
    }

    // 3. Konekcija sa bazom
    $db_host = "169.254.0.2";
    $db_user = "milha79_milha79";
    $db_pass = "Miki7979";
    $db_name = "milha79_hrizantema_db";

    $conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

    if ($conn->connect_error) {
        die("Greška u konekciji: " . $conn->connect_error);
    }

    // 4. Upis u tabelu
    $stmt = $conn->prepare("INSERT INTO poruke (ime, email, poruka) VALUES (?, ?, ?)");
    if (!$stmt) {
        die("Greška u pripremi upita: " . $conn->error);
    }

    $stmt->bind_param("sss", $ime, $email, $poruka);
    $stmt->execute();
    $stmt->close();
    $conn->close();

    // 5. Odgovor korisniku
    echo "Poruka je uspešno sačuvana!";
} else {
    echo "Neovlašćen pristup.";
}
