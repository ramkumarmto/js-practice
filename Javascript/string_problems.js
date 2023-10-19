// var lengthOfLongestSubstring = (str) => {
// let currentStr = [];
// let longestStrLength = 0;

// for( let i =0; i< str.length; i++){

// }

// };
// console.log(lengthOfLongestSubstring("abcdabcbds"));

// var lengthOfLongestSubstring = (str) => {
// let sub = str[0];
// let longest = sub;
// let j = 0;
// for( let i =j + 1; i< str.length; i++){
//     if(str.slice(j, i).split("").includes(str[i])){
//         ++j;
//         i = j;
//     } else{
//         sub = str.slice(j, i + 1)
//     }
//     if( sub.length > longest.length){
//         longest = sub
//     }

// }
// return longest.length;

// };
// console.log(lengthOfLongestSubstring("abcdabcbdsqwer"));

var lengthOfLongestSubstring = (str) => {
  let arr = str.split("");
  let uniqueValues = [];
  let longestUniqueValues = [];
  // loop through all elements
  for (let i = 0; i < arr.length; i++) {
    // if elements are unique push into an array
    if (!uniqueValues.includes(arr[i])) {
      uniqueValues.push(arr[i]);
    } else {
      uniqueValues = [arr[i]];
    }

    if (uniqueValues.length > longestUniqueValues.length) {
      longestUniqueValues = uniqueValues;
    }
  }

  return longestUniqueValues.length;
};


