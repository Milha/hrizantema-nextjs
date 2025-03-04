import { useState } from "react";

export default function IndexNow() {
  const [status, setStatus] = useState("");

  const notifyIndexNow = async () => {
    const response = await fetch("https://www.bing.com/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "hrizantema.rs",
        key: "9bf72adf92b840628d376371c75f7d1a",
        urlList: ["https://hrizantema.rs/single/venac/crvena-ruza-bela-ruza-crveni-gerber-bela-margareta-prirodni-venac-2?category=venci"],
      }),
    });

    const result = await response.json();
    setStatus(JSON.stringify(result));
  };

  return (
    <div>
      <h1>IndexNow Bing</h1>
      <button onClick={notifyIndexNow}>Pošalji URL Bing-u</button>
      <p>Rezultat: {status}</p>
    </div>
  );
}

