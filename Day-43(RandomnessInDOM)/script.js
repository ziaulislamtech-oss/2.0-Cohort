let arr =[
    {
        team : 'Peshawar Zalmi' ,
        primary : 'yellow',
        secondary : 'black',
        tropies : 1,
        Captin : 'Babar Azam',
    },
    {
        team : 'Multan Sultan',
        primary : 'black , Dark Charcoal',
        secondary : 'black',
        tropies : 1,
        Captin : 'Muhammand Rizwan'
        
    },
    {
        team : 'Lahore Qalandar',
        primary : 'green',
        secondary : 'red',
        tropies : 3,
        Captin : 'Shaheen Shah Afridi'
        
    },
    {
        team : 'Islamabad United',
        primary : 'red',
        secondary : 'yellow , orange',
        tropies  : 3,
        Captin : 'Shadab Khan'
        
    },
    {
        team : 'Quetta Gladiators',
        primary : 'Golder',
        secondary : 'Purple',
        tropies : 1,
        Captin : 'Saud shakeel',
    }
]
// console.log(arr[winnerTeam])
let button  = document.getElementById('guessbtn')
let box =document.querySelector('#box')
let teamName = document.querySelector('#teamName')
let teamCaptin = document.querySelector("#captin");
let teamTropies = document.querySelector("#tropies")

button.addEventListener('click',()=>{
    let num = Math.floor(Math.random()*arr.length)
    let team  = arr[num].team;
    let captin = arr[num].Captin;
    let tropies = arr[num].tropies
    teamName.textContent = team;
    teamCaptin.textContent = `Captin : ${captin}`;
    teamTropies.textContent = `Tropies Won : ${tropies}`

})

