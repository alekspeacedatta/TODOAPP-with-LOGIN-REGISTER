import { fetchUserTodos } from "../api";
import { useQuery } from "@tanstack/react-query";
import { type TodosType } from "../Types";

export const useUserTodo = () => {
    return useQuery<TodosType[]>({
        queryKey: ['todos'],
        queryFn: fetchUserTodos
    })
    
}