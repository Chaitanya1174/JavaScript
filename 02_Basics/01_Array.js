// arrays are resizable
// array elements can only be accessed using index no.s

    let arr1 = new Array("ob1","ob2","ob3")
    console.log(arr1[0]); // op: ob1
    arr1.push("ob4")
    console.log(arr1) // op: [ 'ob1', 'ob2', 'ob3', 'ob4' ]

    arr1.pop() // pops out last element
    console.log(arr1);// op: [ 'ob1', 'ob2', 'ob3' ]

    console.log(arr1.join()); // .join converts array to string

// ----- splice vs slice -------
    let array2 = new Array('1','2','3','4')

        const sliceA2 = array2.slice(1,3) // includes first value and excludes 2nd value DOESN'T MODIFY ORIGINAL ARRAY
        console.log("sliceA2",sliceA2); // op: sliceA2 [ '2', '3' ]
    console.log("slice",array2); // op: slice [ '1', '2', '3', '4' ]

        const spliceA2 = array2.splice(1.3) // includes 1st and last values AND MODIFIES ORIGINAL ARRAY
        console.log("spliceA2",spliceA2); // op: spliceA2 [ '2', '3', '4' ]
    console.log("splice",array2); // op: splice [ '1' ]
