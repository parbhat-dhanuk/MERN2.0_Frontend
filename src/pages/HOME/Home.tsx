import { useEffect } from "react"
import Card from "../../globals/COMPONENTS/CARD/Card"
import Navbar from "../../globals/COMPONENTS/NAVBAR/Navbar"
import Hero from "./herosection/Hero"
import { useAppDispatch, useAppSelector } from "../../STORE/hooks"
import { fetchProducts } from "../../STORE/productSlice"


const Home = () => {

  const dispatch = useAppDispatch() 
  const {product} = useAppSelector((state)=>state.products)
   
console.log(product)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])


  return (
    <>
      <Navbar />
    
      <Hero/>
   
    <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-1 mx-4">Featured products</h2>
<div className="flex flex-wrap justify-center gap-10">
 
{
  product.length>0 && product.map((pd)=>{
    return(
      <Card key={pd.id} data={pd} />

    // key={pd.id} yo chai unique key wala error naaayos vanera deko aru keii hoena nagarda ni hunxa but garda better
    )
  })
}


</div>
  </>
  )
}

export default Home