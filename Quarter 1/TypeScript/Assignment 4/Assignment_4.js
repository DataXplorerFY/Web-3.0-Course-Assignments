"use strict";
// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
// function arr(array: any, index: number, value: any) {
//     if (index >= 0 && index <= array.length) {
//         array.splice(index, 0, value);
//     } else {
//         console.log("Invalid index The value is not inserted");
//     }
//     return array;
// }
// // var modified_array=arr([1,2,3,4],3,8);
// console.log(arr([1, 2, 3, 4], 3, 8));
// var origional_array=[1,2,3,4];
// var new_index=3;
// var new_value=8;
// var modified_array=arr(origional_array,new_index,new_value);
// console.log("modified Array ", modified_array);
// function arr<T>(array:T, index:number, value:T){
//     if(index>=0 && index<=array.length){
//         array.splice(index,0,value);
//     }else{
//     console.log("Invalid index The value is not inserted");
//     }
//     return array;
// }
// function modified<T>(arr: T[], index: number, value: T): T[] {
//     if (index < 0 || index > arr.length) {
//         console.log("index out of range");
//         return arr
//     }
//     arr.splice(index, 0, value);
//     return arr;
// }
// let modefiied_array = modified(["jiya", "ahmed", "arooj", "98"], 1, "bisma");
// console.log(modefiied_array);
// var todays_id: any = [1, 2, 3, 4];
// var len: number = todays_id.length
// console.log(len);
// if (len % 2 == 0) {
//     todays_id.splice(Math.round(len) / 2, 2);
//     console.log(todays_id);
// } else {
//     todays_id.splice(Math.round(len) / 2, 1);
//     console.log(todays_id);
// }
// var todos: string[] = ["arooj", "ali", "areeba", "Aline", "Aiza", "Rameen"];
// if (todos.length % 2 == 0) {
//     var a = Math.floor(todos.length / 2)
//     todos.splice(a-1, 2);
//     console.log("the number is even", todos);
// }
// else if (todos.length % 2 != 0) {
//     var b = Math.floor(todos.length / 2)
//     todos.splice(b-1, 1)
//     console.log("the number is odd", todos);
// }
// else {
//     console.log("invalid input")
// }
// var countries: string[] = ["Pakistan", "India", "China", "South korea", "England", "UK", "Germany"];
// var Another_country: string = "Newzealand";
// if (countries.length % 2 == 0) {
//     countries.splice((countries.length / 2) + 1, 0, Another_country);
//     console.log("after Addition in the center of array is: ", countries);
// } else if (countries.length % 2 != 0) {
//     var a: number = Math.floor(countries.length / 2);
//     countries.splice(a, 1);
//     console.log("after subtraction in the center of array is: ", countries);
// }
// Implement a simple shopping cart program using an array. Create
// functions to add items, remove items, and update quantities using
// the splice method. Print the cart's contents after each operation
// var shopping_cart: string[] = [];
// function addItems(items:string) {
//     shopping_cart.push(items);
//     console.log(`Added ${items} in shopping cart`);
//     console.log(shopping_cart);
// }
// function removeItem(items:string){
//     const index=shopping_cart.indexOf(items);
//     if(index !== -1){
//         shopping_cart.splice(index,1);
//         console.log(`removed ${items} in shopping cart`);
//     }else{
//         console.log(`${items} is not in the cart.`);
//     }
//     console.log(shopping_cart)
// }
// function updateQuantity(items:string, quantity:number){
//     const index = shopping_cart.indexOf(items);
//     if (index !== -1) {
//         shopping_cart.splice(index, 1); // Remove the item
//         for (let i = 0; i < quantity; i++) {
//             shopping_cart.push(items); // Add the item back with the updated quantity
//         }
//         console.log(`Updated quantity of ${items} to ${quantity}.`);
//     } else {
//         console.log(`${items} is not in the cart.`);
//     }
//     console.log(shopping_cart);
// }
// addItems("watch");
// addItems("shoes");
// addItems("shirts");
// addItems("Belt");
// addItems("Perfume");
// removeItem("shoes");
// updateQuantity("watch", 3);
// const medicine: string[] = [];
// function add(medication: string, quantity: number) {
//     medicine.push(medication);
//     for (var i = 0; i < quantity - 1; i++) {
//         medicine.push(medication);
//     }
//     console.log(`Added ${medication} in the medicine`);
//     console.log(medicine);
// }
// function removeItems(medication: string, quantity: number = 0) {
//     const index = medicine.indexOf(medication);
//     if (index !== -1) {
//         medicine.splice(index, 1);
//         console.log(`Removed ${medication} from the medicine`);
//         for (var i = 0; i < quantity; i++) {
//             medicine.push(medication);
//         }
//         console.log(medicine);
//     } else {
//         console.log("Item is not in the medicine");
//     }
// }
// add("disprin", 3);
// add("ponstan", 2);
// removeItems("disprin", 1);
// Write a program that uses a while loop to print the first 25 integers.
// var num:number=1;
// while(num<=25){
//     console.log(num);
//     num++
// }
// Write a program that uses a while loop to print the first 10 even numbers.
// var num2:number=1;
// while(num2<=20){
//     if(num2%2==0){
//         console.log(num2);
//     }
//     num2++
// }
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
var num = 3;
for (var i = 0; i < num; i++) {
    var fact = 1;
    fact = fact * 1;
    fact++;
    console.log(fact);
}
