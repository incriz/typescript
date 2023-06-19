interface IProduct{
    price: number,
    isNew: boolean,
    isSale: boolean,
    title: string
}

interface IVehicle{
    wheels: number,
    year: number,
    brand: string,
}

interface ICar extends IVehicle, IProduct{
    type: string,
    model: string,
}

type Product = {
    title: string,
    price: number,
    isNew: boolean,
    isSale?: boolean,

}

type Vehicle = {
    wheels: number,
    year: number,
    brand: string,
}

type Car = Product & Vehicle &{
    type: string,
    model: string,
}

export {}


