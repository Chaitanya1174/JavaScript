// // promise(function(resolve,reject){code;resolve()})
//     promiseOne = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("promise created");
//             resolve() //data can be passed from resolve to .then using resolve(data)
//         },2000)
//     })

// // .then is used for resolve case and only executes after promise is executed
//     promiseOne.then(()=>{
//         console.log("promise consumed");
        
//     })

// // without storing in variable
//     Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("promise two");
//             resolve()
//         }, 1000);
//     }).then(()=>{
//         console.log("promise two consumed");
        
//     })

// How data can be passed using resolve to .then
    const promiseThree = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({username:"chaitanyachavan",password:"chaitu"})
        }, 1000);
    })

    promiseThree.then(function (resolveData){
        console.log(resolveData.username);
        
    })

// 
