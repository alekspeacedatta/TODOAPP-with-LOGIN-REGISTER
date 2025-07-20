import type { LoginUserType } from "./Types";
import { type RegisterUserType } from "./Types";
const API_BASE = 'http://localhost:3000'
export const fetchUser = async () => {
    const token = localStorage.getItem('token');
    if(!token) throw new Error("Token1 is not found");
    
    const res = await fetch(`${API_BASE}/api/auth/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    if(!res.ok) throw new Error("Getting User Res Is Not Ok");
    return res.json();
}
export const fetchApiStatus = async () => {
    const res = await fetch(`${API_BASE}/health`);
    if(!res.ok) throw new Error("Health Fetch Res Is Not OK");
    return res.json();
}
export const fetchUserTodos = async () => {
    const token = localStorage.getItem('token')
    const res = await fetch(`${API_BASE}/api/todos`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if(!res.ok) throw new Error("Error FetchTodos Res Is Not OK");
    const data  = await res.json();

    return data.todos;
}
export const deleteTask = async (taskId: number) => {
    const token = localStorage.getItem('token')
    const res = await fetch(`${API_BASE}/api/todos/${taskId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    if(!res.ok) throw new Error("Error, DeleteTask Res Is Not Ok");
}
export const addTask = async ( title: string, description: string ) => {
    const token = localStorage.getItem('token')

    const res = await fetch(`${API_BASE}/api/todos`, {
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
    const res = await fetch(`${API_BASE}/api/auth/login`, {
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
    const res = await fetch(`${API_BASE}/api/auth/register`, {
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