type Level = "junior" | "middle" | "senior"

interface Developer{
    login: string;
    skills: string[];
    level: Level;
}

function gradeDeveloper(user: {level: Level}, newLevel: Level){
    user.level = newLevel;
}

const dev1: Developer = {
    level: "junior",
    login: "123",
    skills: ["HTML, CSS, JS"]
}

gradeDeveloper(dev1, "middle")