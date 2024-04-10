// calculating cart total using reduce
    let cart=[
        {
            course:"js course",
            price:1999
        },
        {
            course:"cpp course",
            price:999
        },
        {
            course:"java course",
            price:599
        },
        {
            course:"data science course",
            price:7999
        },
        {
            course:"py course",
            price:199
        },
    ]

    let total=cart.reduce(function (tillNow,newItem) {
        console.log(`${tillNow} + ${newItem.course}`);
        return tillNow+newItem.price
    },0)
    console.log(`Rs.${total}`); // op: 11795