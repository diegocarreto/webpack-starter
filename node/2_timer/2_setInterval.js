let count = 1;

const timerId = setInterval(() => {
    
    console.log('Interval 3 segundos ' + count);

    if (count++ === 6) {

        clearInterval(timerId);
    }

}, 3 * 1000);
