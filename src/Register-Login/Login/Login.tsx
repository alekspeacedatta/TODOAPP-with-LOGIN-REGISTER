import { useState} from "react";
import '../Register-Login.css'
import { useLogin } from "../../hooks/useLogin";

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { mutate: login } = useLogin();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        login({ email, password})
        setEmail('');
        setPassword('');
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