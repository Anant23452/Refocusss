import React from 'react'
import { GoArrowRight } from "react-icons/go";

function Card() {
  return (
    <div className='w-1/2 bg-zinc-700 p-5 rounded-xl' >
      <div className="">
          <div className="w-full flex items-center justify-between">
            <h1>one heading</h1>
            <GoArrowRight  />

        </div>
        <h1>whatever heading</h1>
      </div>
    </div>
  )
}

export default Card