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

//task 4
var library = [ 
  {
      title: 'Bill Gates',
      author: 'The Road Ahead',
      readingStatus: true
  },
  {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      readingStatus: true
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      readingStatus: false
  }];
function showReadingStatus(arr){
  return arr.map(item => {

    if (item.readingStatus) {
      return `Already read '${item.title}' by ${item.author}.`;
    } else {
      return `You still need to read '${item.title}' by ${item.author}.`;
    }

  })
  .join(' ');
}
console.log(showReadingStatus(library));