import React from 'react'

function DashBoard() {
  return (
    <>
    <div className='w-full bg-new-400 h-auto flex'>
      <div className='w-2/3'>
      <img className='h-full' src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt/>
      </div>
      <div className='w-1/3 flex justify-center'>
        <div className='w-[80%] h-4/5 bg-new-800 mt-10 border-double border-4 border-sky-500 rounded-3xl justify-center text-slate-100' >
          <h3 className='text-xl'>Let us Serve you better</h3>
          <p>
          Don’t wait in a line to enjoy your meal. Reserve a table in advance with us.
          </p>
          <p>Date</p>
          <input />
          <p>Time</p>
          <input/>
          <button>Reserve Table</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default DashBoard
