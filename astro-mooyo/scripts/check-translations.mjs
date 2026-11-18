import fs from "node:fs";

function flattenTranslations(value, prefix = "", result = {}) {
  for (const [key, child] of Object.entries(value)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (child && typeof child === "object" && !Array.isArray(child)) {
      flattenTranslations(child, path, result);
    } else {
      result[path] = child;
    }
  }
  return result;
}

const dutch = JSON.parse(
  fs.readFileSync(new URL("../src/i18n/nl.json", import.meta.url), "utf8"),
);
const english = JSON.parse(
  fs.readFileSync(new URL("../src/i18n/en.json", import.meta.url), "utf8"),
);

const dutchKeys = flattenTranslations(dutch);
const englishKeys = flattenTranslations(english);
const missingInEnglish = Object.keys(dutchKeys).filter(
  (key) => !(key in englishKeys),
);
const missingInDutch = Object.keys(englishKeys).filter(
  (key) => !(key in dutchKeys),
);
const emptyValues = [
  ...Object.entries(dutchKeys),
  ...Object.entries(englishKeys),
].filter(([, value]) => typeof value !== "string" || value.trim() === "");

if (missingInEnglish.length || missingInDutch.length || emptyValues.length) {
  if (missingInEnglish.length) {
    console.error(`Missing from en.json:\n${missingInEnglish.join("\n")}`);
  }
  if (missingInDutch.length) {
    console.error(`Missing from nl.json:\n${missingInDutch.join("\n")}`);
  }
  if (emptyValues.length) {
    console.error(
      `Empty translation values:\n${emptyValues
        .map(([key]) => key)
        .join("\n")}`,
    );
  }
  process.exit(1);
}

console.log("Translation parity check passed.");
