//task 1
function listOfProperties1(obj) {
  let str = '';
  for (let keys in obj) {
    str += keys + ' '
  }
  return str;
}
console.log(listOfProperties1( {  name : "David Rayy",  sclass : "VI",  rollno : 12 }));

function listOfProperties2(obj) {
  return Object.keys(obj);
}
console.log(listOfProperties2( {name : "David Rayy",  sclass : "VI",  rollno : 12 }));

//task 2
function delObjProperty(obj) {
  console.log(obj);
  delete obj.rollno;
  console.log(obj);
}
delObjProperty({name : "David Rayy",  sclass : "VI",  rollno : 12 });

//task 3
function  lengthOfObject(obj) {
  let lengthOfObj = 0;
  for(let keys in obj) {
    if (obj.hasOwnProperty(keys)) lengthOfObj++;
  }
  return lengthOfObj;
}
console.log(lengthOfObject({name : "David Rayy",  sclass : "VI",  rollno : 12 }));