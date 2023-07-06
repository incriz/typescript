import {keys} from "../03-generics/task/02-generics-constraints";

const x = 16;
const isXNegative = x >= 0 ? "no" : "yes";

interface StringRecord {
    [key: string]: string;
}

interface DateRecord {
    [key: string]: Date;
}

export type MyRecord<T> = T extends string ? StringRecord : DateRecord;

type Obj1 = MyRecord<string>
type Obj2 = MyRecord<number>
const o1: Obj1 = {
    r: "",
    res: ""
}

const y = typeof NaN;

export {}
