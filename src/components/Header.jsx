import React from 'react'
import {Link} from 'react-router-dom'

function Header({cart}) {
  return (
    <div className='flex justify-between bg-slate-600 text-white p-4'>
      <div>Food Cart</div>
    <div className='flex '>
     <div className='underline'>
     <Link to={'/'}>Home</Link>
     </div>
        
     <div className='ml-4'>
        <Link to={'/Cart'}>
        <span className='mr-1 text-yellow-500'>({cart.length})</span>View Cart</Link>
     </div>
     </div>   
    
      
    </div>
  )
}

export default Header