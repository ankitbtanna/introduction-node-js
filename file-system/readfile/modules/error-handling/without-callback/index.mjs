import { readFile, writeFile } from "fs/promises";

console.log(import.meta.url);

try {
  let template = await readFile(new URL("template.html123", import.meta.url), "utf-8");

  const data = {
    title: "Learn Node.js",
    body: "This is the final HTML.",
  };

  for (const [key, value] of Object.entries(data)) {
    template = template.replace(`{${key}}`, value);
  }

  console.log(tempData);

  try {
    const updatedTemplate = writeFile(
      new URL("template-modified.html", import.meta.url),
      template
    );
  } catch (error) {
    console.log(error);
    console.log("hello, this failed!");
    // throw err; <-- this will crash the app
  }
} catch (error) {
  console.log(error);
  console.log("hello, this failed!");
  // throw err; <-- this will crash the app
}

