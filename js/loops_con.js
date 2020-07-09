//task 1
function biggerNum(a, b) {
  return a > b ? `${a} bigger than ${b}`: `${b} bigger than ${a}` ; 
}
console.log(biggerNum(9, 8));

//task 2
function getSign(a, b, c) {
  let product = a * b * c;
  return product > 0 ? 'The sign is +' : 'The sign is -';
}
console.log(getSign(2, -5, 0));

//task 3
function sortNumber(...arg) {
  let str = arg.sort((a, b) => b - a).join(', ');
  return str;
}
console.log(sortNumber(1, 8, 0, -7, 100));

//task 4
function largestNumber1(a, b, c, d, e){
  alert(Math.max(a, b, c, d, e));
  
  return Math.max(a, b, c, d, e);
}
console.log(largestNumber1(1, -3, 8, 0, 10));

function largestNumber2(...args){  
  alert(Math.max.call(...args));

  return Math.max.call(...args);
}
console.log(largestNumber2(1, -3, 8, 0, 10));