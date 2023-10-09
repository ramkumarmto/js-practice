//! remove duplicate elements from array
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

//! collect duplicate elements
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

//! sorting..
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

function findUnion(arr1, arr2){
    // concat both array
    const concatedArr = [...arr1, ...arr2]
    // and remove duplicates
   return concatedArr.filter((ele, index) => concatedArr.indexOf(ele) === index)

}
console.log(findUnion([1, 2, 3, 4], [3, 4, 5, 6])) // [1,2,3,4,5,6]
