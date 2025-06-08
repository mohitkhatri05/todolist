import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-yellow-700 text-white flex justify-between items-center p-5'>
    <div className="logo">
        <span className='mx-7 font-bold'>cyanicTASK</span>
    </div>
    <ul className='flex space-x-6'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
    </ul>
   </nav>
  )
}

export default Navbar