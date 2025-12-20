// ==================    Level Onr pure beginner   =======================

let age = prompt("enter your age ");
if(age===null){
    console.error('you cancelled')
}
else{
    if(age.trim()===""){
        console.error("please write age in number")
    }
    age = Number(age.trim());
    if(isNaN(age)){
        console.error("bahi dank ka number dain")
    }
    else{
       if(age>=18){
        console.log('you can vote ')
       }
       if(age<18 && age!==0){
        console.log("sorry you are not eligible for voting")
       }
    }
}
