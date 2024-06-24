// JS counts dates from jan 1 1970
// ALWAYS USE FIRST LETTER CAPITAL IF YOU'RE USING INBUILT FUNCTION

const myDate = new Date()
console.log(myDate); // op: 2024-04-05T07:37:36.545Z
console.log(myDate.toString()); // Op: Fri Apr 05 2024 07:37:36 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString()); // op: 4/5/2024, 7:37:36 AM

const myBirthDate = new Date(2004,6,11) // because js counts including 0
console.log(myBirthDate.toDateString()); // op: Sun Jul 11 2004

let inst = Date.now() // counts miliseconds since jan 1 1970
console.log(inst); // op: 1712303105475
