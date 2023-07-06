export function len<T extends {length: number}>(arg: T): number{
    return arg.length
}

len("123")
len(["asd"])
len({length: 12})
// len(1)
// len(true)
