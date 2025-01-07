import React, { useEffect, useState } from 'react'

function Cart({cart,setCart}) {
  const [total,setTotal]=useState(0)
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))
  },[cart])
  return (
    <>
    <h1 className='text-center text-2xl font-mono font-bold text-slate-600 underline'>VIEW YOUR CART</h1>
    
      
       {cart.map((product)=>
       <div className='border p-2 m-2'>
       <div className='flex items-center' key={product.id}>
         <img src={product.pic} className='w-[10%] h-[100%]' alt="image"/>
         <div className='ml-2'>
           <h1>{product.name}</h1>
           <h1>Price:{product.amt}</h1>
         </div>
         </div>
         </div>
       )}
     
    <h1 className='text-2xl font-bold font-mono text-slate-600'>Total Amount:{total}</h1>
    </>
  )
}

export default Cart