import { log } from "console";
import inquirer from "inquirer";
// For User Input



let userInput = await inquirer.prompt([{
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

var previousTransection: number[] = [] // Stores The previous Transections

async function performTransections() {

    let userInput1 = await inquirer.prompt({
        type: "list",
        name: "transectionOptions",
        message: "Select the Option you want to perform!",
        choices: ["Check Account Balance", "Cash WithDrawl", "Check your Previous Transections"],
        validate: (ans) => {
            if (!ans) {
                return "Please Select The Option!";
            }
            return true
        }
    }
    )

    if (userInput1.transectionOptions == "Check Account Balance") {
        var accountBalance: number = 100;
        console.log("WELCOME BACK! Your Account Balance is ", accountBalance);
        let furtherOptions = await inquirer.prompt([{
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

        let furtherOptions = await inquirer.prompt([{
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
    } else if (userInput1.transectionOptions == "Check your Previous Transections") {

        for (let i = 0; i < previousTransection.length; i++) {
            console.log("Your previous Transection are: ", previousTransection[i])

        }
        let furtherOptions = await inquirer.prompt([{
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

}
performTransections()