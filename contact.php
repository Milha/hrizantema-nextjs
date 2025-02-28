<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "milhans79@gmail.com"; // Postavi svoju email adresu
    $subject = "Nova poruka sa sajta";
    $body = "Ime: $name\nEmail: $email\nPoruka:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Poruka je uspešno poslata!";
    } else {
        echo "Došlo je do greške prilikom slanja poruke.";
    }
} else {
    echo "Neovlašćen pristup.";
}
?>