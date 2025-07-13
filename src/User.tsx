import { useUser } from "./hooks/useUser";
import { useApiStatus } from "./hooks/useApiStatus";
const User = () => {

    const { data: apiHealt, isLoading: healthLoading} = useApiStatus();
    const { data, isLoading, error } = useUser();
    const user = data?.user;

    if(error) return <h1>Error: {error.message}</h1>
    
    return (
        <>
            <div>
                {healthLoading ? (
                    <h1>API health Loading...</h1>
                ) : 
                (
                    <h1>Backend says that health status: {apiHealt.status} - timestamp:  {apiHealt.timestamp}</h1>
                )}
            </div>
            {isLoading ? (<h1>Loading for User...</h1>) : (
                <div>
                    <h1>USER:</h1>
                    <p>user id: {user?.id}</p>
                    <p>user email: {user?.email}</p>
                    <p>user name: {user?.name}</p>
                    <p>user created at: {user?.created_at}</p>
                </div>
            )}
        </>
    )
}
export default User