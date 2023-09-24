
// memoisation 
// memoisation is a technique of caching in javascript
// giving result based on previous result

// event bubbling, capturing, event propagation, stop propagation

// event propagated by default in first from parent to child and when event is triggered then from child to parent
// what is event.preventdefault()
// using this we can stop default behaviour of event or you could say of element

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


// debouncing, throttling



