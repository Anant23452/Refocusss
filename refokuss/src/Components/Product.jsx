import React from 'react'
import Button from './Button'

function Product({item}) {
  return (
    <div className='w-full py-20 px-40 text-white'>
        <div className="max-w-screen-xl mx-auto flex items-center justify-between ">
            <h1 className='text-6xl capitalize font-semibold'>{item.title} </h1>
            <div className="dets w-1/3  p-4 rounded-lg">
                <p>{item.desc} </p>
              <div className="flex items-center gap-5">
                 {item.live && <Button  />}
               {item.case && <Button title='case study'  />}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Product