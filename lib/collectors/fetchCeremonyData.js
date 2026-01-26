import { appendFileSync, readFileSync, writeFileSync } from "fs";

import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function fetchData() {
  const url =
    "https://ecitulje.com/api/v1/ceremony?type=FUNERAL&ceremonyDate=2026-01-28T23:00:00.000Z";
  const res = await fetch(url);
  if (!res.ok) throw new Error("API request failed");
  return res.json();
}

(async () => {
  try {
    const data = await fetchData();
    // console.log("Fetched data:\n", JSON.stringify(data, null, 2));

    let ceremoniesData = [];
    let raw = readFileSync(
      path.resolve(__dirname, "../../data/ceremony/ceremonies.json"),
      "utf-8",
    );
    console.log("Tip podataka:", typeof ceremoniesData);
    console.log("Tip podataka:", typeof raw);
    ceremoniesData = JSON.parse(raw);
    // console.log("Existing ceremonies:\n", JSON.stringify(ceremonies, null, 2));

    const dataOrl = data.results[2];
    if (!dataOrl) {
      console.error(
        "data.results[2] is undefined. data.results:",
        data.results,
      );
      return;
    }
    ceremoniesData.ceremonies.push(dataOrl);
    writeFileSync(
      path.resolve(__dirname, "../../data/ceremony/ceremonies.json"),
      JSON.stringify(ceremoniesData, null, 2),
    );
    console.log("Data saved to data/ceremony/ceremonies.json");

    if (!dataOrl.cemetery) {
      console.error("data.results[2].cemetery is undefined. dataOrl:", dataOrl);
      return;
    }
    const cemeteryName = dataOrl.cemetery.name;
    console.log("Groblje:", cemeteryName);
  } catch (err) {
    console.error("Error:", err);
  }
})();
