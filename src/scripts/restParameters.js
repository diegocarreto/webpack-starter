// function printCards(num1, num2, num2) {

//     console.log('num1', num1);
//     console.log('num2', num2);
//     console.log('num3', num3);
// }

// printCards(1, 2, 3);

//Rest parameters
// function printCards(...nums) {

//     nums.forEach(num => console.log(num));
// }

// printCards(1, 2, 3);


//Rest parameters
function printCards(num1, ...nums) {

    console.log('num1', num1);

    nums.forEach(num => console.log(num));
}

printCards(1, 'dos', 3);