import inquirer from "inquirer";
// For User Input
let userInput = await inquirer.prompt([{
        type: "input",
        name: "accountNumber",
        message: "Enter Your 16 Digit Account Number!",
        validate: (ans) => {
            if (!ans) {
                return "Please Enter your 16 digit Acoount number!";
            }
            return true;
        },
    },
    {
        type: "password",
        name: "accountPassword",
        message: "Enter Your Pin Code!",
        validate: (ans) => {
            if (!ans) {
                return "Please Enter your 4 Digit Pin Code!";
            }
            return true;
        }
    },
    {
        type: "list",
        name: "transectionOptions",
        message: "Select the Option you want to perform!",
        choices: ["Check Account Balance", "Cash WithDrawl", "Check your Previous Transections"],
        validate: (ans) => {
            if (!ans) {
                return "Please Select The Option!";
            }
            return true;
        }
    }
]);
let previousTransection = []; // Stores The previous Transections
if (userInput.transectionOptions == "Check Account Balance") {
    console.log("Your Account Balance is 10,000");
}
else if (userInput.transectionOptions == "Cash WithDrawl") {
    let cash = await inquirer.prompt({
        type: "input",
        name: "amountWithdrawl",
        message: "Enter The Amount",
        validate: (input) => {
            if (!input) {
                return "Enter The Amount please!";
            }
            return true;
        }
    });
    previousTransection.push(cash.amountWithdrawl);
    console.log(cash.amountWithdrawl, "Has Been Successfully WithDrawl!");
    let furtherOptions = await inquirer.prompt([{
            type: "list",
            name: "endTransection",
            message: "Do You Want",
            choices: ["End Transection ?", "Perform Any Other Transection!"],
            validate: (ans) => {
                if (!ans) {
                    return "Select The options";
                }
                return true;
            }
        }]);
    if (furtherOptions.endTransection == "End Transection ?") {
        console.log("THANK YOU! Your Transection is Ended!");
    }
    else {
        userInput;
    }
}
else if (userInput.transectionOptions == "Check your Previous Transections") {
    for (let i = 0; i < previousTransection.length; i++) {
        console.log("Your previous Transection are ", previousTransection[i]);
    }
}
