import React from 'react'

function Product({product,cart,setCart}) {

  const addCart=()=>{
    setCart([...cart,product])
  }
  const removeCart=()=>{
    setCart(cart.filter((c)=>c.id!==product.id))
  }
  return (
   
    <div className='w-[200px] h-[200] border-2 border-slate-500 rounded-md'>

        <div className='w-[100%] h-[150px]'>
            <img className='w-[100%] h-[100%]' src={product.pic} alt="{product.name}" />
        </div>
        <div className='text-center m-1 p-1'>
        <h1 className='font-bold text-slate-700'>{product.name}</h1>
        <h2>price:{product.amt}</h2>
        {
          cart.includes(product)?<button className='bg-red-400 rounded-lg p-2 hover:bg-red-600' onClick={removeCart}>Remove from cart</button> 
          : <button className='bg-green-400 rounded-lg p-2 hover:bg-green-600'onClick={addCart}>Add to Cart</button>
        }
        
        </div>
        


    </div>

  )
}

export default Product