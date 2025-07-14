import { useUserTodo } from "./hooks/useUserTodo";
import { type TodosType } from "./Types";
import { useDeleteTask } from "./hooks/useDeleteTask";

const UserToDo = () => {
    
    const { data: todos, isLoading, error } = useUserTodo();
    const { mutate: deleteTask } = useDeleteTask();
    
    const handleDelete = ( taskId : number ) => {
        deleteTask( taskId );
    }

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

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
                    <button onClick={() => { handleDelete(todo.id) }}>delete Task</button> 
                </div>
            ))}
        </div>
    )
}
export default UserToDo