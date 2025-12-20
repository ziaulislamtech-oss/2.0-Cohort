function addNums(...numbers){
    let sum = 0; 
    console.log(numbers);
  numbers.forEach(function(val){
    sum=sum+val;
  })
  console.log(sum)
}
addNums(1,2,3,4,5,6)
setTimeout(function(){
    console.log(`hello after 2 secon`)
},2000)