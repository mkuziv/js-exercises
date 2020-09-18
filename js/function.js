//task1
function reverseNumber(num) {  
  num = num.toString();
  let str = "";

  for (var i = num.length - 1; i >= 0; i--) {
    str += num[i];
  }

  if ( num < 0 ){
    return -parseInt(str);
  } else {
    return parseInt(str);
  }  
}
console.log(reverseNumber(-325));

function reverseNum(num) {
  return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);                 
}
console.log(reverseNum(-325));

//task 2
function isPalindrome1(str){
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome1('madam'));

function isPalindrome2(str) {
  let reverseStr = '';
  for(let i = str.length-1; i >= 0; i--) {
    reverseStr+=str[i];
  }
  return str === reverseStr;
}
console.log(isPalindrome2('madam'));

//task 4
function alphabetOrder(str) {
  return str.split('').sort().join('');
}
console.log(alphabetOrder('alphabet'));

//task 5
function firstLetterUppercase(str) {
  return str.split(' ')
  .map(item => item = item[0].toUpperCase() + item.substring(1))
  .join(' ');
}
console.log(firstLetterUppercase('the quick brown fox'));

//task 6 
function findLongestWord(str) {
  let arr = str.split(' ');
  let arrLength = arr.map(item => item.length);
  let maxStr = Math.max(...arrLength);
  return arr.filter(item => item.length === maxStr).join('');  
}
console.log(findLongestWord('Web Development Tutorial'));

//task 7
function countVowelsInStr(str) {
  let countVowels = 0;
  for (let i = 0; i < str.length; i++) {
    let g = str[i].toLowerCase()
    if (g === "a" ||g ===  "e" ||g === "i" ||g === "o" ||g === "u") {
      
      countVowels++;
    }
  }
  return countVowels;

}
console.log(countVowelsInStr('The quick brown fox'));

//task 8 
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0){
      return false;
    }
  }
  return num > 1;
}
console.log(isPrime(2));

// task 9 
function typeOf(type) {
  return `Type is ${typeof type}`;
}
console.log(typeOf({}));

// task 11
let secondMaxMinNum = (arr) => {
  arr.sort((a,b)=> a - b);
  return `Second max num: ${arr[arr.length - 2]} Second min num: ${arr[1]}`;
}
console.log(secondMaxMinNum([2,1,5,8,3]));

// task 13
function factors(num) {
  let numbers = [];
  for (let i = 1; i < num / 2; i++){
    if (num % i === 0) {
      numbers.push(i);
    }
  }
  if (num / 1 !== 1 ){
    numbers.push(num);
  }
  return numbers;
}
console.log(factors(18));
