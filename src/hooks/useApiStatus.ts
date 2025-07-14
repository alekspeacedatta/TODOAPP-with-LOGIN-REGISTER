import { fetchApiStatus } from "../api";
import { useQuery } from "@tanstack/react-query";
import { type ApiStatus } from "../Types";

export const useApiStatus = () => {
    return useQuery<ApiStatus>({
        queryKey: ['health'],
        queryFn: fetchApiStatus
    })
}