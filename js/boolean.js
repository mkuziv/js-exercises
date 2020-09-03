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
function isNumber1(num) {
  return !isNaN(num) && Object.prototype.toString.call(num) === '[object Number]';
}
console.log(isNumber1(5));
function isNumber2(num) {
  return 'number' === typeof num ? true : false;
}
console.log(isNumber2(5));

//task 6
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
console.log(isObject({name: 'Robert'}));

//task 7
function isJson(obj) {
  return  toString.call(obj) === '[object Object]';
}
console.log(isJson({name: 'Robert'}));
console.log(isJson('bar'));

// task 8
function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}
console.log(isRegExp(/test/));

// task 9
function isChar(char) {
  if (Object.prototype.toString.call(char) !== '[object String]') {
    return false;
  }

  return char.length === 1;
}
 
console.log(isChar('k'));

