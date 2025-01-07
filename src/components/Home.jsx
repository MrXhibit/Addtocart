import React, { useState } from 'react'
import data from '../assets/product.json'
import Product from './Product'

function Home({cart,setCart}) {
  
   const [product]=useState(data)  
    
  return (
    <>
    <h1 className='text-center my-2 font-mono font-bold text-2xl text-slate-600'>ORDER YOUR FAVORITE FOOD</h1>
    <div className='flex flex-wrap gap-4 mt-10 justify-center'>
      {product.map((product)=>
       <Product key={product.id} product ={product} cart={cart} setCart={setCart}/>
      )}
    </div>
    </>
  )
}

export default Home