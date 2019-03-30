const https = require('https');

function fetch(url) {

    return new Promise((resolve, reject) => {

        https.get(url, response => {

            let data = '';

            response.on('data', rd => data = data + rd);
            response.on('end', () => { resolve(data) });
            response.on('error', reject);
        });
    });
};

// fetch('https://www.google.com')
// .then(data => console.log('Resultado', data))
// .catch(error => console.log('Error', error));



(async function read(){

    const data = await fetch('https://www.google.com');

    console.log(data);
})();

// read();