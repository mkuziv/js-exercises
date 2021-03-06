//task 1
function currentDay() {
  const date = new Date();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];

  let hours = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
   
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  console.log(`Sample Output: ${weekday[date.getDay()]}
  Current time is: ${hours} : ${minutes} : ${seconds}`);
}
currentDay()

// task 2
function printWindowContent() {
  window.print();
}
printWindowContent();

//task 3
function getCurrentDate() {
  let currentDate = new Date();

  let day = currentDate.getDay();
  let month = currentDate.getMonth() + 1;
  let year =currentDate.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }

  if (month < 10) {
    month = '0' + month;
  }
  
  return `${day}-${month}-${year}`;
} 
console.log(getCurrentDate());

//task 4
function triangleArea(a, b, c) {
  let p = (a + b + c)/2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
console.log(triangleArea(5, 6, 7));

//task 6
function isLeapYear(year){
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
console.log(isLeapYear(2020));

//task 7
function firstJanuarySunday(startYear, secondYear) {
  for(let i = startYear; i < secondYear; i++){
    let date = new Date(i, 0, 1);
    if (date.getDay() === 0) {
      console.log(`1st January is being a Sunday  ${i}`);
    }
  }
}
firstJanuarySunday(2000, 2050);

//task 8
function guessNumber() {
  let guessNum = prompt('Enter your number please');
  let randomNum = Math.floor(Math.random() * (10 - 1) + 1);
  console.log(randomNum)
  if (+guessNum === randomNum) {
    return 'Good Work';
  }
  return 'Not matched';
}
console.log(guessNumber());
//task 9
function daysUntilChristmas () {
  let dayChristmas = new Date('2021', '0', '07' );
  let today = new Date();
  console.log(Math.floor((dayChristmas - today)/1000/3600/24));
}
daysUntilChristmas();

// task 11
function cToF(num) {
  let f = (9 * num + (32 * 5)) / 5
  return `${num}C is ${f}F`;
}
console.log(cToF(30));
function fToc(num) {
  let c = (5 * (num - 32)) / 9;
  return `${num}F is ${c}C`;
}
console.log(fToc(86));

// task 12
console.log(document.URL);

// task 14
function getExtensionName(fileName) {
  fileName = fileName.split(".");
  return fileName[1];
}
console.log(getExtensionName('javascript.js'));