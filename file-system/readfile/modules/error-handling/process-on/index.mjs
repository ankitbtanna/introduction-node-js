import { readFile, writeFile } from "fs/promises";

console.log(import.meta.url);

process.on("uncaughtException", (err) => {
  console.log(err);
  console.log("############ hello, this failed in process.on!");
});

let template = await readFile(new URL("template.html123", import.meta.url), "utf-8");

const data = {
  title: "Learn Node.js",
  body: "This is the final HTML.",
};

for (const [key, value] of Object.entries(data)) {
  template = template.replace(`{${key}}`, value);
}

console.log(tempData);

const updatedTemplate = writeFile(new URL("template-modified.html", import.meta.url), template);
