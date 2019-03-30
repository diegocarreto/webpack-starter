let promise = new Promise((resolve, reject) => {

    // let person = newerson;

    setTimeout(function () {

        try {

            // let person = newerson;

            resolve('Todo OK');

        } catch (error) {

            reject('Error');
        }

    }, 2 * 1000);
});

console.log(promise);

promise.then(success => console.log('OK: ' + success),
             error => console.log('ERROR: ' + error))
       .catch(exception => console.log('Exception: ' + exception));