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

//task 5
function oddEvenNum (n) {
  for (let i = 0;i <= n; i++ ){
    if(i % 2 === 0) {
      console.log(`even ${i}`);
    } else {
      console.log(`odd ${i}`);
    }
  }
}
oddEvenNum(15);

//task 6
let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
function getMark(arg) {  
  let average = arg.reduce((acum, item) => (acum + item[1]), 0)/arg.length;
  console.log(average);
  if(average < 60) {
    console.log('Grade f');
  } else if (average < 70) {    
    console.log('Grade d');
  } else if (average < 80) {    
    console.log('Grade c');
  }  else if (average < 90) {    
    console.log('Grade b');
  } else if (average < 100) {
    console.log('Grade a');
  }
}
console.log(getMark(students));

//task 7
function fizzBuzz() {
  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz');
    } else if (i % 5 === 0){
    console.log('bazz');
    }else if (i % 3 === 0){
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

// task 9 
function isArmstrongNum(num) {
  let arr = num.toString().split(''); 
  
  let sum = arr.reduce((acc, item) => {
    return acc + ((+item) ** 3);
  }, 0);

  if(sum === num){
    return `${num} is Armstrong number`;
  }
  return `${num} is not Armstrong number`;
}
console.log( isArmstrongNum(372));

// task 10
let asterixPatern = (a) => {
  for (let i = 1; i <= a; i++) {
    let ast = '';
    for(let j = 0; j < i; j++) {      
      ast +="*";      
    }
    console.log(ast);
  }
}
asterixPatern(7);

// task 11
function greatestCommonDivisor(num1, num2) {
  let gsd;
  for ( let i = 1; i < num1 && i < num2; i++) {
    if (num1 % i === 0  && num2 % i === 0){
      gsd = i;
    }
  }
  return gsd;
}
console.log(greatestCommonDivisor(336, 360));