// Primitive : When called, the code just copies the original data to new memory slot and lets you modify it
    // 7 types of data: 
    console.table(["String","Number","Boolean","Null","Undefined","symbol","BinInt"]);
        // The 'symbol' datatype let's you assign an object it's own uniqueness just like IDs
            let sym1= Symbol(123)
            let sym2= Symbol(123)
            // let's check if abc's type is same as bbc using strict check (===)
                console.log(sym1 === sym2); // op: False
        // BigInt is used to store values which are greater than integer storage limit (which is 2^53)
            let BigValue = 803580485098472034n // if the letter n is used at the last, the number will be saved as bigint
            console.log(typeof BigValue);

// Reference (Non primitive)
    console.table(["Array","Object","Functions"])
    // Array
        let array1= [1,2,3,4]
        let array2= ["spider","mantis","ant","cockroach"]
        console.log(typeof array1); // op: object
    // Object
        // Anything inside {} is an object
        let Object= {
            Name: "chaitanya",
            age: 19
        }
        console.log(typeof Object); // op: Object
    // Function
        // Used to define functions
        let myFunct = function(){
            console.log("hello world");
            }
        console.log(typeof myFunct); // op: Function