import { writeFileSync } from "fs";

export async function fetchData() {
  const url =
    "https://ecitulje.com/api/v1/ceremony?type=FUNERAL&ceremonyDate=2026-01-26T23:00:00.000Z";
  const res = await fetch(url);
  if (!res.ok) throw new Error("API error");
  return res.json();
}

(async () => {
  try {
    const data = await fetchData();
    console.log("Fetched data:\n", JSON.stringify(data, null, 2));

    const cemeteryName = data.results[4].cemetery.name;
    console.log("Groblje:", cemeteryName);

    writeFileSync(
      "../../data/ceremony/ceremonies.json",
      JSON.stringify(data, null, 2),
    );
    console.log("Podaci sačuvani u data/ceremony/ceremonies.json");
  } catch (err) {
    console.error("Greška:", err);
  }
})();
