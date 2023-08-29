// Write a program that uses filter to remove all negative numbers from an array of numbers

var Array_1:number[]=[1,-2,3,-4,5,-6,7,-8];

var Array1:number[]=Array_1.filter((nums:number)=>{
    return nums>0;
})

console.log(Array1);

// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

var Array_2:number[]=[1, 2, 3, 4, 5];
var Array2:number[]=Array_2.map((values:number)=>{
    return values*2;
})
console.log(Array2);

// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

var Array_3:string[]=["apple", "banana", "cherry", "date", "grape"];

var Array3:string[]=Array_3.filter((values:string)=>{
    return values.length>5;
})
console.log(Array3);

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.

var Array_4:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var newArray4:number[]=Array_4.filter((nums:number)=>{
    return nums%2==0;
})

var Array4_a:number[]=newArray4.map((values:number)=>{
    return values**2;
})

console.log(Array4_a);

// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

var Array_5:number[]= [0, 10, 20, 30, 40];

var Array5:number[]=Array_5.map((value:number)=>{
    let c_to_f:number=(value*9/5) + 32;
    return c_to_f;
})

console.log("Celcius to Fahrenhiet is: ",Array5);


// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers. 


let Array_6:number[]=[3, 6, 9, 12, 15, 18];
let Array6:number[]=Array_6.filter((num:number)=>{
    return num%2 != 0;
})

let Array6_a:number[]=Array6.map((value:number)=>{
    return 2*value;
})

console.log(Array6_a);

// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".


var Array_7:string[]=["Alice", "Bob", "Charlie", "David", "Emily"];

Array_7.forEach((names:string)=>{
    console.log(names + "!");
})

