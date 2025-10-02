import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full bg-red-700 '>
        <div className="w-[80vw] max-w-screen-xl mx-auto bg-green-700 py-20 flex gap-2">

        <Card width={"basis-1/3"} start={false} para={true} />
        <Card width={"basis-2/3"} start={true} para ={false} />
        </div>
    </div>
  )
}

export default Cards