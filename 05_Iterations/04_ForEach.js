// using for each on array
    myArray= ["ananya","avanti","aradhya","aditi"]
    myArray.forEach(element => {
    console.log(element);
    });

// using for each on array including objects
    objArray= [
        {
            name:"ananya",
            password:"ananya@123",
            isLoggedIn:"false"

        },
        {
            name:"avanti",
            password:"avanti@123",
            isLoggedIn:"true"

        },
        {
            name:"aradhya",
            password:"aradhya@123",
            isLoggedIn:"false"

        },
        {
            name:"aditi",
            password:"aditi@123",
            isLoggedIn:"true"

        }
    ]
    objArray.forEach(element => {
        console.log(element.name);
        if (element.name== "aditi") {
            console.log(`${element.name} is a bitch`); // cannot use continue or break in foreach statement 
        }
    });

// For each return values
    const bitch= objArray.forEach(element=>{element.name+"bitch"
    return
    })
    console.log(bitch); // op: undefined because for each does not return any value even if you used return

// filter operator
    const bitchName= objArray.filter((item)=>(item.name="someBitch"))
    console.log(bitchName); // returns values
    const bitchPassword= objArray.filter((item)=>{
        item.password="someBitch@123"
        return item
    })
    console.log(bitchPassword); // use return if used object paranthesis

