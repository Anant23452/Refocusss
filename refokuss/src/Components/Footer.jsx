import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-gray-900'>
        <div className="max-w-screen-xl py-10 mx-auto flex w-[90vw] justify-between items-center gap-20 ">
            <div className="basis-1/2 ">
            <h1 className='text-[11rem] font-semibold tracking-tigh leading-none '>refocuss.</h1>
            </div>
            <div className="basis-1/2 flex gap-7">
            <div className=" basix-1/3">
                <h4>socials</h4>
              {
                 ["social","twitter","linkedIn"].map((item,index)=><a className='block mt-2 capitalize text-zinc-500' href="" >{item}</a> )
              } 
            </div>
            <div className=" basix-1/3">
                <h4>socials</h4>
              {
                 ["social","twitter","linkedIn"].map((item,index)=><a className='block mt-2 capitalize text-zinc-500' href="" >{item}</a> )
              } 
            </div>
            <div className=" basis-1/2 flex flex-col items-end gap-4">
               <p className='text-right'>Lorem ipsum, dolor sit amet consectetur </p>
                 <img src="https://i.pinimg.com/736x/92/c9/c4/92c9c49f4e0316573a1c9532eafbc66f.jpg" alt="" className='w-[6vw] h-[8vh]  ' />
            </div>
            </div>
        </div>

    </div>
  )
}

export default Footer