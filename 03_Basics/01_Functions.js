function sayMyName(param) {
    console.log("S");
    console.log("o");
    console.log("n");
    console.log("u");
}
// sayMyName()

function addition(num1,num2) { // (num1,num2) these are parameters
//    console.log( num1+num2);
}
addition(1,2) // (1,2) these are arguments

// return
    // you cannot store the result of a function without returning something
    let add = addition(1,2)
    // console.log("Without using return",add);// op: Without using return undefined

    function addition2(num1,num2) {
        return num1+num2
     }
    add2 = addition2(8,9)
    // console.log("Using return",add2); // op: Using return 17

// parameter and argument
     function login(username) {
        if (!undefined) {
            console.log("please enter username");
            return
        }
        return `${username} is just logged in`
     }
    //  console.log(login()); // op: please enter username
                            //undefined

// use of rest operator
     function calculateCartPrice(...number1) { // ... is rest operator
        return number1  
     }
     console.log(calculateCartPrice(100,200,300)); //op: [ 100, 200, 300 ]

// passing array in function
     function arrayUse(anyarray) {
        return anyarray [8]
     }
     console.log(arrayUse(Array.from("chaitanya")))