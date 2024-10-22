import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState, Product, ProductState } from "./@types/productType"
import { Status } from "./@types/authType"
import { AppDispatch } from "./store"
import API from "../http"

const productSlice = createSlice({
    name:"product",
    initialState:initialState,
    reducers:{
      setProduct(state:ProductState,action:PayloadAction<Product[]>){
         state.product=action.payload
      },
      setStatus(state:ProductState,action:PayloadAction<Status>){
        state.status=action.payload
      }
    }
})

 export const {setProduct,setStatus} = productSlice.actions
 export default productSlice.reducer


 //Fetch products

 export function fetchProducts(){
    return async function fetchProductThunk(dispatch:AppDispatch){
        try {
            const response = await API.get("/admin/product")
            if(response.status===200){
                const {data} = response.data
                dispatch(setStatus(Status.success))
                dispatch(setProduct(data))
            }else{
                dispatch(setStatus(Status.error))
            }
        } catch (error) {
            dispatch(setStatus(Status.error))
        }
    }
 }