import { useEffect, useState } from "react"
import { type ApiStatus, type UserType} from "./Types";
const User = () => {

    const [ message, setMessage ] = useState<ApiStatus | null> ( null );
    const [ user, setUser ] = useState<UserType | null >(null)
    
    useEffect( () => {
        fetch('http://localhost:3000/health')
        .then(res => res.json())
        .then(data => setMessage(data))
        .catch(e => console.error(e));        


        
        const token = localStorage.getItem('token');

        if(!token){
            console.error('token does not exsist') 
            return  
        } 
        

        fetch('http://localhost:3000/api/auth/me', {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        .then(res => {
            if(!res.ok) throw new Error("Res error");
            return res.json();
        })
        .then(data => {
            console.log('User Data: ', data.user);
            setUser(data.user);
        })
        .catch(e => console.error(e.message));

    }, [])

    return (
        <>
            <div>
                <h1>Backend says that health status: {message?.status} - timestamp:  {message?.timestamp}</h1>
            </div>
            <div>
                <h1>USER:</h1>
                <p>user id: {user?.id}</p>
                <p>user email: {user?.email}</p>
                <p>user name: {user?.name}</p>
                <p>user created at: {user?.created_at}</p>

            </div>
        </>
        
    )
}
export default User