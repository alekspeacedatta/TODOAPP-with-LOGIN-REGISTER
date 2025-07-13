import { fetchUser } from "../api";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => { 
    return useQuery({
        queryKey: ['me'],
        queryFn: fetchUser 
    })
}
