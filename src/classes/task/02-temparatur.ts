export class Temperature {
    constructor(public celsius: number) {

    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value: number) {
        this.celsius = (value - 32) / 1.8;
    }

    public static fromFahrenheit(value: number) {
        return new Temperature(Math.round((value - 32) / 1.8));
    }
}



const temp0 = Temperature.fromFahrenheit(64)
temp0.celsius

const temp1 = new Temperature(24)
temp1.fahrenheit = 44
