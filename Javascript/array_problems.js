//! 1 remove duplicate elements from array
function removeDuplicates(arr) {
  let obj = {};
  let newArr = [];
  // loop through each obj
  for (let i = 0; i < arr.length; i++) {
    // search if allready not present
    // use an object for this
    if (!obj[arr[i]]) {
      newArr.push(arr[i]);
      obj[arr[i]] = true;
      console.log(obj[arr[i]]);
    }
    // if not present then push into new array otherwise don't
  }
  return newArr;
}
// console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 3]))

//! 2 collect duplicate elements
function collectDuplicates(arr) {
  let obj = {};
  let newArr = [];
  let dupArr = [];
  // loop through each obj
  for (let i = 0; i < arr.length; i++) {
    // search if allready not present
    // use an object for this
    if (!obj[arr[i]]) {
      newArr.push(arr[i]);
      obj[arr[i]] = true;
      // console.log(obj[arr[i]]);
    } else {
      dupArr.push(arr[i]);
    }
    // if not present then push into new array otherwise don't
  }
  return dupArr;
}
// console.log(collectDuplicates([1, 2, 3, 2, 4, 5, 3]))

//! 3 sorting..
// stringArray.sort(); // this method will sort only string but not no effect on numbers
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
const result = items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

//   console.log(result)
// for non ascii character (non english alphabet)
const _items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
_items.sort((a, b) => a.localeCompare(b));

//! 4,5 Intersection and Union
// intersection of two arrays
function findIntersection(arr1, arr2) {
  let intersectionArr = [];
  // loop through first array
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // take a element and compare with second array
      if (arr1[i] === arr2[j]) {
        // if same then push into new array and return that array
        intersectionArr.push(arr1[i]);
      }
    }
  }
  return intersectionArr;
}
// console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])) // [3,4]

function findUnion(arr1, arr2) {
  // concat both array
  const concatedArr = [...arr1, ...arr2];
  // and remove duplicates
  return concatedArr.filter((ele, index) => concatedArr.indexOf(ele) === index);
}
// console.log(findUnion([1, 2, 3, 4], [3, 4, 5, 6])) // [1,2,3,4,5,6]

//! 6,7,8 rotate array , most frequent in array, sum of obj element in array

function rotateArray(arr, num) {
  // slice elements from index num and put from starts
  const slicedArr = arr.slice(num + 1, arr.length);
  const filteredArr = arr.filter((ele, index) => index < arr[num]);
  return [...slicedArr, ...filteredArr];
}
//  console.log(rotateArray([1, 2, 3, 4, 5], 2)) // Should return [4, 5, 1, 2, 3]
//  console.log(rotateArray([1, 2, 3, 4, 5, 1,4,5], 4))

function findMostFrequent(arr) {
  // loop through all elements
  let occuranceObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!occuranceObj[arr[i]]) {
      occuranceObj[arr[i]] = 1;
    } else {
      // increase the counter if duplicates come and store in a object
      occuranceObj[arr[i]]++;
    }
  }
  let occuranceArr = [];
  for (let key in occuranceObj) {
    occuranceArr.push(occuranceObj[key]);
  }
  const maxOccurance = Math.max(...occuranceArr);
  return maxOccurance;
}

// console.log(findMostFrequent([1, 2, 2, 3, 3, 3, 4])); // Should return 3
// console.log(findMostFrequent([1, 2, 2, 3, 3, 4, 4]) )// Should return either 2 or 3

function calculateTotalPrice(arr) {
  // loop through all items
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // take one varible and store sum of prices of items
    sum += arr[i].price;
  }
  return sum;
}

// console.log(
//   calculateTotalPrice([
//     { name: "Item 1", price: 10 },
//     { name: "Item 2", price: 20 },
//     { name: "Item 3", price: 30 },
//   ])
// ); // Should return 60

//! 9, 10, remove falsy values, findTwoSumIndices 

function removeFalsyValues(arr) {
  let truthyvalues = [];
  let falsyValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyvalues.push(arr[i]);
    } else {
      falsyValues.push(arr[i]);
    }
  }
  return { truthies: truthyvalues, falsies: falsyValues };
}
// console.log(removeFalsyValues([0, 1, false, 2, "", 3, null, undefined, NaN, 4]))

function findTwoSumIndices(arr, num) {
  // loop through all elements of array
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // take one element and add with others
      // if sum is equals num
      if (arr[i] + arr[j] === num) {
        return [i, j];
      }
    }
  }
  // return indexes
}
// console.log(findTwoSumIndices([2, 3, 0, 7], 9));
