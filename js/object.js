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

//task 5
function Cylinder(radius, height) {
  this.radius = radius;
  this.height = height;

  this.getVolume = function() {
    return 3.14 * this.radius ** 2 * this.height;
  }
}
let cylinder = new Cylinder(2, 7);
console.log(cylinder.getVolume().toFixed(4));

//task 8
function clock() {
  setInterval(() => {
    let time = new Date();

    let hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    let minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    let seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();    

    console.log(`${hour}:${minutes}:${seconds}`);
  }, 1000)
}
clock();

//task 9
function Circle(radius) {
  this.radius = radius;
  this.getArea = function() {
    return Math.PI * this.radius ** 2;
  }
  this.getCircumference = function () {
    return 2 * Math.PI * this.radius;
  }
}
let circle = new Circle(3);
console.log('Area =', circle.getArea().toFixed(3));
console.log('Circumference =', circle.getCircumference().toFixed(3));

// task 11
function allProperties(data) {  
  return Object.getOwnPropertyNames(data).filter(item => typeof data[item] === "function");
}
console.log(allProperties(Object));

//task 13
function getProperties(obj) {
  let arrProp = [];
  for (let prop in obj) {
    arrProp.push(prop);
  }
  return arrProp;
}
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(getProperties(new Student("Sara")));

// task 14
function getObjectValues(obj) {
  let arrVal = [];
  for (let prop in obj) {
    arrVal.push(obj[prop]);
  }
  return arrVal;
}
console.log(getObjectValues(new Student("Sara")));