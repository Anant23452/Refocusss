import React from 'react'
import { SlActionRedo } from "react-icons/sl";

function Button({title="Get started"}) {
  return (
    <div className='w-fit px-3 py-2 bg-zinc-100 text-black rounded-full'>
        <span className="text-sm font-medium">{title}</span>
        <SlActionRedo className='inline-block ml-2 '/>
        </div>
  )
}

export default Button