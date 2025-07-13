export interface ApiStatus {
    status: string,
    timestamp: string,
}
export interface UserType {
    id: number,
    email: string,
    name: string,
    created_at: string
}
export interface TodosType {    
    id: number,
    title: string,
    description: string,
    completed: boolean,
    user_id: number,
    created_at: string,
    updated_at: string,
}