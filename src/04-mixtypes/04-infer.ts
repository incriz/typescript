function fromPair(pair: [string, string]){
    const [key, value] = pair;

    return{
        [key]: value
    }
}

type FirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never;

const MyPair: FirstArg<typeof fromPair> = ["myKey", "myValue"];

type ConstrutorFirstArg<T> = T extends {new(arg: infer FirsArgument, ...args: any[]): any} ? FirsArgument: never;

class Computer{
    constructor(brand: string) {
    }
}

let brand: ConstrutorFirstArg<typeof Computer> = ""

let dateArg: ConstrutorFirstArg<typeof Date>

fromPair(MyPair )


export {}