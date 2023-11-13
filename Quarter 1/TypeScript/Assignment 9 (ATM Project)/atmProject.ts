import { log } from "console";
import inquirer from "inquirer";
// For User Input (Account number and password)
let userInput: { accountnumber: number, accountPassword: number } = await inquirer.prompt([{
    type: "input",
    name: "accountNumber",
    message: "Enter Your 16 Digit Account Number!",
    validate: (ans) => {
        if (!ans || ans.length != 16) {
            return "Please Enter your 16 digit Acoount number!"
        }
        return true
    },

},
{
    type: "password",
    name: "accountPassword",
    message: "Enter Your Pin Code!",
    validate: (ans) => {
        if (!ans || ans.length != 4) {
            return "Please Enter your 4 Digit Pin Code!";
        }
        return true
    }
},


])
console.log("THANK YOU FOR LOGGING IN AGAIN")

var accountBalance: number = 100;

// balance update functionality
async function updateBalance() {
    let balanceUpdation: { balanceUpdate: number } = await inquirer.prompt({
        type: "input",
        name: "balanceUpdate",
        message: "Enter the Amount you want to add in your account balance!",
        validate: (ans) => {
            if (!ans) {
                return "Please Enter an amount!";
            }
            return true;
        }
    });

    accountBalance = accountBalance + parseFloat(balanceUpdation.balanceUpdate.toString());
    console.log("Your Updated Balance is ", accountBalance);
}

// furthur options functionality
async function furtherOpt() {
    let furtherOptions: { endTransection: string } = await inquirer.prompt([{
        type: "list",
        name: "endTransection",
        message: "Do You Want to Perfom Another Transection ?",
        choices: ["YES!", "NO"],
        validate: (ans) => {
            if (!ans) {
                return "Select The options"
            }
            return true
        }
    }])

    if (furtherOptions.endTransection == "NO") {
        console.log("THANK YOU! Your Transection is Ended!")
    } else {
        await performTransections()
    }
}


// Stores The previous Transections
var previousTransection: number[] = [] 


async function performTransections() {

    let userInput1: { transectionOptions: string } = await inquirer.prompt({
        type: "list",
        name: "transectionOptions",
        message: "Select the Option you want to perform!",
        choices: ["Check Account Balance", "Cash WithDrawl", "Check your Previous Transections", "Add Balance"],
        validate: (ans) => {
            if (!ans) {
                return "Please Select The Option!";
            }
            return true
        }
    }
    )

    if (userInput1.transectionOptions == "Check Account Balance") {

        console.log("WELCOME BACK! Your Account Balance is ", accountBalance);
        furtherOpt();



    } else if (userInput1.transectionOptions == "Cash WithDrawl") {
        let cash: { amountWithdrawl: number } = await inquirer.prompt({
            type: "input",
            name: "amountWithdrawl",
            message: "Enter The Amount",
            validate: (input) => {
                if (!input) {
                    return "Enter The Amount please!";
                } else if (input > accountBalance) {
                    return "Insufficient Funds: Your withdrawal amount exceeds your available balance.";

                }
                return true
            }
        })

        previousTransection.push(cash.amountWithdrawl);

        console.log(cash.amountWithdrawl, "Has Been Successfully WithDrawl!");
        accountBalance = accountBalance - cash.amountWithdrawl
        console.log("Your remaining balance is ", accountBalance);


        furtherOpt();

    } else if (userInput1.transectionOptions == "Check your Previous Transections") {

        for (let i = 0; i < previousTransection.length; i++) {
            console.log("Your previous Transection are: ", previousTransection[i])

        }
        furtherOpt()

    } else if (userInput1.transectionOptions == "Add Balance") {
        await updateBalance()
        furtherOpt()


    }

}
performTransections()