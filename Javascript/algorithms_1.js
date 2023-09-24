
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never to this!
//   // never write any method inside constructor function directly
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
  
// };

// Person.prototype.calcAge = function(){
//   console.log(2023 - this.birthYear)
// }
// Person.prototype.species = 'Homo Sapiens';

// const jonas = new Person('Jonas', 1991);
// const ram = new Person('Ram', 1996);
// // console.log(jonas);
// // console.log( jonas instanceof Person);

// // Person.hey = function () {
// //   console.log('Hey there 👋');
// //   console.log(this);
// // };

// // Person.hey()
// ram.calcAge()
// console.log(ram.species)


// class Person {
//   constructor(fname, lname, birthYear){
//     this.fname = fname;
//     this.lname = lname;
//     this.birthYear = birthYear
    
//     } 
    
//     myage(){
//       console.log(`my current age is ${2023 - this.birthYear}`)
//       return 'Hello'
//   }
// }
// class Student extends Person{
//   constructor(fname,lname, birthYear, degree){
//     super(fname, lname, birthYear)
//     this.fname = fname;
//     this.lname = lname;
//     this.birthYear = birthYear;
//     this.degree = degree;
   
    
//     } 
    
//   studentdetails (){
//     console.log(`I am ${this.fname} ${this.lname} , ${this.birthYear} old and pursuing my ${this.degree}. `)
//   }
  
// }

// const ram = new Person("Ram Kumar", "Mahto", 1996)
// // console.log(ram.myage())
// const raj = new Student("Raj", "Kumar", 1997, "Phd in Computer Science");
// console.log(raj.studentdetails())
// console.log(raj.myage())




// swaping two variables

// let num1 = 23;
// let num2 = 25;

// let swapFlag = num1; // 23
// num1 = num2; // num2 = 23
// num2 = swapFlag; // num2 = 23
// console.log(num1, num2)


// find greatest number among three number
// function isgreater(num1, num2, num3){
//   if(num1 > num2 && num1 > num2) return num1;
//   else if( num2 > num1 && num2 > num3 ) return num2
//     else return num3;
// }
// const greaterNum = isgreater(100,250,291)
// console.log(greaterNum)

// write switch statement for day 
// switch("sunday"){
  
//   case "sunday" : {
//     console.log("it is sunday!");
//     break;
//   }
//   case "monday" : {
//     console.log("it is monday!");
//     break;
//   }
//   case "wednesday" : {
//     console.log("it is wednesday!");
//     break;
//   }
//   default : {
//     console.log("Invalid day name!")
//   } 
// }



// loop problems

//! 1) Print Natural Number from 1 to 20;
//! write a loop method to print add of natural numbers
// var sum = 0
// for(let i=1; i<= 20; i++){
//   sum += i;
// }
// console.log(sum)

//! print only odd or even numbers between 1 to 20


// for ( let i = 1; i <= 20; i++){
//   if(i%2 === 0) console.log(`even nums are ${i}`)
//   else console.log(`odd nums are ${i}`)
  
// }

//! 2) factorial of a number

// function getFactorial(num){
//! loop sol 
  //   let factorialVal = 1;
  // if(num < 0) return "cannot get factorial value of a negative number"
  // if(num === 0) return 1;
//   for( let i = num; num > 1; num-- ){
//     factorialVal = factorialVal * num;
     
//   }
//   return factorialVal;
// }


//! recursive solution
//     let factorialVal = 1;
//   if(num < 0) return "cannot get factorial value of a negative number"
//   if(num === 0) return 1;
// else {
//   for( let i = num; i > 1; i-- ){
//     factorialVal = num * getFactorial(num-1);
//   }
//   return factorialVal;
// }
// }
 

// console.log(getFactorial(4))




//! 3) print table of any number

// function tableOfaNumber(num){
//   for( let i = 1; i<=10; i++){
//     console.log(`${num} * ${i} = ${num * i}`)
//   }
   
// }
// console.log(tableOfaNumber(12))

//! 4) check prime number or not 
// function checkPrime(num){
//   //declare one variable and initial val is 1
//   var inc = 0;
//   // check it is divisible by (num/ 2 --) or not
//   for( let i = 1; i<= num / 2; i++){
//     // if divisible then increase variable value by 1
//     if(num % i === 0){
//       inc++;
//     }
//   }
//   // if value of that varibale is greater then 2 then not a prime otherwise prime
  
//   if(inc >= 2) return `${num} is not  a prime number`;
//   else  return `${num} is a prime number`;

// }
// console.log(checkPrime(14));


//! 5) count number of digits and sum of digits 

function countDigitAndSum(num){
  
  //! first method 
   // convert into string
  // for counting digit .length method 
//   const count = String(num).length
//   // for getting sum split and reduce method
//   const splittedval = String(num).split('');
//   console.log(splittedval)
// const sumOfValues = splittedval.reduce((a, b) => Number(a) + Number(b));
// console.log(sumOfValues)
//   return {
//     "number of digits" : count,
//     "sum of digits" : sumOfValues
//   };

// second method

// create a var count = 0;
// let count = 0;
// while( num > 1){
//   num % 10;
//   count ++;
// }
// console.log(count);
 
  
}
console.log(countDigitAndSum(567));




















