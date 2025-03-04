// pages/api/indexnow.js

export default async function handler(req, res) {
    try {
      const response = await fetch('https://www.bing.com/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          host: 'hrizantema.rs', // tvoj sajt
          key: '9bf72adf92b840628d376371c75f7d1a', // tvoj API ključ
          urlList: ['https://hrizantema.rs/single/venac/crveni-ljiljan-bele-ruze-robelini-prirodni-venac?category=venci'], // lista URL-ova
        }),
      });
  
      const result = await response.json();
      res.status(200).json(result);  // Posaljite odgovor nazad korisniku
    } catch (error) {
      res.status(500).json({ error: 'Došlo je do greške prilikom slanja zahteva.' });
    }
  }
  