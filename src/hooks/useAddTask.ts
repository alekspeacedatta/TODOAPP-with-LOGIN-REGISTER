import { addTask } from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type TaskType } from "../Types";

export const useAddTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({title, description}: TaskType) => addTask(title, description),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
        onError: (error) => {
            console.error("Error while adding task", error.message);
        }
    })
}