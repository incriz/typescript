type Status = "ok" | "loading" | "error"

const staticX: Status = "ok"

const arr: (string | number)[] = []

function printId(id: string | number): void{
    if (typeof id === "string")
        console.log(id.toUpperCase())
    else 
        console.log(id)
}

function welcome(person: [string, string] | string): string | number{
    if (Array.isArray(person)){
        console.log("Hi", person.join(""))
        return 1
    }else {
        console.log("hi", person)
        return person
    }
}