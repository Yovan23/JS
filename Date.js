console.log("hey..! Yovan");

let now = new Date();
console.log(now);   //2024-05-28T16:28:28.884Z

// Prints the specific date and time
let specificDate = new Date('2004-08-23T10:00:00');
console.log(specificDate);   //2004-08-23T04:30:00.000Z

// Note: Months are 0-indexed  (y , m, d, h, m, s )
let dateComponents = new Date(2024, 7, 23, 10, 20, 30);  
console.log("UTC time:", dateComponents);                // 2024-08-23T04:50:30.000Z
console.log("IOS time: ", dateComponents.toISOString()); // 2024-08-23T04:50:30.000Z
console.log("Local time:", dateComponents.toString());   //  Fri Aug 23 2024 10:20:30 GMT+0530 (India Standard Time)
console.log("Local time:", dateComponents.toLocaleString()); // 8/23/2024, 10:20:30 AM
console.log("Local Date:", dateComponents.toLocaleDateString()); // 8/23/2024

// Prints the date corresponding to the timestamp
let timestamp = new Date(1716854400000);
console.log(timestamp); 

let date = new Date();
console.log(date.getFullYear());  // Year
console.log(date.getMonth());     // Month (0-indexed, so 0 = January)
console.log(date.getDate());      // Day of the month
console.log(date.getDay());       // Day of the week (0 = Sunday)
console.log(date.getHours());     // Hours
console.log(date.getMinutes());   // Minutes
console.log(date.getSeconds());   // Seconds
console.log(date.getMilliseconds());  // Milliseconds

let date1 = new Date();
date1.setFullYear(2025);
date1.setMonth(11);  // December
date1.setDate(25);
date1.setHours(10);
date1.setMinutes(30);
date1.setSeconds(0);
console.log(date1);  // Modified date and time
console.log(date1.toLocaleString());

// Date Comparison

let date3 = new Date('2024-05-28');
let date2 = new Date('2024-06-01');

console.log(date3 < date2);  // true
console.log(date3 > date2);  // false
console.log(date3.getTime() === date2.getTime());  // false
 
console.log(date3.getTime());  // 1716854400000


let date4 = new Date('2024-05-28');  // YYYY-MM-DD format, always interpreted as UTC
let date5 = new Date('May 28, 2024');  // Locale-specific format, may vary based on the browser

console.log(date4);  // 2024-05-28T00:00:00.000Z GMT+0000 (Coordinated Universal Time)
console.log(date5);  // 2024-05-27T18:30:00.000Z GMT+local timezone

let options = { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit' };
let formatter = new Intl.DateTimeFormat([], options);
console.log(formatter.format(date));  // Prints the time in New York time zone

// Subtracting days
date.setDate(date.getDate() - 10);
console.log(date);  // 10 days earlier

// Adding days
date.setDate(date.getDate() + 5);
console.log(date);  // 5 days later

let leapYearDate = new Date('2020-02-29');  // Valid leap year date
console.log(leapYearDate.toLocaleDateString());

let nonLeapYearDate = new Date('2019-02-29');  // Invalid date, rolls over to March 1, 2019
console.log(nonLeapYearDate.toLocaleDateString());


//date-fns  --> https://date-fns.org 