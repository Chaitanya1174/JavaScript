let userOne = new Object() // This is singleton object
    userOne = {
        fullName: {
            name: "Chaitanya",
            surname: "Chavan"
            
        },
        isLoggedIn: false,
        dob: new Date(2004,06,11),
        password: "abcxyz"
    }
// console.log(userOne.fullName.name); // Op: Chaitanya

// merging objects

    const ob1= {a:1,b:2}
    const ob2= {c:1,d:2}
    const ob3= {e:1,f:2}
    //this syntax won't be used frequently
        const ob4= Object.assign({},ob1,ob2,ob3) // using {} means rest of the values will be dropped inside {} which is target.if not used, the ob2 and ob3 will drop inside ob1
        // console.log(ob4); // op: { a: 1, b: 2, c: 1, d: 2, e: 1, f: 2 }

    //spread is easier to use
        ob5= {...ob1,...ob2,...ob3}
        // console.log(ob5); //op: { a: 1, b: 2, c: 1, d: 2, e: 1, f: 2 }

// accessing keys and values from an object
    let keys = Object.keys(userOne)// datatype will be array
    let values = Object.values(userOne)// datatype will be array
        // console.log(keys); // op: [ 'fullName', 'isLoggedIn', 'dob', 'password' ]
        // console.log(values); // op: [
                            //     { name: 'Chaitanya', surname: 'Chavan' },
                            //     false,
                            //     2004-07-11T00:00:00.000Z,
                            //     'abcxyz'
                            //   ]
    let entries =  Object.entries(userOne)
        // console.log(entries); // op: [
                            //     [ 'fullName', { name: 'Chaitanya', surname: 'Chavan' } ],
                            //     [ 'isLoggedIn', false ],
                            //     [ 'dob', 2004-07-11T00:00:00.000Z ],
                            //     [ 'password', 'abcxyz' ]
                            //   ]
// to check if the property exists or not
    console.log(userOne.hasOwnProperty('fullName')) // op: true

// Destructuring to access quickly
    userTwo = {
        fullName: {
            name: "Kartik",
            surname: "Joshi"
            
        },
        isLoggedIn: false,
        dob: new Date(2004,06,11),
        password: "abcxyz"
    }
        const {fullName:fn}= userTwo // this created a shortcut to access fullName property
        console.log(fn); // op: { name: 'Chaitanya', surname: 'Chavan' }