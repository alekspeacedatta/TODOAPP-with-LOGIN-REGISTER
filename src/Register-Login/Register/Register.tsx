import { useState } from 'react'
import '../Register-Login.css'

const Register = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');


    const handleSubmit = async (e: any) => {
        const res = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            }),
        })
        
        const data = await res.json();
        if(res.ok && data.token){
            localStorage.setItem('token', data.token);
            console.log(`${data.message}, token saved`);
        } else {
            console.error('Register failed: ', data.message);
        }
        e.preventDefault();
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
                <section>
                    <label htmlFor="">Name: {name}</label>
                    <input type="text" onChange={e => setName(e.target.value)} placeholder="enter your password" value={name}/>
                </section>
                <input type="submit"/>
            </form> 
            
        </div>
    )
}
export default Register