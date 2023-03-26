import { readFile, writeFile } from 'fs/promises'

console.log(import.meta.url);

let template = await readFile(
    new URL('template.html', import.meta.url)
)

const data = {
    title: 'Learn Node.js',
    body: 'This is the final HTML.'
}

for (const [key, value] of Object.entries(data)) {
    template = template.replace(`{${key}}`, value);
}

console.log(template);

await writeFile(
    new URL('template-modified.html', import.meta.url),
    template,
)