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

//task4
function alphabetOrder(str) {
  return str.split('').sort().join('');
}
console.log(alphabetOrder('alphabet'))