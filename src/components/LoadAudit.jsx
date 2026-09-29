import React from 'react'

const LoadAudit = () => {
  return (
    <div className='bg-gray-200 h-[100vh]'>
      <div className='flex items-center justify-center py-3 bg-gray-500'>
        <h1 className='text-[1.2rem] font-bold text-white'>Load Audit</h1>
      </div>

      {/* Input form */}
      <form action="">
        <div className='flex flex-col p-5 gap-4'>
          {/* Load Name */}
          <div className="load flex flex-col">
            <label htmlFor="load" className='text-[0.8rem]'>Load Name</label>
            <input type="text" placeholder='Load Name' className='shadow-lg rounded-sm p-2 bg-white outline-none' />
          </div>

          {/* Quantity (Qty) */}
          <div className="quantity flex flex-col">
            <label htmlFor="quantity" className='text-[0.8rem]'>Quantity(Qty)</label>
            <input type="text" placeholder='Quantity(Qty)' className='shadow-lg rounded-sm p-2 bg-white outline-none' />
          </div>

          {/* Load Watt(W) */}
          <div className="loadWatt flex flex-col">
            <label htmlFor="loadWatt" className='text-[0.8rem]'>Load Watt(W)</label>
            <input type="text" placeholder='Load Watt(W)' className='shadow-lg rounded-sm p-2 bg-white outline-none' />
          </div>

          {/* Total Load Watt (W) */}
          <div className="totalLoadWatt flex flex-col">
            <label htmlFor="totalLoadWatt" className='text-[0.8rem]'>Total Load Watt (W)</label>
            <input type="text" placeholder='Total Load Watt' className='shadow-lg rounded-sm p-2 bg-white outline-none' />
          </div>

          {/* Duration (h) */}
          <div className="duration flex flex-col">
            <label htmlFor="duration" className='text-[0.8rem]'>Duration (h)</label>
            <input type="text" placeholder='Duration (h)' className='shadow-lg rounded-sm p-2 bg-white outline-none' />
          </div>

          {/* Watt Hour (Wh)*/}
          <div className="wattHour flex flex-col">
            <label htmlFor="wattHour" className='text-[0.8rem]'>Watt Hour (Wh)</label>
            <input type="text" placeholder='Watt Hour (Wh)' className='shadow-lg rounded-sm p-2 bg-white outline-none' />
          </div>
        
        <button className='p-2 bg-blue-500 cursor-pointer hover:bg-blue-600 text-white '>Add Load + </button>

        
        </div>


      </form>


    </div>
  )
}

export default LoadAudit
