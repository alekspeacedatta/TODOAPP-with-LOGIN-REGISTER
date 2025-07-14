import { useEffect, useState } from "react";
import { useAddTask } from "./hooks/useAddTask";
const AddTodo = () => {


    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ token, setToken ] = useState<string | null>('');

    const { mutate: addTask } = useAddTask();

    useEffect(() => {
        const token2 = localStorage.getItem('token');
        setToken(token2);
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        addTask({title: title, description: description})
    }
    return (
        <div>
            <h1>add task to user</h1>
            <form onSubmit={handleSubmit}>
                <section>
                    <label> title: </label>
                    <input type="text" placeholder="enter task title" onChange={e => setTitle(e.target.value)} />
                </section>
                <section>
                    <label> description </label>
                    <input type="text" placeholder="enter task description" onChange={e => setDescription(e.target.value)} />
                </section>
                <input type="submit" />
            </form>
            <div style={{ width: '300px', display: 'flex' }}>
                <h3 >Token: {token}</h3>
            </div>
        </div>
    )
}
export default AddTodo