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
  debugger
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
console.log(getMark(students))