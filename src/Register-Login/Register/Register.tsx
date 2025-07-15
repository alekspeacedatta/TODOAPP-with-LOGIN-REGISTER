import { useState } from 'react'
import '../Register-Login.css'
import { useRegister } from '../../hooks/useRegister';

const Register = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');

    const { mutate: register } = useRegister();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        register( { email, password, name } )
        setEmail('');
        setPassword('');
        setName('');
    }
    return (
        <div className='form register'>
            <h1>Register</h1>
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
                <button type='submit' >Submit</button>
            </form> 
            
        </div>
    )
}
export default Register