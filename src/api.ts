const token = localStorage.getItem('token');
export const fetchUser = async () => {
    const res = await fetch('http://localhost:3000/api/auth/me', {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    if(!res.ok) throw new Error("Getting User Res Is Not Ok");
    return res.json();
}
export const fetchApiStatus = async () => {
    const res = await fetch('http://localhost:3000/health');
    if(!res.ok) throw new Error("Health Fetch Res Is Not OK");
    return res.json();
}
export const fetchUserTodos = async () => {
    const res = await fetch('http://localhost:3000/api/todos', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if(!res.ok) throw new Error("Error FetchTodos Res Is Not OK");
    const data  = await res.json();

    return data.todos;
}
export const deleteTask = async (taskId: number) => {
    
    const res = await fetch(`http://localhost:3000/api/todos/${taskId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    if(!res.ok) throw new Error("Error, DeleteTask Res Is Not Ok");
}
export const addTask = async ( title: string, description: string ) => {
    const res = await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            title: title,
            description: description
        })
    })
    if(!res.ok) throw new Error("Error Addgin Task Res Is Not Ok");
    return res.json();
}