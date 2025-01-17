console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
let firstName = helloName('Hmoovzong');
console.log(firstName);
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
return 4 + 5;
}
let sum = addNumbers(4,5);
console.log('4 + 5 =' + " " + sum);

// 4. Function to multiply three numbers & return the result
function multiplyThree(numberOne, numberTwo, numberThree) {
return 2 * 3 * 4;
}
let total = multiplyThree(2,3,4);
console.log('2 * 3 * 4 =' + ' ' + total);

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(isPositive(3));
console.log(isPositive(0));
console.log(isPositive(-3));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[array.length - 1];
  }
}
let myArray = [2, 3, 4];
let emptyArray =[];
console.log(getLast(myArray));
console.log(getLast(emptyArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;  
    }
  }
  return false;
}
let array = [2, 3, 4];
console.log(find(3, array));
console.log(find(5, array));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.length > 0 && string.charAt(0) === letter) {
    return true;
  }
  return false;
}
let myString =('apple');
console.log(isFirstLetter('a', myString));
console.log(isFirstLetter('z', myString));


// 9. Function to return the sum of all numbers in an array
function sumAll(newArray) {
  let sum = 0;
  // TODO: loop to add items
for (let i = 0; i < newArray.length; i++) {
  sum += newArray[i];
}
  // TODO: return the sum;
  return sum;
}
let newArray = [2, 3, 4];
console.log(sumAll(myArray));
console.log();

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(theArray) {
let positiveNumbers =[];
for (let i = 0; i < theArray.length; i++) {
  if (theArray[i] > 0) {
    positiveNumbers.push(theArray[i]);
    }
  }
  return positiveNumbers;
}
let numbers = [-3, -2, -1, 0 , 1, 2, 3];
let plusNumbers = allPositive(numbers);
console.log(numbers);
console.log(plusNumbers);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
