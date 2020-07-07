//task 1
function is_string1(str) {
  return typeof str === "string";
}
console.log(is_string1('str'));

function is_string2(str) {
	return Object.prototype.toString.call(str) === '[object String]'
}
console.log(is_string2('str'));

//task 2
function isEmptyStr(str) {
  return str.length === 0;
}
console.log(isEmptyStr(''));
console.log(isEmptyStr('abc'));

//task 3
function stringToArray (str) {
  return str.split(' ');
}
console.log(stringToArray('Robin Singh'));