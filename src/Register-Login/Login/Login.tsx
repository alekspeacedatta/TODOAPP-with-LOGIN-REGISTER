import { useState} from "react";
import '../Register-Login.css'

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const data = await res.json();
        
        if(res.ok && data.token){
            localStorage.setItem('token', data.token);
            console.log(`${data.message}, token saved`);
        } else {
            console.error('Register failed: ', data.message);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <section>
                    <label >Email: {email}</label>
                    <input type="text" onChange={e => setEmail(e.target.value)} placeholder="enter your email" value={email} />
                </section>
                <section>
                    <label htmlFor="">Password: {password}</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} placeholder="enter your password" value={password}/>
                </section>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default Login