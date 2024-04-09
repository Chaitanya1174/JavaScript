// 'While' (Joparyant) loop works same as 'For' loop
    index=0
    arr1= Array.from("CHAITANYA")
    // console.log(arr1.length);
    while(index<arr1.length){
        console.log(`${arr1[index]}`);
        index= index+1
    }

// 'do while' loop works first and checks the iteration condition later

    let score= 1;
    do {
        console.log(score);
        score=score+1
    } while (score<=10);

// Map = map only registers unique values and does not recognise duplicate values
let map= new Map()
map.set('in','india')
map.set('ur','urgentina')
map.set('ur','urgentina')
console.log(map);
// 'for of' loop