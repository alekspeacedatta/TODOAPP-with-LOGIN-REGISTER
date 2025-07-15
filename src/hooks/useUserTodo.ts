import { fetchUserTodos } from "../api";
import { useQuery } from "@tanstack/react-query";

const token = localStorage.getItem('token');

export const useUserTodo = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: fetchUserTodos,
        enabled: !!token,
    })
}