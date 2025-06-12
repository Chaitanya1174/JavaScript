let var1= new String("Chaitanya")

// You can use prototypes of this string using various prototype commands like .length, .touppercase(), etc.
    console.log(var1); // op: [String: 'Chaitanya']
    console.log(var1[2]); // op: a
    console.log(var1.length); // op: 9
    console.log(var1.toUpperCase()); // op: CHAITANYA
    console.log(var1.indexOf('y')); // op: 7

    const substring = var1.substring(0,4) //creating substring, negative values can't be used
    console.log(substring); // op: Chai

    const sliceSt = var1.slice(-4,9)
    console.log(sliceSt); // op: anya

    var2= "   chaitanya   "
    const trim = var2.trim() //trims starting and ending spaces
    console.log(trim);

    console.log(var2.replaceAll('a','4').trim()) // op: ch4it4ny4

    
