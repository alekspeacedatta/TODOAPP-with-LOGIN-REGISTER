import { useEffect, useState } from "react";
import { useAddTask } from "./hooks/useAddTask";
const AddTodo = () => {


    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');

    const { mutate: addTask } = useAddTask();

    

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        addTask({title: title, description: description})
    }
    return (
        <div className="form add-task">
            <h1>add task</h1>
            <form onSubmit={handleSubmit}>
                <section>
                    <label> title: </label>
                    <input type="text" placeholder="enter task title" onChange={e => setTitle(e.target.value)} />
                </section>
                <section>
                    <label> description </label>
                    <input type="text" placeholder="enter task description" onChange={e => setDescription(e.target.value)} />
                </section>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}
export default AddTodo