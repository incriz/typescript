const numbers = [1, 2, 3, 4]

const any: (string | number)[] = [1, "2"]

const strs1: string[] = []
const strs2: Array<string> = []

strs1.push("as")

export interface Car{
    wheels: number;
    brand: string;
}

const cars: Car[] = []

cars.push({wheels: 4, brand: "Audi", type: ""})

const arrOfarr: string[][] = []

arrOfarr.push(["", ""])

function printArr(arr: unknown[]) : void{
    arr.forEach((el, index,) => {
        console.log(el, index)
    })
}