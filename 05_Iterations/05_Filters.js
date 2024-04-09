// using filter operator to filter data
let books= [
    {
        name:"Immortals of meluha",
        author:"amish",
        published:2010
    },
    {
        name:"The secret of nagas",
        author:"amish",
        published:2011
    },
    {
        name:"Oath of vayuputras",
        author:"amish",
        published:2013
    },
    {
        name:"Inkredia",
        author:"sarang mahajan",
        published:2012
    },
    {
        name:"the whispering dwapara",
        author:"Rishi",
        published:2012
    },
    {
        name:"da vinci code",
        author:"dan brown",
        published:2003
    }
]
    let filteredBooks= books.filter((bk)=>{return bk.author==='dan brown'})
        filteredBooks= books.filter((bk)=>{return bk.published>= 2010})
        filteredBooks= books.filter((bk)=>{return bk.published>= 2011 && bk.author==='amish'})
    // console.log(filteredBooks);

// map operator
let nums=[1,2,3,4,5,6,7,8,9,10]
    newNums=nums.map((plusTen)=>{return plusTen+10})
    console.log(newNums);