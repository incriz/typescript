function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any ): any{
    return value[0]
}

const x = head("str")
const y = head([1, 2, 3])

export {}