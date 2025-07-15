import { fetchUserTodos } from "../api";
import { useQuery } from "@tanstack/react-query";
import { type TodosType } from "../Types";

const token = localStorage.getItem('token');

export const useUserTodo = () => {
    return useQuery({
        queryKey: ['todos', token],
        queryFn: fetchUserTodos,
        enabled: !!token
    })
    
}