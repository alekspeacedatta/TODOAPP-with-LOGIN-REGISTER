import { fetchApiStatus } from "../api";
import { useQuery } from "@tanstack/react-query";

export const useApiStatus = () => {
    return useQuery({
        queryKey: ['health'],
        queryFn: fetchApiStatus
    })
}