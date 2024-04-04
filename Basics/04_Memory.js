// THERE ARE TWO TYPES OF MEMORIES
    // Stack (Primitive data)

        // When a variable is declared, and if it is modified in another line, then the original variable value does not change
        // because in primitive datatype, a copy is assigned when the declared data is called rather than giving access to original declaration
        let var1 = 123
        let var2 = var1
        console.log(var2); // op: 123
        console.log(var1); // op: 123
        // if we changed var2, var1 won't be changed
        var2 = 234
        console.log(var2); // op: 234
        console.log(var1); // op: 123

    // Heap (Non-Primitive data)

        // When variable is assigned value in non primitive data type, and is later modified, then the modification happens directly inside the original value
        // this happens because instead of a copy like primitive type, the newly called data gets to directly use the original data
        let OgData= {
            name : "chaitanya",
            age: 19
        }
            let obj1 = OgData
            console.log(obj1); // op: name:'chaitanya', age: 19
            // now if we changed the data using obj1, the original data from Object will be changed
            obj1.name = "apratim"

            console.log(obj1); // op: name: 'apratim', age: 19
            console.log(OgData); // op: name: 'apratim', age: 19
