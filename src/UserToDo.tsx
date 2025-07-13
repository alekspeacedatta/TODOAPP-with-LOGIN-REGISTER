import { useEffect, useState } from "react";
import { useUserTodo } from "./hooks/useUserTodo";
import { type TodosType } from "./Types";

const UserToDo = () => {
    // const [ todos, setTodos] = useState<TodosType[]>([]);

    const token = localStorage.getItem('token');

    const { data: todos, isLoading, error } = useUserTodo();

    // useEffect(() => {

    //     fetch('http://localhost:3000/api/todos', {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     .then(res => {
    //         if(!res.ok) throw new Error("Res is not ok");
    //         return res.json();
    //     })
    //     .then(data => {
    //         console.log("User Todos",  data.todos);
    //         setTodos(data.todos)
    //     })
    //     .catch(e => console.error(e.message));

    // }, [todos]) 
    
    // const deleteTask = (taskId : number) => {
    //     fetch(`http://localhost:3000/api/todos/${taskId}`, {
    //         method: 'DELETE',
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     .then(res => {
    //         if(!res.ok) throw new Error("DelteTask Res is not Ok");
    //         setTodos(prev => prev.filter(todo => todo.id !== taskId));
    //     })
    //     .catch(e => console.error(e.message))
    // }
    return (
        <div>
            <h1>User Todos:</h1>
            {todos?.map((todo: TodosType) => (
                <div key={todo.id}>
                    <h2>Task Title: {todo.title}</h2>
                    <p>Task Description: {todo.description}</p>
                    <input type="radio" checked={todo.completed} />
                    <p>created at: {todo.created_at}</p>
                    <p>updated at: {todo.updated_at}</p>
                    {/* <button onClick={() => { deleteTask(todo.id) }}>delete Task</button> */}
                </div>
            ))}
        </div>
    )
}
export default UserToDo