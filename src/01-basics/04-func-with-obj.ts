function printPoint(point:{x: string, y: string}): void{
    console.log(`Кординат х: ${point.x} и у: ${point.y}`)
}

const obj1 ={
    x: "1",
    y: "2",
}
printPoint(obj1)

const obj2 ={
    x: "1",
    y: "2",
    z: "4",
}

printPoint(obj2)

function printName(user: {
    firstName: string,
    lastName?: string,
}) : void {
    console.log("Hello", user.firstName.toUpperCase())

    if(user.lastName){
        console.log("Nice to meet you Mr.", user.lastName.toUpperCase())
    }

}

printName({firstName: "Tolik"})
printName({firstName: "Tolik", lastName: "Rudyakov"})