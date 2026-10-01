import React from 'react'

const Navigation = () => {



  return (
     <div className='flex items-center justify-between px-2 pt-3 bg-gray-500 sticky top-0'>
        <button className='text-[1.2rem] font-bold text-white py-2 px-3 focus:bg-gray-400 hover:bg-gray-400 cursor-pointer'>Load</button>
        <button className='text-[1.2rem] font-bold text-white py-2 px-3 focus:bg-gray-400 hover:bg-gray-400 cursor-pointer'>Panels</button>
        <button className='text-[1.2rem] font-bold text-white py-2 px-3 focus:bg-gray-400 hover:bg-gray-400 cursor-pointer'>Battery</button>
        <button className='text-[1.2rem] font-bold text-white py-2 px-3 focus:bg-gray-400 hover:bg-gray-400 cursor-pointer'>Inverter</button>
        <button className='text-[1.2rem] font-bold text-white py-2 px-3 focus:bg-gray-400 hover:bg-gray-400 cursor-pointer'>Charge.Con</button>
       </div>

  )
}

export default Navigation
