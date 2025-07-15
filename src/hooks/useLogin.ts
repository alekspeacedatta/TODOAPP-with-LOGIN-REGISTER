import { Login } from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserTodo } from "./useUserTodo";



export const useLogin = () => {
    const { refetch } = useUserTodo();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: Login,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token)
            console.log(`${data.message}`, 'token saved');
            refetch()
            queryClient.invalidateQueries({ queryKey: ['me'] })
        },
        onError: (error: any) => {
            console.error('Login Failed', error.message)
        }
    })
}