import { useMutation } from "@tanstack/react-query";
import { Register } from "../api";

export const useRegister = () => {

    return useMutation({
        mutationFn: Register,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token)
            console.log(`${data.message}`, 'token saved');
            
        },
        onError: (error) => {
            console.error('Login Failed', error.message)
        }
    })
}