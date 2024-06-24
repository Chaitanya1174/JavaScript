marvelHeros = ["Ironman","Hulk","Thor"]
dcHeros = ["Superman","Batman","Wonderwomen"]
    marvelHeros.push(dcHeros) 
    console.log(marvelHeros); // op: [ 'Ironman', 'Hulk', 'Thor', [ 'Superman', 'Batman', 'Wonderwomen' ] ]
    marvelHeros.concat(dcHeros) // concat does not modify original array
    console.log(marvelHeros.concat(dcHeros)); // Op: [ 'Ironman', 'Hulk', 'Thor', 'Superman', 'Batman', 'Wonderwomen' ]
    console.log(marvelHeros); // op: [ 'Ironman', 'Hulk', 'Thor' ]

// Converting to arrays
    console.log(Array.from("Chaitanya"))
    console.log(Array.from({ name: "chaitanya"})) // gives empty array because you've to specify which values you want to convert into array

    let score1 = 100
    let score2 = 200
    let score3 = 300
        console.log(Array.of(score1,score2,score3)); // op: [ 100, 200, 300 ]