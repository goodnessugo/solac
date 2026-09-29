import React from 'react'

const LoadAudit = () => {
  return (
    <div className='bg-gray-200 h-[100vh] overflow-x-scroll'>
      <div className='flex items-center justify-center py-3 bg-gray-500 sticky top-0'>
        <h1 className='text-[1.2rem] font-bold text-white'>Load Audit</h1>
      </div>

      {/* Input form */}
      <form action="">
        <div className='flex flex-col p-5 gap-4'>
          {/* Load Name */}
          <div className="load flex flex-col">
            <label htmlFor="load" className='text-[0.8rem]'>Load Name</label>
            <input type="text" placeholder='e.g Lamp' className='shadow-lg rounded-sm p-2 bg-white outline-none' />
          </div>

          {/* Quantity (Qty) */}
          <div className="quantity flex flex-col">
            <label htmlFor="quantity" className='text-[0.8rem]'>Quantity(Qty)</label>
            <input type="text" placeholder='e.g 5pcs' className='shadow-lg rounded-sm p-2 bg-white outline-none' />
          </div>

          {/* Load Watt(W) */}
          <div className="loadWatt flex flex-col">
            <label htmlFor="loadWatt" className='text-[0.8rem]'>Load Watt(W)</label>
            <input type="text" placeholder='e.g 30w' className='shadow-lg rounded-sm p-2 bg-white outline-none' />
          </div>

          {/* Total Load Watt (W) */}
          <div className="totalLoadWatt flex flex-col">
            <label htmlFor="totalLoadWatt" className='text-[0.8rem]'>Total Load Watt (W)</label>
            <input type="text" placeholder='Total Load Watt' className='shadow-lg rounded-sm p-2 bg-white outline-none' />
          </div>

          {/* Duration (h) */}
          <div className="duration flex flex-col">
            <label htmlFor="duration" className='text-[0.8rem]'>Duration (h)</label>
            <input type="text" placeholder='e.g 3hr' className='shadow-lg rounded-sm p-2 bg-white outline-none' />
          </div>

          {/* Watt Hour (Wh)*/}
          <div className="wattHour flex flex-col">
            <label htmlFor="wattHour" className='text-[0.8rem]'>Watt Hour (Wh)</label>
            <input type="text" placeholder='Watt Hour (Wh)' className='shadow-lg rounded-sm p-2 bg-white outline-none' />
          </div>

          <button className='p-2 bg-blue-500 cursor-pointer hover:bg-blue-600 text-white '>Add Load + </button>





          {/* List of Load Items */}
          <div className='flex justify-between items-center'>

            {/* Duration (h) */}
            <div className="duration flex flex-col items-center">
              <label htmlFor="duration" className='text-[0.8rem]'>TOTAL DAILY WattHour(Wh)</label>
              <h1 className='px-15 bg-green-500 text-white font-bold'>2500</h1>
            </div>

            <div className="duration flex flex-col items-center">
              <label htmlFor="duration" className='text-[0.8rem]'>TOTAL LOAD WATT</label>
              <h1 className='px-10 bg-green-500 text-white font-bold'>500</h1>
            </div>

          </div>

<h1 className=' font-bold'>Load List </h1>
          <table className='text-[0.7rem]  table-fixed'>
            <thead>
              <tr>
                <th>Load</th>
                <th>Qty</th>
                <th>Watt</th>
                <th>Total Load</th>
                <th>Duration</th>
                <th>Watt Hour</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >
              <tr className=''>
                <td>Lamp</td>
                <td>5pcs</td>
                <td>30w</td>
                <td>Lamp</td>
                <td>3hr</td>
                <td>Lamp</td>
                <td>
                  <button className='p-2 bg-white border'>Edit</button>
                  <button className='p-2 bg-white border'>X</button>
                </td>
              </tr>
            </tbody>

          </table>






        </div>
      </form>


    </div>
  )
}

export default LoadAudit
