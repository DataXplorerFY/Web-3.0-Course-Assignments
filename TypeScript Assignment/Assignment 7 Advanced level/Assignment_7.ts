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

