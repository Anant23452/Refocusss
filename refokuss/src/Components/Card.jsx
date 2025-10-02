import React from 'react'
import { GoArrowRight } from "react-icons/go";

function Card() {
  return (
    <div className='w-1/2 bg-zinc-700 p-5 rounded-xl' >
      <div className="w-full">
          <div className="w-full flex items-center justify-between">
            <h3>one heading</h3>
            <GoArrowRight  />

        </div>
        <h1 className='text-3xl semibold'>whatever heading</h1>
      </div>
      <div className="down w-full mt-60">
        <h1 className="text-4xl  font-bold tracking-tight leading-none">Start a project</h1>
      </div>
    </div>
  )
}

export default Card