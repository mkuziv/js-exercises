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

//task 4 
function getMonthName(date){
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  return monthNames[date.getMonth()];
}
console.log(getMonthName(new Date("11/13/2014")));

//task 5
function compareDates(d1, d2) {
  let dateFirst = d1.getTime();
  let dateSecond = d2.getTime()

  if (dateFirst === dateSecond) {
    return 'Date1 = Date2';
  } else if (dateFirst < dateSecond) {
    return 'Date1 < Date2';
  } else {
    return 'Date1 > Date2';
  }
}
console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compareDates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));