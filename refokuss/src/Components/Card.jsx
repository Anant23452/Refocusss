import React from 'react'
import { GoArrowRight } from "react-icons/go";

function Card({width,start,para}) {
  return (
    <div className={`bg-zinc-700 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`} >
      <div className="w-full">
          <div className="w-full flex items-center justify-between">
            <h3>one heading</h3>
            <GoArrowRight  />

        </div>
        <h1 className='text-3xl semibold'>whatever heading</h1>
      </div>
      <div className="down w-full ">
       {
        start &&(
            <>
             <h1 className="text-4xl  font-bold tracking-tight leading-none">Start a project</h1>
        <button className="rounded-full py-2 px-3 mt-5 border-1 border-zinc-50">Contact Us</button>
            </>
        )
       }
      {
        para && (
              <p className='text-sm text-zinc-5-- font-medium mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        )
      }
      </div>
    </div>
  )
}

export default Card