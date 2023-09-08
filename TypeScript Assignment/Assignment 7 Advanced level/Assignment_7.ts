// Q2: Personal Message: Store a person’s name in a variable, and print a message to
// that person. Your message should be simple, such as, “Hello Eric, would you like
// to learn some Python today?”

var Name:string="Farhan";
console.log("Hello " + Name  + " would you like to learn some Python today?");

function Greetings(Name:string){
    console.log("Hello " + Name  + " would you like to learn some Python today?");
}

Greetings("Arooj,Javeria")

//Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

function titleCase(Name:string){
    console.log("Name in upper case: " + Name.toUpperCase());
    console.log("Name in lower case: " + Name.toLowerCase());

    const TitleCase:string=Name
        .split(' ')
        .map((words)=> words.charAt(0).toUpperCase() + words.slice(1).toLowerCase())
        .join(' ');
    console.log(TitleCase)
}

titleCase("farhan Ali")

// Q3 Famous Quote: Find a quote from a famous person you admire. Print the quote
// and the name of its author. Your output should look something like the following,
// including the quotation marks:


var Qoute:string='"A person who never made a mistake never tried anything new" ';
console.log("Albert Einstein once said, ", Qoute );

// Q5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name
// in a variable called famous_person. Then compose your message and store it in a
// new variable called message. Print your message.


var personName:string="David";
var message:string='"Eyes never lies"';

console.log(personName,"once Said, ", message);


// Q6 Stripping Names: Store a person’s name, and include some whitespace characters
// at the beginning and end of the name. Make sure you use each character
// combination, "\t" and "\n", at least once. Print the name once, so the whitespace
// around the name is displayed. Then print the name after striping the white
// spaces.


var stripName:string="\tFarhan\n\tAli";
console.log(stripName);

const NewName:string=stripName.trim()
console.log(NewName);

// Q7 Number Eight: Write addition, subtraction, multiplication, and division operations
// that each result in the number 8. Be sure to enclose your operations in print
// statements to see the results.

// it will print sum, sub, mult, div, of two numberrs
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);


// Q8 Favorite Number: Store your favorite number in a variable. Then, using that
// variable, create a message that reveals your favorite number. Print that message.

var FavNum:number=5;
var message:string="Your Favourite number is";
// it will combine both of above two variables and print message
console.log(message," ",FavNum);


// Q11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

var Names:string[]=["Shaheen","Shahdab","Shoaib Malik","Haris Rauf","Naseem Shah"];
console.log(Names);

for(let i=0; i<Names.length; i++){
    console.log(Names[i]);
    
}

// Q12 Greetings: Start with the array you used in Exercise 11, but instead of just printing
// each person’s name, print a message to them. The text of each message should
// be the same, but each message should be personalized with the person’s name.

var Names:string[]=["Ali","Asad","Alina","Ayesha"];
console.log(Names);

for(let i=0; i<Names.length; i++){
    console.log(Names[i],"Good Evening");
    
}

// 13. Your Own Array: Think of your favorite mode of transportation, such as a
// motorcycle or a car, and make a list that stores several examples. Use your list to
// print a series of statements about these items, such as “I would like to own a
// Honda motorcycle.”


var transportation:string[]=["BMW","YBR","Heavy Bike"];
console.log(Names);

for(let i=0; i<transportation.length; i++){
    // console.log(Names[i],"Good Evening");
    if(transportation[i]=="BMW"){
        console.log(transportation[i],"i like BMW");
        
    }else if(transportation[i]=="YBR"){
        console.log(transportation[i],"fav bike");
    }else if(transportation[i]=="Heavy Bike"){
        console.log(transportation[i],"Most fav bike");
    }
}

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would
// you invite? Make a list that includes at least three people you’d like to invite to
// dinner. Then use your list to print a message to each person, inviting them to
// dinner.

var Guest:string[]=["Javeria","Talha","Hannan","sidra"];
console.log(Names);
Guest.splice(3,1,"Faiza")


for(let i=0; i<Guest.length; i++){
    // console.log(Names[i],"Good Evening");

    if(Guest[i]=="Javeria"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
        
    }else if(Guest[i]=="Talha"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }else if(Guest[i]=="Hannan"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }else if(Guest[i]=="Faiza"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }

}
console.log("Sidra cannot join us in the party");


// Q16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// a. Start with your program from Exercise 15. Add a print statement to the end of
// your program informing people that you found a bigger dinner table.

var Guest:string[]=["Javeria","Talha","Hannan","sidra"];
console.log(Names);
Guest.splice(3,1,"Faiza")
// b. Add one new guest to the beginning of your array.
Guest.unshift("Waleed")
// c. Add one new guest to the middle of your array. • Use append() to add one new
// guest to the end of your list. • Print a new set of invitation messages, one for
// each person in your list.
Guest.splice(Guest.length/2+1,0,"Afridi")
// • Use append() to add one new guest to the end of your list. •
Guest.push("Razaq")
for(let i=0; i<Guest.length; i++){
    // console.log(Names[i],"Good Evening");

    if(Guest[i]=="Javeria"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
        
    }else if(Guest[i]=="Talha"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }else if(Guest[i]=="Hannan"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }else if(Guest[i]=="Faiza"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }else if(Guest[i]=="Waleed"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }else if(Guest[i]=="Afridi"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }else if(Guest[i]=="Razaq"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }

}
console.log("Sidra cannot join us in the party");
// a. Start with your program from Exercise 15. Add a print statement to the end of
// your program informing people that you found a bigger dinner table.
console.log("We found a bigger table so we will invite more mehmaan");






// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var Guest:string[]=["Javeria","Talha","Hannan","sidra"];
console.log(Names);
Guest.splice(3,1,"Faiza")

Guest.unshift("Waleed")

Guest.splice(Guest.length/2+1,0,"Afridi")
for(let i=0; i<Guest.length; i++){
    

    if(Guest[i]=="Javeria"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
        
    }else if(Guest[i]=="Talha"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }else if(Guest[i]=="Hannan"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }else if(Guest[i]=="Faiza"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }else if(Guest[i]=="Waleed"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }else if(Guest[i]=="Afridi"){
        console.log(Guest[i],"Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }

}
console.log("Sidra cannot join us in the party");

console.log("We found a bigger table so we will invite more mehmaan");
// 17(a). Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("you can invite only two people for dinner.");



