"use strict";
const admin = {
    login: "1234",
    role: "admin",
    lastVisited: new Date(2023, 6, 14),
    password: "123",
    isOnline: true,
    email: "123"
};
const user = {
    login: "123",
    lastVisited: new Date(2023, 6, 14),
    password: "123",
    isOnline: true,
    email: "123"
};
function login(user) {
    if (user.login.length > 0 && user.password.length > 0) {
        console.log(`Ваш логин: ${user.password}, пароль:${user.password}`);
    }
}
login(user);
login(admin);
