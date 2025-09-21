export default function ContactForma() {
  return (
    <form action="https://hrizantema.rs/contact.php" method="POST">
      <label>
        Ime:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Poruka:
        <textarea name="message" required></textarea>
      </label>
      <input type="text" name="botcheck" style={{ display: "none" }} />

      <button type="submit">Pošalji</button>
    </form>
  );
}
