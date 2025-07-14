import { Login } from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: Login,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token)
            console.log(`${data.message}`, 'token saved');
            
            queryClient.invalidateQueries({ queryKey: ['me'] })
        },
        onError: (error: any) => {
            console.error('Login Failed', error.message)
        }
    })
}