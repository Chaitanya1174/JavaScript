// Control flow means controlling the execution of code which includes using statements like if, ifelse, etc.

    let email="Chaitanya@hotmail.com"
    if (email) {
        console.log("user is logged in and");
    };
    if (email.includes("gmail.com")){
        console.log("user is from gmail");
    }else if(email.includes("yahoo.com")){
        console.log("user is from yahoo");
    }
    // a || b = either a is true or b is true
    // a && b = a and b both must be true


    if (email.includes("@google.com") || email.includes("@yahoo.com")) { 
        console.log("generic user is logged in");
    }else{
        console.log("user who thinks he or she is an international interest is logged in");
    }
