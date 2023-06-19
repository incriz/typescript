 export  interface Car{
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    name?: string;
    [key: string]: unknown;
}


 export  const car: Car = {
    wheels: 4,
    brand: "BMV",
    type: "Sedan",
    isNew: false,
}

export const car2: Car = {
     wheels: 4,
    brand: "Audio",
    type: "Sedan"
}

car2["go"] = true;