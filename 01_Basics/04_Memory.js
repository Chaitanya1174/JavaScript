


// THERE ARE TWO TYPES OF MEMORIES
    // Stack (Primitive data)

        // When a variable is declared, and if it is modified in another line, then the original variable value does not change
        // because in primitive datatype, a copy is assigned when the declared data is called rather than giving access to original declaration
        let var1 =23;
        console.log(var1,":first value");
        let var2 = var1;
        console.log(var2,":value given to second variable");
        var1=24;
        console.log(var1,":first value changed")
        console.log(var2,":even after making changes in first value, second value does not changes");


    // Heap (Non-Primitive data)

        // When variable is assigned value in non primitive data type, and is later modified, then the modification happens directly inside the original value
        // this happens because instead of a copy like primitive type, the newly called data gets to directly use the original data
        let object={
                name:'Chaitanya',
                age:21
            };
            console.log(object,"first object");
            let object2=object;
            console.log(object2,"value given to second object");
            object.name='chinmay';
            console.log(object,"value changed in first object");
            console.log(object2,"second object value also changed");

