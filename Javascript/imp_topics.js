
//! memoisation 
// memoisation is a technique of caching in javascript
// giving result based on previous result
// not redering same function again and again instead of that have to store in somewhere in memory, and use whenever required.
// it reduces time of execution and optimize the code
let sum = 0;
const addNumbersUpTo = (n) => {
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;

}

// console.time();
// console.log(addNumbersUpTo(5000))
// console.timeEnd();


const memoizeFunc = (fn) => {
    let cache = {} // { "5000" : __; "5001" : __ }

    return function (arg) {
        if (arg in cache) {
            console.log(" in cache", cache[arg])
            return cache[arg];
        } else {
            console.log("not in cache");
            let result = fn(arg);
            cache[arg] = result;
            return result;

        }

    }

}
// console.time()
// const result = memoizeFunc(addNumbersUpTo);
// console.log(result(5000))
// console.timeEnd()

// console.time()
// console.log(result(5000))
// console.timeEnd()

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
// debouncing is a optimization technique in javascript in which event will be triggered when we stop even triggering for a given time period


//! debouncing
// while type a function should call ( search )
// how to do ?
// make a debouceFun having two args func and time
// what fun // which need to be call after some time

// when should trigger debounceFun ?
// when onKeyUp event will be triggered lets 

function deBounceFunc(fn, delay) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn(...args)
        }, delay);
    }
}
const deBounce = deBounceFunc(search, 1000)

function search(query) {
    console.log(`Seaching... ${query}`)
}

const inputEle = document.querySelector('input');
inputEle.onkeyup = function (event) {
    deBounce(event.target.value)
}

//! throttling
// it is the optimisation technique in which event will be triggered after a centain period of time



// Throttle function
function throttle(func, delay) {
    let lastExecuted = 0;
    
    return function (...args) {
      const now = Date.now();
      
      if (now - lastExecuted >= delay) {
        func(...args);
        lastExecuted = now;
      }
    };
  }
  
  // Example usage
  const throttledScroll = throttle(scrollHandler, 200);
  
  // Function to be throttled (e.g., a scroll event handler)
  function scrollHandler() {
    console.log("Scrolled");
  }
  
  // Event listener (e.g., window scroll event)
  window.addEventListener('scroll', throttledScroll);
  









