import { useState } from "react";

export default function IndexNow() {
  const [status, setStatus] = useState("");

  const notifyIndexNow = async () => {
    const response = await fetch("/api/indexnow", { method: "POST" });
  
    if (response.ok) {
      const result = await response.json();
      setStatus(JSON.stringify(result)); // Prikazivanje odgovora korisniku
    } else {
      setStatus("Došlo je do greške.");
    }
  };

  return (
    <div>
      <h1>IndexNow Bing</h1>
      <button onClick={notifyIndexNow}>Pošaljite URL Bing-u</button>
      <p>Rezultat: {status}</p>
    </div>
  );
}

