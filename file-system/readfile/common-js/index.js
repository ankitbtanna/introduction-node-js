// common js does not have top level async

const fs = require('fs');
const path = require('path');

let template = fs.readFile(
    path.join(__dirname, 'template.html'),
    'utf-8',
    async (err, tempData) => {
        if (err) throw err;

        const data = {
          title: "Learn Node.js",
          body: "This is the final HTML.",
        };

        for (const [key, value] of Object.entries(data)) {
          tempData = tempData.replace(`{${key}}`, value);
        }

        fs.writeFile(path.join(__dirname, "template-modified.html"), tempData, (err, newTempData) => {
          if (err) throw err;
        });
    }
)