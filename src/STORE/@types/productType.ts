import { Status } from "./authType"

export interface Product{
    id:string,
    productName:string,
    productDescription:string ,
    productPrice:number,
    productTotalStockQty:number,
    productImageUrl:string,
    createdAt:string,
    updatedAt:string,
    userId:string,
    categoryId:string,
    User:User,
    Category:Category
}

interface User{
    id:string,
    email:string,
    username:string
}
 interface Category{
    id:string,
    categoryName:string
}

export interface ProductState{
    product:Product[],
    status:Status,
    singleProduct:Product|null
}

export const initialState:ProductState={
     product:[],
     status:Status.loading,
     singleProduct:null
}