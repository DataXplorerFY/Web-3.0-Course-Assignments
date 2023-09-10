"use strict";
// Q2: Personal Message: Store a person’s name in a variable, and print a message to
// that person. Your message should be simple, such as, “Hello Eric, would you like
// to learn some Python today?”
var Name = "Farhan";
console.log("Hello " + Name + " would you like to learn some Python today?");
function Greetings(Name) {
    console.log("Hello " + Name + " would you like to learn some Python today?");
}
Greetings("farhan,Ali");
//Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
function titleCase(Name) {
    console.log("Name in upper case: " + Name.toUpperCase());
    console.log("Name in lower case: " + Name.toLowerCase());
    const TitleCase = Name
        .split(' ')
        .map((words) => words.charAt(0).toUpperCase() + words.slice(1).toLowerCase())
        .join(' ');
    console.log(TitleCase);
}
titleCase("farhan Ali");
// Q3 Famous Quote: Find a quote from a famous person you admire. Print the quote
// and the name of its author. Your output should look something like the following,
// including the quotation marks:
var Qoute = '"A person who never made a mistake never tried anything new" ';
console.log("Albert Einstein once said, ", Qoute);
// Q5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name
// in a variable called famous_person. Then compose your message and store it in a
// new variable called message. Print your message.
var personName = "David";
var message = '"Eyes never lies"';
console.log(personName, "once Said, ", message);
// Q6 Stripping Names: Store a person’s name, and include some whitespace characters
// at the beginning and end of the name. Make sure you use each character
// combination, "\t" and "\n", at least once. Print the name once, so the whitespace
// around the name is displayed. Then print the name after striping the white
// spaces.
var stripName = "\tFarhan\n\tAli";
console.log(stripName);
const NewName = stripName.trim();
console.log(NewName);
// Q7 Number Eight: Write addition, subtraction, multiplication, and division operations
// that each result in the number 8. Be sure to enclose your operations in print
// statements to see the results.
// it will print sum, sub, mult, div, of two numberrs
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Q8 Favorite Number: Store your favorite number in a variable. Then, using that
// variable, create a message that reveals your favorite number. Print that message.
var FavNum = 5;
var message = "Your Favourite number is";
// it will combine both of above two variables and print message
console.log(message, " ", FavNum);
// Q11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var Names = ["Shaheen", "Shahdab", "Shoaib Malik", "Haris Rauf", "Naseem Shah"];
console.log(Names);
for (let i = 0; i < Names.length; i++) {
    console.log(Names[i]);
}
// Q12 Greetings: Start with the array you used in Exercise 11, but instead of just printing
// each person’s name, print a message to them. The text of each message should
// be the same, but each message should be personalized with the person’s name.
var Names = ["Ali", "Asad", "Alina", "Ayesha"];
console.log(Names);
for (let i = 0; i < Names.length; i++) {
    console.log(Names[i], "Good Evening");
}
// 13. Your Own Array: Think of your favorite mode of transportation, such as a
// motorcycle or a car, and make a list that stores several examples. Use your list to
// print a series of statements about these items, such as “I would like to own a
// Honda motorcycle.”
var transportation = ["BMW", "YBR", "Heavy Bike"];
console.log(Names);
for (let i = 0; i < transportation.length; i++) {
    // console.log(Names[i],"Good Evening");
    if (transportation[i] == "BMW") {
        console.log(transportation[i], "i like BMW");
    }
    else if (transportation[i] == "YBR") {
        console.log(transportation[i], "fav bike");
    }
    else if (transportation[i] == "Heavy Bike") {
        console.log(transportation[i], "Most fav bike");
    }
}
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would
// you invite? Make a list that includes at least three people you’d like to invite to
// dinner. Then use your list to print a message to each person, inviting them to
// dinner.
var Guest = ["Javeria", "Talha", "Hannan", "sidra"];
console.log(Names);
Guest.splice(3, 1, "Faiza");
for (let i = 0; i < Guest.length; i++) {
    // console.log(Names[i],"Good Evening");
    if (Guest[i] == "Javeria") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
    else if (Guest[i] == "Talha") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
    else if (Guest[i] == "Hannan") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
    else if (Guest[i] == "Faiza") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
}
console.log("Sidra cannot join us in the party");
// Q16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// a. Start with your program from Exercise 15. Add a print statement to the end of
// your program informing people that you found a bigger dinner table.
var Guest = ["Javeria", "Talha", "Hannan", "sidra"];
console.log(Names);
Guest.splice(3, 1, "Faiza");
// b. Add one new guest to the beginning of your array.
Guest.unshift("Waleed");
// c. Add one new guest to the middle of your array. • Use append() to add one new
// guest to the end of your list. • Print a new set of invitation messages, one for
// each person in your list.
Guest.splice(Guest.length / 2 + 1, 0, "Afridi");
// • Use append() to add one new guest to the end of your list. •
Guest.push("Razaq");
for (let i = 0; i < Guest.length; i++) {
    // console.log(Names[i],"Good Evening");
    if (Guest[i] == "Javeria") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
    else if (Guest[i] == "Talha") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
    else if (Guest[i] == "Hannan") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
    else if (Guest[i] == "Faiza") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
    else if (Guest[i] == "Waleed") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
    else if (Guest[i] == "Afridi") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
    else if (Guest[i] == "Razaq") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
}
console.log("Sidra cannot join us in the party");
// a. Start with your program from Exercise 15. Add a print statement to the end of
// your program informing people that you found a bigger dinner table.
console.log("We found a bigger table so we will invite more mehmaan");
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var Guest = ["Javeria", "Talha", "Hannan", "sidra"];
console.log(Names);
Guest.splice(3, 1, "Faiza");
Guest.unshift("Waleed");
Guest.splice(Guest.length / 2 + 1, 0, "Afridi");
for (let i = 0; i < Guest.length; i++) {
    if (Guest[i] == "Javeria") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
    else if (Guest[i] == "Talha") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
    else if (Guest[i] == "Hannan") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
    else if (Guest[i] == "Faiza") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
    else if (Guest[i] == "Waleed") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
    else if (Guest[i] == "Afridi") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }
}
console.log("Sidra cannot join us in the party");
console.log("We found a bigger table so we will invite more mehmaan");
// 17(a). Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("you can invite only two people for dinner.");
// 17(b). Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
var Guest1 = ["Javeria", "Talha", "Hannan", "sidra"];
while (Guest1.length > 2) {
    var Final = Guest1.pop();
    console.log("you’re sorry you can’t invite them to dinner.", Final);
}
// 17(c). Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0; i < Guest1.length; i++) {
    console.log(Guest1[i], "You are still invited");
}
// 17(d). Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
for (let i = 0; i <= Guest1.length; i++) {
    Guest1.pop();
}
console.log(Guest1);
// 18. Seeing the World: Think of at least five places in the world you’d like to visit
// 18(a) Store the locations in a array. Make sure the array is not in alphabetical order.
var favLocations = ["a", "e", "t", "c", "f"];
// 18(b). Print your array in its original order.
console.log("Array in its origional order is: ", favLocations);
// 18(c). Print your array in alphabetical order without modifying the actual list.
var copyArray = [...favLocations]; // it will make an copy of array favlocations
copyArray.sort();
console.log(copyArray);
// 18(d). Show that your array is still in its original order by printing it.
console.log(favLocations);
// 18(e). Print your array in reverse alphabetical order without changing the order of the original list.
var copyArray1 = [...favLocations]; // it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);
// 18(f). Show that your array is still in its original order by printing it again
console.log("18(f) origional", favLocations);
// 18(g). Reverse the order of your list. Print the array to show that its order has changed.
var copyArray1 = [...favLocations]; // it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);
// 18(h). Reverse the order of your list again. Print the list to show it’s back to its original order.
var copyArray1 = [...favLocations]; // it will make an copy of array favlocations
copyArray1.sort();
console.log(copyArray1);
// 18(i). Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var copyArray1 = [...favLocations]; // it will make an copy of array favlocations
copyArray1.sort();
console.log(copyArray1);
// 18(j). Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var copyArray1 = [...favLocations]; // it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var Dinner = ["Ali", "fatima", "Ahmed"];
var Maxpeople = 0;
for (let i = 0; i < Dinner.length; i++) {
    Maxpeople = Maxpeople + i;
}
console.log("Totall nuber of people you invited are ", Maxpeople);
// 20. Think of something you could store in a array. For example, you could make a list
// of mountains, rivers, countries, cities, languages, or anything else you’d like. Write
// a program that creates a list containing these items.
var Arr = ["Python", "Farhan", "Nokia", "Open Ai", "Meta"];
console.log("List of items");
console.log(".............");
var Arr_1 = Arr.map((items, index) => {
    console.log((index + 1) + ". " + items);
});
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var car = {
    model: 2020,
    name: "BMW",
    color: "Black"
};
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program
var ErrorIndex = ["Farhan", "Leo", "AI", "Specialist"];
ErrorIndex.splice(1, 0, "DataScience");
console.log(ErrorIndex);
console.log(ErrorIndex[10]); // it will cause an error
// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// a. Look closely at your results, and make sure you understand why each line evaluates to True or False.
// Example 1 test for equality
let num = 42;
console.log("Is number == 42? I predict True.");
console.log(num == 42);
// Example 2  test for enequality
let fruit = "banana";
console.log("is fruit is not equal to apple? i pridict the true");
console.log(fruit != "Apple");
// Example 3  Numeric comparison
let num1 = 20;
console.log("is number<30? i pridecit the true");
console.log(num1 < 30);
// Example 4  weekend test
let day = "sunday";
console.log("is it sunday? i pridict true");
console.log(day == "sunday");
// Example 5  weekend test
let year = "September";
console.log("is it September? i pridict true");
console.log(year == "September");
// Example 6  logical
let isweekend = true;
let hasPlane = false;
console.log("today i have a plan i pridict false");
console.log(isweekend && hasPlane);
// Example 7  logical
let isRainyDay = true;
console.log("it is raining ? i pridict false ");
console.log(!isRainyDay);
// Example 8  logical
let isFeePaid = false;
console.log(" fee is paid ? i pridict false ");
console.log(isFeePaid);
// Example 9 logical operators
let isNameFarhan = true;
let isAge26 = true;
console.log("my age is 26? i pridict false");
console.log(!isAge26);
// Example 10 logical operators
let uni = true;
console.log("i didnt go to uni i prodict false");
console.log(!uni);
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// a. Tests for equality and inequality with strings
// Equality
let equality = "Leo";
console.log("is leo==leo? i pridict true");
console.log(equality == "Leo");
// inequality
let equality1 = "Leo";
console.log("is leo==leo? i pridict true");
console.log(equality1 == "leo");
// b. Tests using the lower case function
let lowerCase = "farhan";
let isLowerCase = false;
console.log("it is lower case? i predict true");
console.log(lowerCase.toLowerCase() == "farhan");
// c. Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let a = 10;
let b = 20;
console.log("start", a == b);
console.log(a != b);
console.log(a >= b && a <= b);
console.log(a >= b || a <= b);
console.log(a <= b);
console.log("............");
// d. Tests using "and" and "or" operators
let c = 20;
let d = 30;
console.log(c == d && c < d);
console.log(c == d || c < d);
console.log("*****");
// e. Test whether an item is in a array
var arr2 = ["Chocolate", "Sandwich", "Pizza", "burger"];
if (arr2.includes("Chocolate")) {
    console.log("Chocolate");
}
else {
    console.log("item not include");
}
// f. Test whether an item is not in a array
var arr3 = ["Chocolate", "Sandwich", "Pizza", "burger"];
if (arr3.includes("fries")) {
    console.log("Chocolate");
}
else {
    console.log("item not include");
}
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
var alien_color = ["green", "yellow", "red"];
// a. Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let color = alien_color.includes("green");
if (color) {
    console.log("Player just earned 5 points");
}
//b. Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
if (color) {
    console.log("Test is pass");
    console.log(color == true);
}
else {
    console.log(false);
}
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
var alien_color2 = ["green", "yellow", "red"];
// a. If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let color2 = alien_color2.includes("Green");
if (color2) {
    console.log("player just earned 5 points for shooting the alien.");
    // b. If the alien’s color isn’t green, print a statement that the player just earned 10 points. 
}
else {
    console.log("player just earned 10 points.");
}
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
var alien_color3 = ["green", "yellow", "red"];
//a. If the alien is green, print a message that the player earned 5 points.
for (let i = 0; i < alien_color3.length; i++) {
    if (alien_color3[i] == "green") {
        console.log(alien_color3[i], "So, player earned 5 points.");
        //b. If the alien is yellow, print a message that the player earned 10 points.
    }
    else if (alien_color3[i] == "yellow") {
        console.log(alien_color3[i], "So,player earned 10 points.");
        //c. If the alien is red, print a message that the player earned 15 points.
    }
    else if (alien_color3[i] == "red") {
        console.log(alien_color3[i], "So,player earned 15 points.");
    }
}
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
var age = 24;
// a. If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("person is baby");
    // b. If the person is at least 2 years old but less than 4, print a message that the  person is a toddler. 
}
else if (age == 2 || age < 4) {
    console.log("person is a toddler.");
    // c. If the person is at least 4 years old but less than 13, print a message that the person is a kid.   
}
else if (age == 4 || age < 13) {
    console.log("person is a kid");
    // d. If the person is at least 13 years old but less than 20, print a message that the person is a teenager.    
}
else if (age == 13 || age < 20) {
    console.log("person is a teenager.");
    // e. If the person is at least 20 years old but less than 65, print a message that the person is an adult.   
}
else if (age == 20 || age < 65) {
    console.log("person is an adult.");
    // f. If the person is age 65 or older, print a message that the person is an  elder    
}
else if (age >= 65) {
    console.log("person is an  elder");
}
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// a. Make a array of your three favorite fruits and call it favorite_fruits.
var favFruits = ["apple", "banana", "orange", "dates", "kiwi", "grapes"];
// b. Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
favFruits.map((fruit) => {
    if (fruit == "apple") {
        console.log("i like apple it Gives the energy");
    }
    else if (fruit == "banana") {
        console.log("i like banana it Gives the energy ");
    }
    else if (fruit == "orange") {
        console.log("i like orange it Gives the energy ");
    }
    else if (fruit == "dates") {
        console.log("i like dates it Gives the energy ");
    }
    else if (fruit == "kiwi") {
        console.log("i like kiwi it Gives the energy ");
    }
    else {
        console.log("i dont like ");
    }
});
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var usernames = ["admin", "farhan", "ali", "asad"];
// a. If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
usernames.map((Names) => {
    if (Names == "admin") {
        console.log("HELLO ADMIN would you like to see a status report?");
        // b. Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.     
    }
    else if (Names == "farhan") {
        console.log("Hello", Names, "thank you for logging in again.");
    }
    else if (Names == "ali") {
        console.log("Hello", Names, "thank you for logging in again.");
    }
    else if (Names == "asad") {
        console.log("Hello", Names, "thank you for logging in again.");
    }
});
console.log(".........******");
// by using for loop
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log("HELLO ", usernames[i], "would you like to see a status report?");
    }
    else {
        console.log("Hello", usernames[i], "thank you for logging in again.");
    }
}
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
var users = ["Farhan", "Ali", "Asad", "Hassan"];
// a. Remove all of the usernames from your array, and make sure the correct message is printed.
while (users.length > 0) {
    users.pop();
}
if (users.length == 0) {
    console.log("We Need some users!");
}
// b. If the list is empty, print the message We need to find some users!
