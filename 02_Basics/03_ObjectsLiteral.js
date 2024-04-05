// object literals
    userOne = {
        name: "Chaitanya",
        "full_Name": "Chaitanya Chavan",
        age: 19,
        isLoggedIn: true
    }
// two ways to access objects
    console.log(userOne.name);
    console.log(userOne["full_Name"]);

// to insert Symbol in dataset
    sym= Symbol("ajeeb")
    userTwo = {
        name: "Chaitanya",
        "full_Name": "Chaitanya Chavan",
        [sym] : "gareeb", // To insert object use square brackets []
        age: 19,
        isLoggedIn: true
    }
    console.log(userTwo);

// functions
    userOne.userGreeting = function(){console.log(`hello,${this.name}`)}
    console.log(userOne.userGreeting()); // op: hello,Chaitanya, undefined