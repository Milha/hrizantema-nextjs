import classes from "./contact-forma.module.scss";

import { useEffect, useState } from "react";

export default function ContactForma() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://hrizantema.rs/contact.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        window.location.href = "/main-pages/contact-forma?success=true";
      } else {
        alert("Greška u odgovoru servera.");
      }
    } catch (error) {
      console.error("Fetch greška:", error);
      alert("Fetch nije uspeo. Proveri CORS ili konekciju.");
    }
  };

  useEffect(() => {
  if (typeof window !== "undefined") {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success") === "true") {
      setSuccess(true);

      setTimeout(() => {
        // Ukloni query parametar iz URL-a
        const url = new URL(window.location.href);
        url.searchParams.delete("success");
        window.history.replaceState({}, "", url.toString());

        // Sakrij poruku
        setSuccess(false);
      }, 5000);
    }
  }
}, []);

  return (
    <>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={handleSubmit}>
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
      </div>
      <div className={classes.container}>
        {success && (
          <p className={classes.success}>Poruka je uspešno poslata!</p>
        )}
      </div>
    </>
  );
}
