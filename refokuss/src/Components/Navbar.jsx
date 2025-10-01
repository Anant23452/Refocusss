import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xs mx-auto py-6 bg-gray-900 flex items-center w-[70vw] justify-between gap-1 px-6 border-b-[1px] border-zinc-500 ' >
       <div className="nleft flex items-center">
         <img src="https://i.pinimg.com/736x/92/c9/c4/92c9c49f4e0316573a1c9532eafbc66f.jpg" alt="" className='w-[2vw] h-[4vh]  ' />
       <div className="links flex gap-10 ml-7">
         {['Home','About','Contact','Blog','Career'].map((item,index)=>(<a href="" className='text-white flex items-center g-1' >
            {item.length===6?<span className='w-[2px] h-3 bg-zinc-500 mr-1 '></span>:null}
           {index===1 && <span style={{boxShadow:"0 0 0.25em #00FF19"}} className="inline-block w-1 h-1 rounded-full bg-green-300 "></span>}
            {item} </a>))}
       </div>
       </div>
       <Button/>
    </div>
  )
}

export default Navbar