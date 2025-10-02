import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.6%] px-2 py=3 border-t-2 border-b-2 border-r-2 flex justify-between border-zinc-600 items-center   '>
      <img className='w-10 h-12' src={val.url} alt="" />
      <span className='font-semibold'>{val.number} </span>
    </div>
  )
}

export default Stripe