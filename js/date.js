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

//task 6
function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes*60000);
}
console.log(addMinutes(new Date(2014,10,2), 30).toString());

//task 7
function dateIsWeekend(param) {
  let date = new Date(param);
  if ( date.getDay() === 6 || date.getDay() === 0) {
    return 'weekdays';
  }
  return undefined;
  
}
console.log(dateIsWeekend('Nov 16, 2014'));

// task 8
let dateDiffInDays = (date1, date2) => {
  let d1 = new Date(date1).getTime();
  let d2 = new Date(date2).getTime();
  return Math.trunc((d1 - d2)/1000/86400);
}
console.log(dateDiffInDays('11/02/2014', '04/04/2014'));

// task 9
function lastDayOfMonth(year, month) {
  let lastDay = new Date(year, month + 1 , 0);
  
  return lastDay.getDate();
}
console.log(lastDayOfMonth(2014, 0));

// task 10
function yesterday(date) {
  date = new Date(date).getTime() - 86400000;
  let yesterday = new Date(date);
  
  return yesterday;
}
console.log(yesterday('Nov 15, 2014'));

