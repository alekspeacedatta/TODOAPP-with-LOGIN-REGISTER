import type { LoginUserType } from "./Types";
import { type RegisterUserType } from "./Types";
const token = localStorage.getItem('token');
export const fetchUser = async () => {
    const token = localStorage.getItem('token');
    if(!token) throw new Error("Token1 is not found");
    
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
export const Login = async ( {email, password} : LoginUserType ) => {
    const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
    const data = await res.json();
        
    if(!res.ok) throw new Error("Error: Login Res IS not Ok");
    
    return data
}
export const Register = async ( {email, password, name} : RegisterUserType ) => {
    const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            name: name
        })
    })

    const data = res.json();

    return data
}