//  ==========================question No 18 =======================
// let positiveNumCount = 0;
// let askNum = +prompt("give a number...");
// if(askNum>0){
//     positiveNumCount++
// }
// for(let i =0; i<4; i++){
//     askNum = +prompt("give a number...");
//     if(askNum>0) positiveNumCount++
// }
// console.log(positiveNumCount)


// ---------------------------------------------------------------



//  ==========================question No 19  =======================
//  ===================== method 1 ----------------------
// let Balance = 1000;
// let flag = false;
// let counter = 0;
// while(Balance>0 && counter!==3){
    //     let withdrawalAmount = +prompt("Enter Withdrawal amount");
    //     counter++
    //     if(withdrawalAmount <=Balance) Balance -=withdrawalAmount;
    //     else{
        //         flag = true;
        //         break
        //     }
        
        // }
// if (flag === true){
    //     console.log("insufficient balance")
// }
// console.log(`Balance : ${Balance}`)



//  ===================== method 2 ----------------------



// let balance = 1000;
// for(let i = 0; i<3; i++){
//     let withdraw = +prompt("Enter withdraw amount..");
//     if(withdraw>balance){
//         console.log(`sorry your account balance is ${balance}.Rs and you want to withdraw ${withdraw}.Rs `);
//         break;
//     }
//     else{
    //         balance -=withdraw;
    //         if(balance<=0){
        //             console.log("soory you  withdraw all your amount")
        //             break
//         }

//     }
// }
// if(balance>0){
    //     console.log(`Remaining Balance : ${balance}`)
    // }


//  ===================== method 3 ----------------------
let balance = 1000;

for (let i = 0; i < 3; i++) {
  const attemptsLeft = 3 - i;
  const raw = prompt(`Enter withdrawal amount (attempts left: ${attemptsLeft}):`);
  if (raw === null) { // user pressed cancel
    console.log("Transaction cancelled.");
    break;
  }

  const withdraw = Number(raw);

  // validation: must be a positive number
  if (!Number.isFinite(withdraw) || withdraw <= 0) {
    console.log("Please enter a valid positive number.");
    i--; // don't count invalid input as one of the 3 withdrawals
    continue;
  }

  if (withdraw > balance) {
    console.log(`Sorry — your account balance is ₹${balance} and you tried to withdraw ₹${withdraw}. Insufficient balance.`);
    break;
  }

  balance -= withdraw;
  console.log(`Withdrawn: ₹${withdraw}. Remaining balance: ₹${balance}.`);

  if (balance === 0) {
    console.log("You have withdrawn all your money.");
    break;
  }
}

console.log(`Final balance: ₹${balance}`);







// ---------------------------------------------------------------