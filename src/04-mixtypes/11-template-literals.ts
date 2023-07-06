export {}

type Side = "top" | "right" | "bottom" | "left";

type Margin = `margin${"" | Capitalize<Side>}`;
type Padding = `padding${"" | Capitalize<Side>}`

type Direction = "down" | "left" | "right" | "up"
type Position = "top" | "bottom";
type Entry = "in" | "out"

type FadeClassNames = `fade${Capitalize<Entry>}${Capitalize<"" | Direction | Position>}`;

interface Car{
    brand: string,
    model: string,
    year: number,
}

type CarFactory = {
    [Key in keyof Car as `set${Capitalize<Key>}`]: (car: Car, value: Car[Key]) => void
}
