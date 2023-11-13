"use strict";
// Write a program that uses filter to remove all negative numbers from an array of numbers
var Array_1 = [1, -2, 3, -4, 5, -6, 7, -8];
var Array1 = Array_1.filter((nums) => {
    return nums > 0;
});
console.log(Array1);
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
var Array_2 = [1, 2, 3, 4, 5];
var Array2 = Array_2.map((values) => {
    return values * 2;
});
console.log(Array2);
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
var Array_3 = ["apple", "banana", "cherry", "date", "grape"];
var Array3 = Array_3.filter((values) => {
    return values.length > 5;
});
console.log(Array3);
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
var Array_4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray4 = Array_4.filter((nums) => {
    return nums % 2 == 0;
});
var Array4_a = newArray4.map((values) => {
    return values ** 2;
});
console.log(Array4_a);
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
var Array_5 = [0, 10, 20, 30, 40];
var Array5 = Array_5.map((value) => {
    let c_to_f = (value * 9 / 5) + 32;
    return c_to_f;
});
console.log("Celcius to Fahrenhiet is: ", Array5);
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers. 
let Array_6 = [3, 6, 9, 12, 15, 18];
let Array6 = Array_6.filter((num) => {
    return num % 2 != 0;
});
let Array6_a = Array6.map((value) => {
    return 2 * value;
});
console.log(Array6_a);
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
var Array_7 = ["Alice", "Bob", "Charlie", "David", "Emily"];
Array_7.forEach((names) => {
    console.log(names + "!");
});
