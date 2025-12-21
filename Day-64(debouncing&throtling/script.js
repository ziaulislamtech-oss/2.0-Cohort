function debounce(fnc,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(function(){
            fnc(...args);
            // console.log('hey')
        },delay)
    };
}
let searchBar = document.querySelector('#search');
searchBar.addEventListener('input',debounce(function(dets){
    console.log(dets)
},1000)
)