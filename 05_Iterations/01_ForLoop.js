// Syntax of for loop
    for (let i = 1; i < 11 ; i++) {         // for (declare variable, run the loop until second condition meets, meet the last condition at the end of each cycle){ }
        console.log(`${i}'s table is`);
        for (let j = 1; j < 11; j++) {
            console.log(`${i}*${j} is `+ i*j);

        }

    }

// Break and continue
    for (let i = 1; i < 11 ; i++) {    
        if (i==5) {
            console.log("I won't print 5 lol");
            continue
        } else if (i==7) {
            console.log("I can't count further");
            break
        }
        console.log(`${i}'s table is`);
        for (let j = 1; j < 11; j++) {
            console.log(`${i}*${j} is `+ i*j);

        }

    }
