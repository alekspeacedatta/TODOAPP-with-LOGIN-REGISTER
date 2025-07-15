import { useUserTodo } from "../hooks/useUserTodo";
import { type TodosType } from "../Types";
import { useDeleteTask } from "../hooks/useDeleteTask";
import { useEffect } from "react";

const UserToDo = () => {
    
    const { data: todos, isLoading, error, refetch } = useUserTodo();
    const { mutate: deleteTask } = useDeleteTask();

    useEffect(() => {
        refetch();
    }, [])

    const handleDelete = ( taskId : number ) => {
        deleteTask( taskId );
    }

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <div className="task-section">
            <h1>User Todos:</h1>
            <div className="tasks-container">
                <input className="search" type="text" placeholder="Search for Task"/>
                {todos?.map((todo: TodosType) => (
                    <div key={todo.id} className="task">
                        <section>
                            <h2>{todo.title}</h2>
                            <p>{todo.description}</p>
                            <input type="checkbox" checked={!todo.completed} onClick={() => todo.completed = !todo.completed} />
                        </section>
                        {/* <p>created at: {todo.created_at}</p> */}
                        {/* <p>updated at: {todo.updated_at}</p> */}
                        <button onClick={() => { handleDelete(todo.id) }}>delete Task</button> 
                    </div>
                ))}
            </div>
        </div>
    )
}
export default UserToDo