export {}

type WellKnowBrands = "apple" | "lenovo" | "hp" | "dell" | "samsung" | "microsoft";


type Names = Record<string, any>
type BrandNames = Record<WellKnowBrands, any>

// const myBrands: BrandNames = {
//     apple: ""
// }

interface Todo{
    id: string,
    title: string,
    description: string,
    completed: boolean,
    createdAt: number,
}

type SimpleTodo = Pick<Todo, "id"| "title" | "completed">

const todo1: SimpleTodo = {
    id: "asd",
    title: "Learn TS",
    completed: false
}

type SimpleTodo2 = Omit<Todo, "description" | "createdAt">

type NewTodo =  Pick<Todo, "title" | "description">

