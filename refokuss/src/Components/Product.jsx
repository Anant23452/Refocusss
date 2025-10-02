import React from 'react'
import Button from './Button'

function Product() {
  return (
    <div className='w-full py-20 px-40 text-white'>
        <div className="max-w-screen-xl mx-auto flex items-center justify-between ">
            <h1 className='text-6xl capitalize font-semibold'>arquit</h1>
            <div className="dets w-1/4 bg-gray-800 p-4 rounded-lg">
                <p>Lorem ipsum dolor sit amet consectetur eligendi.</p>
                <Button  />
            </div>
        </div>
    </div>
  )
}

export default Product