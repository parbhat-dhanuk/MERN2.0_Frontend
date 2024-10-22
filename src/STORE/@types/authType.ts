
export interface RegisterData{
    username:string,
    email:string,
    password:string
}

export interface LoginData{
    email:string,
    password:string
}

export interface User{
    username:string,
    email:string,
    password:string,
    token:string | null
}

export interface AuthState{
    user : User,
    status: Status,
    
}

export enum Status{
    loading="loading",
    success="success",
    error="error"
}

export const initialState:AuthState={
    user : {} as User,
    status:Status.loading,
   
    
    
}