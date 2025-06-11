// Any type of Data could be converted into other type
let abc = 123
console.log(abc);
console.log("typeof abc is:",typeof abc);

xyz = String(abc)
console.log("after converting into string:",xyz);
console.log("typeof xyz after converting to string:",typeof xyz);

// The original type does not change.. you can only make it act like another type of data in another line of code
console.log(typeof abc); 

// ----------------OPERATIONS-----------------------
console.log(3+2);
console.log(3-2);
console.log(3*2);
console.log(3/2);
console.log(3%2);

console.log(3+2+"2"); // output is 52
console.log("3"+2+2); // output is 322
// when such conditions arrive, js prioratizes first operation and does that to the rest of the data

let x = 1
let y = x++ // if ++ used as postfix, the operator increments the value by 1 and returns after incrementing
console.log("y="+y); //output is 1 because the value isn't incremented but the original value is incremented
console.log("x="+x);

let a = 1
let b = ++a // if ++ used as prefix, the operator increments the value by 1 and returns Before incrementing
console.log("b="+b); // output is 2 because the incrementation is done
console.log("a="+a);