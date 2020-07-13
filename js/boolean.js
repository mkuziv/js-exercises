//task 1
function isBoolean(value) {
  return Object.prototype.toString.call(value) === '[object Boolean]';
}
console.log(isBoolean(true));

//task 2 
function isError(value) {
  return Object.prototype.toString.call(value) === '[object Error]'
}
console.log(isError(new Error('foo')));

//task 3 
function isNAN (num) {
  return num !== num;
}
console.log(isNAN(NaN));

//task 4
function isNull1(value) {
  return value === null;
}
console.log(isNull1(null));

function isNull2(value) {
  return Object.prototype.toString.call(value) === '[object Null]'
}
console.log(isNull2(2));

//task 5
function isNumber(num) {
  return !isNaN(num) && Object.prototype.toString.call(num) === '[object Number]';
}
console.log(isNumber(5));

