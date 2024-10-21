import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import API from "../http"


interface RegisterData{
    username:string,
    email:string,
    password:string
}

interface LoginData{
    email:string,
    password:string
}

interface User{
    username:string,
    email:string,
    password:string,
    token:string
}

interface AuthState{
    user : User,
    status: string
}

export enum Status{
    loading="loading",
    success="success",
    error="error"
}

const initialState:AuthState={
    user : {} as User,
    status:Status.loading
}

const authSlice = createSlice({
    name : "auth",
    initialState:initialState,
    reducers : {
        setUser(state:AuthState,action:PayloadAction<User>){
           state.user=action.payload
        },
        setStatus(state:AuthState,action:PayloadAction<Status>){
             state.status=action.payload
        },
        resetStatus(state:AuthState){
           state.status=Status.loading
        },
        setToken(state:AuthState,action:PayloadAction<string>){
            state.user.token=action.payload
        }
    }

})

 export const  {setUser,setStatus,resetStatus,setToken} = authSlice.actions
 export default authSlice.reducer

 //REGISTER

 export function register(data:RegisterData){
  return async function registerThunk(dispatch:any){
    dispatch(setStatus(Status.loading))

    try {
        const response = await API.post("/register",data)
        if(response.status===200){
            dispatch(setStatus(Status.success))
        }else{
            dispatch(setStatus(Status.error))
        }
    } catch (error) {
        dispatch(setStatus(Status.error))
    }
  }
 }


 //LOGIN

 export function login(data:LoginData){
    return async function loginThunk(dispatch:any){
        dispatch(setStatus(Status.loading))
        
        try {
            const response = await API.post("/login",data)
            
            if(response.status===200){
                const {data}=response.data
              dispatch(setStatus(Status.success))
              dispatch(setToken(data))
              localStorage.setItem("token",data)
            }else{
                dispatch(setStatus(Status.error))
            }
        } catch (error) {
            dispatch(setStatus(Status.error))
        }
    }
 }