interface User {
    login: string;
    password: string;
    email: string;
    isOnline: boolean;
    lastVisited: Date;
}

interface Admin extends User{
    role: string;
}

const admin: Admin = {
    login: "1234",
    role: "admin",
    lastVisited: new Date(2023, 6, 14),
    password: "123",
    isOnline: true,
    email: "123"
}

const user: User = {
    login: "123",
    lastVisited: new Date(2023, 6, 14),
    password: "123",
    isOnline: true,
    email: "123"
}

export function login(user: {login: string, password: string}): void{
    if(user.login.length > 0 && user.password.length > 0){
        console.log(`Ваш логин: ${user.password}, пароль:${user.password}`)
    }
}

login(user)
login(admin)