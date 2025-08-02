import { type UserType } from "../Types";
import { fetchUser } from "../api";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => { 
    return useQuery<UserType>({
        queryKey: ['me'],
        queryFn: fetchUser 
    })
}