let word: string | null = null;
const num = 10;

if(num > 5){
    word = "abc"
}

console.log(word!.toUpperCase())

function printName(name?: string){
    const fullName: string = name!;
}

interface Person{
    name : string,
    age: number,
    sex: "female" | "male"
}

function printName2(person?: Person){
    console.log(person!.name)
}

const people: Person[] = [
    {
        name: "Papa",
        age: 70,
        sex: "male"
    },
    {
        name: "Papa",
        age: 72,
        sex: "male"
    },
    {
        name: "Mom",
        age: 35,
        sex: "female"
    },
    {
        name: "Papa",
        age: 75,
        sex: "male"
    },
    {
        name: "Papa",
        age: 55,
        sex: "male"
    },
]


const femalePeople = people.find(person => person.sex === "female")!

export {}

