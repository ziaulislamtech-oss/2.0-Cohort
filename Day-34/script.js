// // ============================Question No & 7=========================
// let age = prompt("Enter your age..");
// if(age === null){
//     console.error("you cancelled it...")
// }
// else{
//     if(age.trim()===""){
//         console.error("please write something...!")
//     }
//     else{
//         Number(age);
//         if(isNaN(age)){
//             console.error("please write a numbers...!")
//         }
//         else{
//             if(age>=18){
//                 console.log("you can vote");
//             }
//             else if(age<0){
//                 console.error("invalid age")
//             }
//             else{
//                 console.error(`sorry with ${age} age you can't vote`)
//             }
//         }
//     }
// }

// //  ---------------------------------------------------------



// // ============================Question No  8=========================

// for(let i =1; i<=10; i++){
//     console.log(`5 X ${i} = ${5*i}`)
// }


// //  ---------------------------------------------------------



// // ============================Question No  9=========================
// let count = 0;
// for(let i =0; i<15; i++){
//     if(i>8){
//          count++
//          console.log(i)
//         }
// }
// console.log(`your count number is ${count}`)


// //  ---------------------------------------------------------

// // ============================Question No  10=========================
// let password = 'ziakhan';
// let userPass = prompt("enter you password");
// if(userPass === null){
//     console.error("you cancled")
// }
// else{
//     if(userPass === password){
//         console.log("loged In")
//     }
//     else{
//         console.error("Wrong Password try again")
//     }
// }

//  ---------------------------------------------------------

// ============================Question No  11=========================
let password2 = 'zia123';
let attempts = 0;
let userPass2 = prompt("Enter your password...");
 attempts++

while(userPass2 !== password2){
     userPass2 = prompt("Enter your password.");
     attempts++;
     if(attempts === 3){
        console.error("attempt limit exceed. Account locked...!");
        break;
     }
}
if(userPass2===password2){
    console.log("Loged In Successfully")
}