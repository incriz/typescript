function sum(a: number, b: number): number{
    return a + b;
}

const sum2 = (a: number, b: number): number => a + b;
const sum3 = function(a: number, b: number): number{
    return a + b;
}

sum(2, 1)

function log(name: string, userId?: string): void{
    console.log("hello", name, "with id", userId || "anonymous")
}

log("Tolik", '231')

function crash(): never{
    throw new Error("crash")
}

export function average(...nums: number[]){
   const sum =  nums.reduce((current, total) => current + total, 0)
    return sum / nums.length;
}


