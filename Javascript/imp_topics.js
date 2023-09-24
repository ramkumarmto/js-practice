
//! memoisation 
// memoisation is a technique of caching in javascript
// giving result based on previous result
// not redering same function again and again instead of that have to store in somewhere in memory, and use whenever required.
// it reduces time of execution and optimize the code
let sum = 0;
const addNumbersUpTo = (n) =>{
    for( let i =0; i<= n ; i++){
        sum = sum + i;
    }
    return sum;

}

// console.time();
// console.log(addNumbersUpTo(5000))
// console.timeEnd();


const memoizeFunc = (fn)=>{
    let cache = {} // { "5000" : __; "5001" : __ }

    return function(arg){
        if(arg in cache){
            console.log(" in cache", cache[arg])
            return cache[arg];
        }else{
            console.log("not in cache");
            let result = fn(arg);
            cache[arg] = result;
            return result;

        }

    }

}
console.time()
const result = memoizeFunc(addNumbersUpTo);
console.log(result(5000))
console.timeEnd()

console.time()
console.log(result(5000))
console.timeEnd()

//! event bubbling, capturing, event propagation, stop propagation

// event propagated by default in first from parent to child and when event is triggered then from child to parent
// what is event.preventdefault()
// using this we can stop default behaviour of event or you could say of element

/*
const divEle = document.querySelector('div')
const btn = document.querySelector('#btn');
const body = document.querySelector('body')

divEle.style.border = "2px solid green";
divEle.addEventListener("click", (event)=>{
    console.log("div clicked!");
    divEle.style.backgroundColor = "tomato";
   
})

btn.addEventListener('click', (event)=>{
// event.stopPropagation()
    console.log('btn clicked!')
})

body.addEventListener('click', ()=>{
    console.log("body triggerd!")
}) 
*/


// debouncing, throttling



