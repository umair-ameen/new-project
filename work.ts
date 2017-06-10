
let students: {name: string, age: number, cast: string}[] = [
    {
        name: "Umair",
        age: 22,
        cast: "Arain",
    },
    {
        name: "Qasim",
        age: 18,
        cast: "Arain",
    }
]

students.forEach(function(getvalue){
    let student = [
        [getvalue.name],
        [getvalue.age],
        [getvalue.cast]
    ]
}
)
