//Detyra1

// function check(number1, number2) {
//     if (number1 < number2)
//         return (-1);
//     else if (number2 < number1)
//         return (1);
//     else
//         return (0);
// }

// let number1 = parseInt(prompt("Write first number: "));
// let number2 = parseInt(prompt("Write second number: "));
// let res = check(number1, number2);

// console.log(res);


//Detyra2

// function factorial(number) {
//     let fact = 1;
//     if (number == 0)
//         fact = 1;
//     else if (number < 0) {
//         fact = -1;
//     } else {
//         while (number != 0) {
//             fact = fact * number;
//             number--;    
//         }
//     }
//     return (fact);
// }

// console.log(factorial(parseInt(prompt("Write a number:"))));


//Detyra3

// function getNumber(number1, number2, number3) {
//     let result = number1 + "" + number2 + "" + number3;
//     let number = parseInt(result);
//     return (number);
// }

// let number1 = parseInt(prompt("Write first digit: "));
// let number2 = parseInt(prompt("Write second digit: "));
// let number3 = parseInt(prompt("Write third digit: "));


// console.log(getNumber(number1, number2, number3));


//Detyra4

// function calculateRectangleArea(width, height = width) {
//     let result = width * height;
//     return (result);
// }

// console.log(calculateRectangleArea(2, 3));

//Detyra5

// function checkIfPerfect(number) {
//     let sum = 0;
//     for (let i = 1; i < number; i++) {
//         if (number % i == 0) {
//             sum = sum + i;
//         }
//     }
//     return sum == number ? true : false;
// }

// console.log(checkIfPerfect(parseInt(prompt("Write a number:"))));


//Detyra6

// function printPerfectNumbers(n1, n2) {
//     while (n1 <= n2) {
//         if (checkIfPerfect(n1) == true) {
//             console.log(n1);
//         }
//         n1++;
//     }
// }

// n1 = parseInt(prompt("Write first number: "));
// n2 = parseInt(prompt("Write second number: "));
// printPerfectNumbers(n1, n2);

//Detyra7

// function printTime(hour, minutes, seconds) {
//     if (Number.isNaN(seconds))
//         return hour + ":" + minutes + ":00";
//     else
//         return hour + ":" + minutes + ":" + seconds;
// }

// hour = parseInt(prompt("Write hour: "));
// minutes = parseInt(prompt("Write minutes: "));
// seconds = parseInt(prompt("Write seconds: "));

// console.log(printTime(hour, minutes, seconds));

//Detyra8

// function getSeconds(hour, minutes, seconds) {
//     let h = hour * 3600;
//     let min = minutes * 60;
//     let result = parseInt(h) + parseInt(min) + seconds;
//     return result;
// }


// hour = parseInt(prompt("Write hour: "));
// minutes = parseInt(prompt("Write minutes: "));
// seconds = parseInt(prompt("Write seconds: "));

// console.log(getSeconds(hour, minutes, seconds));

//Detyra9

// function getTime(seconds) {
//     let h = parseInt(seconds / 3600);
//     let min = parseInt((seconds % 3600) / 60);
//     let sec = (seconds % 3600) % 60;
//     let result = h + ":" + min + ":" + sec;
//     return result;
// }

// seconds = parseInt(prompt("Write seconds: "));

// console.log(getTime(seconds));



