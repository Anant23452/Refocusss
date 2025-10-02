import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className="max-w-screen-xl py-10 mx-auto flex w-[90vw] bg-blue-900 justify-between items-center gap-20">
            <div className="basis-1/2 bg-red-600">
            <h1 className='text-[11rem] font-semibold tracking-tigh leading-none '>refocuss.</h1>
            </div>
            <div className="basis-1/2 bg-green-600">
            <div className="">
                <h4>socials</h4>
              {
                 ["social","twitter","linkedIn"].map((item,index)=><a className='block mt-2 capitalize text-zinc-500' href="" >{item}</a> )
              } 
            </div>
            </div>
        </div>

    </div>
  )
}

export default Footer