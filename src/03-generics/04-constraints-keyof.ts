
// interface Laptop{
//     brand: string,
// }
//
// type F = Laptop["brand"]

export function prop<T, U extends keyof T>(key: U, obj: T): T[U]{
    return obj[key]
}

export function prop1<T>(key: keyof T, obj: T): T[keyof T]{
    return obj[key]
}


const obj1 = {
    a: 1,
    b: 2,
    c: 3,
}

prop("a", obj1)
// prop("d", obj1)


