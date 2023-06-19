"use strict";
function gradeDeveloper(user, newLevel) {
    user.level = newLevel;
}
const dev1 = {
    level: "junior",
    login: "123",
    skills: ["HTML, CSS, JS"]
};
gradeDeveloper(dev1, "middle");
