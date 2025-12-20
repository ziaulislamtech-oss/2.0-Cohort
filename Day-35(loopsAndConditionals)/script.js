//  =========================Question NO 12=====================

let YesCounter = 0;
let AskedWrod = 'stop';
let userWord = prompt("please say a word...")
while(AskedWrod!== userWord){
    if(userWord ==="yes" || userWord === "Yes" || userWord ==="YES"){
        YesCounter ++
    }
    userWord = prompt("please say a word...")
}
console.log(`user typed ${YesCounter} times yes`)

//  -------------------------------------------------------------




//  =========================Question NO 12=====================

for(let i =1; i<50; i++){
    if(i%7===0){
        console.log(i)
    }
}



//  =========================Question NO 13=====================
let oddSum = 0
for(let i =1; i<=30; i++){
    if(i%2!==0){
        oddSum = oddSum+i
    }
}
console.log(`sum of odd is ${oddSum}`)



//  -------------------------------------------------------------


//  =========================Question NO 14=====================
let askedNum = +prompt("type  a number");

while(askedNum%2!== 0){
  askedNum = +prompt("type  a number");

}



//  -------------------------------------------------------------
//  -------------------------------------------------------------


//  =========================Question NO 14=====================
let startNum = +prompt("give starting number")
let endNum = +prompt("give ending number");
if(startNum >endNum){
    alert("starting number can't be greater than ending number")
    endNum = +prompt("give ending number");
}
for(let i=startNum; i<=endNum; i++){
    console.log(i)
}


//  -------------------------------------------------------------


//  =========================Question NO 15=====================
let oddCount = 0;
for(let i=1; i<20; i++){
    if(i%2!==0 && oddCount<3){
        oddCount++
        console.log(i)
    }
}

//  ----------------------------------------------------------


//  =========================Question NO 16=====================


let positiveCounter = 0;

for(let i =0; i<5; i++){
    let askedNum1 = prompt("type a number")
    if(askedNum1>0){
        positiveCounter++
    }
}
console.log(`the number of positive numbers are ${positiveCounter}`)

//  ----------------------------------------------------------