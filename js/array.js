//task 1
function isArr1(arr) {
  return Array.isArray(arr)
}
console.log(isArr1([1, 2, 3]))
function isArr2(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}
console.log(isArr2([1, 2, 3]));

//task 2
function copyArray1(arr) {
  return [...arr];
}
console.log(copyArray1([1, 2, [3, 5]]));

function copyArray2(arr) {
  return Array.prototype.concat(arr);
}
console.log(copyArray2([1, 2, [7, 5, 9]]));

function copyArray3(arr) {
  return arr.slice(0); 
}
console.log(copyArray3([1, 2, 8, 3, [7, 5, 9]]));

function copyArray4(arr) {
  return arr.splice(0); 
}
console.log(copyArray4([2, 8, 3, [7, 5, 9]]));

//task 3
function firstArrArg(arr, num) {
  if (arr === null) {
    return 0;
  }
  if (num === undefined) {
    return arr[0];
  }
  return arr.slice(0, num);
}
console.log(firstArrArg([1, 2, 3], 3));

//task 4
function lastArrArg(arr, num) {
  if (arr === null) {
    return 0;
  }
  if (num === undefined) {
    return arr[arr.length -1];
  }
  return arr.slice(-num);
}
console.log(lastArrArg([7, 9, 0, -2], 3));

//task 5
function joinToStr(arr, separator) {
  return arr.join(` ${separator} `);
}
console.log(joinToStr(["Red", "Green", "White", "Black"], '/'));

//task 7
function sortItem(arr) {
  return arr.sort((a, b) => a-b)
}
console.log(sortItem([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]));

//task 9
function firstLetterSmall(str) {
  return str.split(' ').map(item => item[0].toLowerCase() + item.slice(1).toUpperCase()).join(' ')
}
console.log(firstLetterSmall('The Quick Brown Fox'));

// task 10
let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

function arrLog(arr) {
  return arr.reduce((acc, item, index) => {
    console.log(`Row ${index}`);
    item.map(item => console.log(item));
  }, 0);  
}
console.log(arrLog(a));

//task 11
let sumSq = (arr) => {
  return arr.reduce((acc, item) => acc + (item ** 2))
}
console.log(sumSq([0, 1, 2, 3, 4, 5]));


// task 12
function sumOrProductArr(arr) {

  let sumVal = arr.reduce((acc,item) => acc + item , 0);
  let productArr = arr.reduce((acc,item) => acc * item , 1);

  return `Sym is ${sumVal} Product is ${productArr}`;
}
console.log(sumOrProductArr([1, 2, 3, 4, 5], "+"));

