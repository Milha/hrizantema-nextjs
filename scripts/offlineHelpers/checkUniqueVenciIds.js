// Skripta za proveru unikatnosti ID-jeva u venciItemData.ts
const fs = require("fs");
const path = require("path");

try {
  if (!process.argv[2]) {
    throw new Error(
      "Morate navesti putanju do fajla kao argument, npr: node scripts/checkUniqueVenciIds.js data/venciItemData.ts"
    );
  }
  const filePath = path.join(process.cwd(), process.argv[2]);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const idRegex = /id:\s*(\d+)/g;
  let match;
  const ids = [];

  while ((match = idRegex.exec(fileContent)) !== null) {
    ids.push(Number(match[1]));
  }

  const uniqueIds = new Set(ids);

  console.log("Ukupno ID-jeva:", ids.length);
  console.log("Unikatnih ID-jeva:", uniqueIds.size);

  if (ids.length === uniqueIds.size) {
    console.log("Svi ID-jevi su unikatni!");
  } else {
    console.log("Nisu svi ID-jevi unikatni! Duplicirani ID-jevi:");
    const duplicates = ids.filter((id, idx) => ids.indexOf(id) !== idx);
    console.log([...new Set(duplicates)]);
  }
} catch (err) {
  console.error("Greška:", err.message);
}
