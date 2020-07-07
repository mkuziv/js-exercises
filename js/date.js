//task 1
function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]';
}
console.log(isDate(new Date(86400000)));

//task 2
function currentDay(sep) {
  let today = new Date();
  return `${today.getMonth() + 1}${sep}${today.getDate()}${sep}${today.getFullYear()}`;
}
console.log(currentDay('-'));

//task 3
function getDayInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
console.log(getDayInMonth(2, 2020));
