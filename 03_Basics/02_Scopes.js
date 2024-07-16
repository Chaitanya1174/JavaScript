function one() {
    const username= "chaitanya"
    function two() 
    {
        const website= "youtube"
        console.log(username);
    }
    console.log(website); //website is nested inside the function 'two'
    two()

}
one()

// types of declaring function
    console.log(Adds(5));
    function Adds(num) // if declared like this, then you can access even before declaring
    {  
        return num + 1
    }

    console.log(Subtract(5));
    const Subtract = function Subtract(num)  // if declared like this, then cannot access before declaring
    {
        return num -1
    } // op: error