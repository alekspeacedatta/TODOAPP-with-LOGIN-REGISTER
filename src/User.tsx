import { useUser } from "./hooks/useUser";
import { useApiStatus } from "./hooks/useApiStatus";
const User = () => {

    const { data: apiHealt, isLoading: healthLoading} = useApiStatus();
    const { data, isLoading, error } = useUser();
    const user = data?.user;

    if(error) return <h1>Error: {error.message}</h1>
    
    return (
        <div className="user-info-api-health">
            <div>
                {healthLoading ? (
                    <h1>API health Loading...</h1>
                ) : 
                (
                    <h1>Backend says that health status: {apiHealt?.status} - timestamp:  {apiHealt?.timestamp}</h1>
                )}
            </div>
            {isLoading ? (<h1>Loading for User...</h1>) : (
                <>
                    <h1>USER CARD</h1>
                    <div className="user">
                        <h3>Welcome Back {user?.name}</h3>
                        <h3>user id: {user?.id}</h3>
                        <h3>email: {user?.email}</h3>
                        <h3>created at: {user?.created_at}</h3>
                    </div>
                </>
            )}
        </div>
    )
}
export default User