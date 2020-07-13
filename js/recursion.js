//task 1
function factorial(num) {
  if (num != 1) {
    return num * factorial(num-1);
  } else {
    return 1;
  }
}
console.log(factorial(5));

//task 3
function range(start, end) {
  let arr = [];
  for(let i = start + 1; i <= end-1; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(range(2, 9));


function rangeRec(start, end) {
  if(end - start  === 2) {
    return [start + 1];
  } else {
    let arr = rangeRec(start, end - 1);
    arr.push(end - 1); 
    return arr;
  } 
}
console.log(rangeRec(2, 9));

//task4
let sumArray =  function sum(arr) {
  if(arr.length === 1){
    return arr[0];
  } else {
    return arr.pop() + sum(arr);
  }
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7]));

//task 5
function exponentNumber(x, n) {
  if(n !== 0) {
    return x * exponentNumber(x, n-1);    
  } else {
    return 1;
  }
}
console.log(exponentNumber(2, 3));

//task 6
function fibonacci(n) {
  if(n === 1){
    return [0, 1];
  } else {
    let arr = fibonacci(n - 1);    
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

    return arr;
  }
}
console.log(fibonacci(8));