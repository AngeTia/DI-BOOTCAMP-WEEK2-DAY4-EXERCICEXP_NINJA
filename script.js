/*
Exercise 1: Random Number
Instructions
Get a random number between 1 and 100.
Console.log all even numbers from 0 to the random number.
 */

const RandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 100);
    let evenNumber = [];
    let j = 0;
    for (let i = 0; i < randomNumber; i++) {
      if (i % 2 == 0) {
        evenNumber[j] = i;
        j++;
      }
    }
    console.log(evenNumber);
  }
  
  RandomNumber();
  
  /*Exercise 2: Capitalized Letters
  Instructions
  Create a function that takes a string as an argument.
  Have the function return:
  The string but all letters in even indexes should be capitalized.
  The string but all letters in odd indexes should be capitalized.
  Note:
  Index 0 will be considered even.
  The argument of the function should be a lowercase string with no spaces. */
  
  const capitalize = (word) => {
    let tabWord = word.split("");
    let tabWordEven = [];
    let tabWordAdd = [];
    for (let i = 0; i < tabWord.length; i++) {
      if (i % 2 == 0 || i == 0) {
        tabWordEven[i] = tabWord[i].toUpperCase();
      } else {
        tabWordEven[i] = tabWord[i].toLowerCase();
      }
      if (i % 2 == 0 || i == 0) {
        tabWordAdd[i] = tabWord[i].toLowerCase();
      } else {
        tabWordAdd[i] = tabWord[i].toUpperCase();
      }
    }
    tabWord = [tabWordAdd.join(""), tabWordEven.join("")];
    return tabWord;
  }
  
  console.log(capitalize("hello"));
  
  /*Exercise 3 : Is Palindrome?
  Instructions
  Write a JavaScript function that checks whether a string is a palindrome or not.
  Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.*/
  
  const isPalindrome = (word) => {
    let reverseWord = word.split("").reverse().join("");
    if (word == reverseWord) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isPalindrome("madam"));
  
  /*Exercise 4 : Biggest Number
  Instructions
  Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
  Note : This function should work with any array; */
  
  const biggestNumberInArray = (arrayNumber) => {
    let biggestNumber = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
      if (isNaN(arrayNumber[i])) {
        continue;
      }
      if (arrayNumber[i] > biggestNumber) {
        biggestNumber = arrayNumber[i];
      }
    }
    return biggestNumber;
  }
  
  console.log(biggestNumberInArray(["a", 3, "n", 4, 2, "c", 10]));
  
  /*Exercise 5: Unique Elements
  Instructions
  Write a JS function that takes an array and returns a new array with only unique elements. */
  
  const uniqueElements = (array) => {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] != array[i + 1]) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray;
  }
  
  console.log(uniqueElements([1, 2, 3, 3, 3, 3, 4, 5]));