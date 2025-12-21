// ----------------Debouncing-----------------

// function debounce(fnc,delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(function(){
//             fnc(...args);
//             // console.log('hey')
//         },delay)
//     };
// }
// let searchBar = document.querySelector('#search');
// searchBar.addEventListener('input',debounce(function(dets){
//     console.log(dets)
// },1000)
// )

// --------------------------

//--------------Throtling--------------

function throttle(fnc,delay){
    let timer = 0;
    return function(...args){
        let now = Date.now();
        if(now - timer >= delay){
            timer = now;
            fnc(...args)
        }
    }
}

let searchBar = document.querySelector('#search')
searchBar.addEventListener('input',throttle(function(){
    console.log('ran')
},1000))