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
