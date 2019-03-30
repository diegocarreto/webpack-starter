const fs = require('fs').promises;

(async function() {

    const data = await fs.readFile(__filename);

    await fs.writeFile(__filename + '.copy.js', data);
})();

// fs.readFile(__filename, (p1, data) => {

//     fs.writeFile(__filename + '.copy.js', data, (err) => {


//     });
// });

