// Promise syntax:
// promise(function(resolve,reject){code;resolve()})
    promiseOne = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("promise created");
            resolve() //data can be passed from resolve to .then using resolve(data)
        },2000)
    })

// .then is used for resolve case and only executes after promise is executed
    promiseOne.then(()=>{
        console.log("promise consumed");
        
    })

// without storing in variable
    new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("promise two");
            resolve()
        }, 1000);
    }).then(()=>{
        console.log("promise two consumed");
        
    })

// How data can be passed using resolve to .then
// A promise can be consumed using .then() where the resolved value
// gets transfered .then(HERE) as a parameter which can be used
// in a function.
    const promiseThree = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({username:"chaitanyachavan",password:"chaitu"})
        }, 1000);
    })

    promiseThree.then(function (resolveData){
        console.log(resolveData.username);
    })

// .then Chaining:
// when you use .then() the inside code needs to be a function
// if you return a value using that function, the returned value
// gets passed into the next .then() as a new promise.
// This enables chained async tasks

    const promiseFour = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = false;
            if (error) {
                reject("Error..!!");
            }else{
                resolve(9000);
            }
        }, 3000
        )
    })

    promiseFour
    .then((user)=>{
        return user + 50;
    })
    .then((used) =>{
        console.log(used)
        }
    )