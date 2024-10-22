import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import API from "../http"
import { AuthState, initialState, LoginData, RegisterData, Status, User } from "./@types/authType"
import { AppDispatch } from "./store"




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
        },
        resetToken(state:AuthState){
         state.user.token=null
        }
       
       
    }

})

 export const  {setUser,setStatus,resetStatus,setToken,resetToken} = authSlice.actions
 export default authSlice.reducer

 //REGISTER

 export function register(data:RegisterData){
  return async function registerThunk(dispatch:AppDispatch){
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
    return async function loginThunk(dispatch:AppDispatch){
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