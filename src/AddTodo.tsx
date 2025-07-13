import { useEffect, useState } from "react";

const AddTodo = () => {


    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ token, setToken ] = useState<string | null>('');

    useEffect(() => {
        const token2 = localStorage.getItem('token');
        setToken(token2);
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        fetch('http://localhost:3000/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                title: title,
                description: description
            })
        })
        .then(res => {
            if(!res.ok) throw new Error(" AddTodo res is not ok ");
            return res.json();
        })
        .catch(e => console.error(e.message))
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
            <h1>Token: {token}</h1>
        </div>
    )
}
export default AddTodo