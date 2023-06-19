function example1(x?: string | number){
    if (typeof x === "string"){
        x.toUpperCase()
    } else if (typeof x === "number"){
        x.toFixed(2)
    } else if(x === undefined){
        console.log("no value")
    } else {
        x
    }
}

function example2(strs: string | string[] | null){
    if(strs && typeof strs === "object"){
        strs.push()
    } else if ( typeof strs === "string"){
        strs.toUpperCase()
    }
}

function expample3(x: number[] | Date){
    if(x instanceof Date){
        x.getMonth()
    } else {
        x.push()
    }
}

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function move(animal: Fish | Bird){
    if("swim" in animal){
        return animal.swim()
    }

    return animal.fly()
}

export {}


