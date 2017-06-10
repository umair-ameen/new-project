let employees: {name: string, age: number, cast: string}[] = [
    {
        name: "Umair",
        age: 12,
        cast: "Arain",
    },
    {
        name: "Noman",
        age: 13,
        cast: "Rajput",
    },
    {
        name: "Adeel",
        age: 15,
        cast: "Solangi",
    },
    {
        name: "Saleem",
        age: 18,
        cast: "Sahito",
    },{
        name: "Asad",
        age: 20,
        cast: "Sahito",
    },
    {
        name: "Shokat",
        age: 22,
        cast: "Shah",
    },
    {
        name: "Aziz",
        age: 24,
        cast: "Shah",
    },
    {
        name: "Shafi",
        age: 26,
        cast: "Shah",
    },
    {
        name: "Mujtaba",
        age: 32,
        cast: "Shah",
    },
    {
        name: "Javed",
        age: 34,
        cast: "Shah",
    },
    {
        name: "Azhar",
        age: 36,
        cast: "Shah",
    },
    {
        name: "Azhar",
        age: 38,
        cast: "Shah",
    },{
        name: "Jameel",
        age: 39,
        cast: "Arain",
    }
]

function filterEmployees(objects){
    return objects.filter(function(obj){
        return obj.age <= 20 || obj.age > 30;
    })
}

console.log(filterEmployees(employees))




// let val1 = 1;
// let val2 = 2;
// let val3 = 3;
// let opponent = 4;

// if (val1 == opponent){
//     console.log("Val1 equals to Opponent")
// }
// else if (val2 == opponent){
//     console.log("Val2 equals to Opponent")
// }
// else if (val3 == opponent){
//     console.log("Val3 equals to Opponent")
// }
// else{
//     console.log("Nothing equals to opponent")
// }

// var a:any[] = [1, 2, 3]

// let result = filterA(input, value){
//     return
// }

