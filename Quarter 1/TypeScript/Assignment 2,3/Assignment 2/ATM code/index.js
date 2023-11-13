// var UserInput=prompt("Enter your 16 digit Credit card number!");
// var String=UserInput.toString();
// if(String.length==16){
//     document.write("1) Cash Whithdrawl!<br>");
//     document.write("2) Check Balance!<br>");
//     document.write("3) Deposit Cash!<br>");
//     document.write("4) Balance Inquiry!<br>");
//     document.write("5) Deposite!<br>");
//     var UserInput2=parseInt(prompt("Select the Function you want to perform!"));
//     if(UserInput2===1){
//     var tracsetionMony=parseInt(prompt("Enter the amount you want to withdrawl!"));
//     }
// }else{
//     document.write("Enter 16 digit Correct code!")
// }



var userCreditCard = prompt("Enter your 16-digit Credit card number!");

if (userCreditCard.length === 16 && /^\d+$/.test(userCreditCard)) {
    document.write("1) Cash Withdrawal!<br>");
    document.write("2) Check Balance!<br>");
    document.write("3) Deposit Cash!<br>");
    document.write("4) Balance Inquiry!<br>");
    document.write("5) Deposit!<br>");

    var userInput2 = parseInt(prompt("Select the function you want to perform (enter the corresponding number):"));

    switch (userInput2) {
        case 1:
            var transactionAmount = parseInt(prompt("Enter the amount you want to withdraw:"));
            if (transactionAmount > 0) {
                // Implement withdrawal logic here
                document.write("Withdrawal of $" + transactionAmount + " successful.");
            } else {
                document.write("Invalid withdrawal amount.");
            }
            break;

        // Add cases for other banking functions

        default:
            document.write("Invalid option selected.");
            break;
    }
} else {
    document.write("Enter a valid 16-digit credit card number.");
}

