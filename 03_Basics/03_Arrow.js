// arrow functions
    const arrowFunction= () => {
        console.log("hello");
    }
    arrowFunction()
    // if arrow function is used and the function line is just one then no need to use return
    const adding = (num1,num2) => (num1+num2)
    console.log(adding(1,2))

// use of 'this' operator
    const userOne= {
        username: `Chaitanya`,
        password:`aabbcc`,
        message: function welcomeMessage() {
            console.log(`${this.username},welcome`);
        },
    }
    // userOne.message()
    // console.log(this); // use of 'this' in node background

    function aFunciton() {
        console.log(this); // use of 'this' in function background
    }
    // aFunciton()

    const thisArrowFun = () => {
        console.log(this);
    }
    // thisArrowFun() // use of 'this' in arrow function background