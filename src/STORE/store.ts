import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import productSlice from "./productSlice"

const store = configureStore({
    reducer : {
        auth : authSlice,
        products:productSlice

        
    }
})

export default store


export type AppDispatch = typeof store.dispatch //useDispatch hook ko type

export type RootState =  ReturnType<typeof store.getState>   //useSelector hook ko type
