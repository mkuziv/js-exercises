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

//task 4
function getNumOfCharacters(str, num) {
  return str.slice(0, num);
}
console.log(getNumOfCharacters("Robin Singh",4));

//task 5
function abbrevName(str) {
  let arr =  str.split(' ');
  if (arr.length > 1) {
    return `${arr[0]} ${arr[1][0]}.`;
  }
  return `${arr[0]}`;
}
console.log(abbrevName('Robin Singh'));

//task 6
let hideEmail = (str) => {
  let arr = str.split('@');  
  let firstPart = arr[0];
  let secondPart = arr[1];
  firstPart = firstPart.slice(0, firstPart.length/2);
  return `${firstPart}...@${secondPart}`;
}
console.log(hideEmail('robin_singh@example.com'));

//task 7
function stringParameterize(str) {
  return str.toLowerCase().split(' ').join('-');
}
console.log(stringParameterize("Robin Singh from USA."));

//task 8
function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter('js string exercises'));

// task 9
function capitalizeFirstLetterInStr(str) {
  return str.split(' ').map(item => item = item[0].toUpperCase() + item.slice(1)).join(" ");
  
}
console.log(capitalizeFirstLetterInStr('js string exercises'));

// task 10 
function swapCase(str) {
  return str.split('')
  .map(item => {

    if(65 <= item.charCodeAt(0) && item.charCodeAt(0) <= 90 ){
      return item.toLowerCase();
    } else {
      return item.toUpperCase();
    }

  })
  .join('');
}

console.log(swapCase("aAbDc"));
