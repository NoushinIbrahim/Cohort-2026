//in js date always has two things => date and time

// create 

let now = new Date()
console.log(now);


let zunniBDay = new Date(2002, 6, 1, 8, 32)
zunniBDay.setHours(8, 32)
console.log(zunniBDay);

//getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getMilliseconds(), getDay()


//setting date components
/* 
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds)

*/

//auto-corrections

let date = new Date (2026, 6, 25, 5, 30)
console.log(date.getDate() +2);
date.setDate
//facts daate start from 1jan 1970...

console.log(Date.now()); //milliseconds from epoch

console.log(Date.parse('2026-6-25'));










