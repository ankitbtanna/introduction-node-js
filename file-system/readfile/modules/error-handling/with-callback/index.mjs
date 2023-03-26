import { readFile, writeFile } from "fs";

console.log(import.meta.url);

readFile(new URL("template.html123", import.meta.url), "utf-8", async (err, tempData) => {
  if (err) {
      console.log(err);
      // throw err; <-- this will crash the app
  }
  console.log(tempData);

  const data = {
    title: "Learn Node.js",
    body: "This is the final HTML.",
  };

  for (const [key, value] of Object.entries(data)) {
    tempData = tempData.replace(`{${key}}`, value);
  }

  console.log(tempData);

  writeFile(new URL("template-modified.html", import.meta.url), tempData, (err, newTempData) => {
    if (err) throw err;
    console.log(newTempData);
  });
});
