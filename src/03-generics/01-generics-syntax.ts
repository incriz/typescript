type TypeFactory<T> = T;
type XType = TypeFactory<string>
type XType2 = TypeFactory<number>
type XType3 = TypeFactory<boolean>


export function toArray<T>(...arg: T[]): T[] {
    return arg;
}

toArray<number>(1, 2, 3)
toArray("asd", "asd")

function head(value: string):string;
function head(value: readonly []): undefined;
function head<T>(value: readonly T[]): T;
function head(value: any): any{
    return value[0]
}

head(["123", "asd"])
head([1, 2, 3])
head("1")
head([1, "asd"])

const head1 = <T> (value: T[]): T => value[0]

interface ModalData<T> {
    title: string;
    value: T; // number [] boolean
}

const obj1: ModalData<number> = {
    title: "asd",
    value: 12
}

// obj1.value = true

const obj2: ModalData<Array<number>> = {
title: "asd",
value: []
}

export {}