// immediately invoked function expressions 
// only sounds complicated but isn't... it's just like declaring variable and using it inside a function at the same time
function printHello() { // here, we named this fuction
    console.log("hello");
}
printHello(); // here, we used that name to call this function

(function printHola() {console.log("hola");})(); // iife doesn't know when to stop so use ; after line
// note: (function)() second bracket is for execution

(()=>{console.log("life");})();// can also be used with arrow functions
((name)=>{console.log(`Hii ${name}`);})("chaitanya");// use of parameters and arguments