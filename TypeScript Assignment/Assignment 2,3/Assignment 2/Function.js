"use strict";
// Write ts program that’s calculate sum of two numbers using function?
function sum(num1 = 30, num2 = 40) {
    var result = num1 + num2;
    console.log("The sum of two number is ", result);
}
sum();
// Write ts program that’s calculate sum of two numbers 20,30 using function? And add 5 number in result after calculation?
function sum2(num1, num2) {
    var result = num1 + num2;
    return result;
}
sum(30, 40);
var a = sum2(30, 40);
a = a + 5;
console.log(a);
// Write ts program that’s calculate sum of two numbers using arrow function?
var Add = () => {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
};
Add();
// Write a program by using function to convert the temperature from Celsius to Fahrenheit and vice verse?
function c_to_f() {
    var celsius_temp = 30;
    var Celsius_to_fah = (celsius_temp * 9 / 5) + 32;
    console.log("The Celcius tem in Fahrenhiet is: ", Celsius_to_fah);
}
c_to_f();
function f_to_c() {
    var Fahrenheit_temp = 30;
    var Fahrenheit_t0_celcius = (Fahrenheit_temp - 32) * 5 / 9;
    console.log("The Fahrenhiet  tem in Celcius is: ", Fahrenheit_t0_celcius);
}
f_to_c();
// Write a program by using function that calculates the percentage.
function percentage(num) {
    var total_marks = 1100;
    var percent = (num / total_marks) * 100;
    console.log("Your percentage is ", percent.toFixed(4));
}
percentage(816);
