import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full bg-red-700 '>
        <div className="w-[80vw] max-w-screen-xl mx-auto bg-green-700 py-20 flex gap-5">

        <Card/>
        <Card/>
        </div>
    </div>
  )
}

export default Cards