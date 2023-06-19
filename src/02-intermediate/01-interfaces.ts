interface User{
    readonly email: string;
    readonly login: string;
    password: string;
}

interface User{
    isOnline?: boolean;
}

interface Person{
    readonly firstName: string;
    lastName: string;
    phone?: string;
    yearOfBirth?: number;
}

interface Employee extends User, Person{
    contractStart: Date;
}

interface Developer extends  Employee{
    skills: string[];
    level?: "junior" | "middle" | "senior";
    phone: string;
    say(): void;
    code?: (arg: string) => void;
}


export {}
// class MyDeveloper implements Developer {}


