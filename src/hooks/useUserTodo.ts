import { fetchUserTodos } from "../api";
import { useQuery } from "@tanstack/react-query";

export const useUserTodo = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: fetchUserTodos
    })
}