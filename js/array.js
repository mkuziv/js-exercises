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
