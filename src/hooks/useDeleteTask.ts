import { deleteTask } from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (taskId: number) => deleteTask(taskId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
        onError: ( error ) => {
            console.error("Delete error: ", error.message);
        }
    })
}