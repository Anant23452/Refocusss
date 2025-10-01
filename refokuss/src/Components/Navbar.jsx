import React from 'react'

function Navbar() {
  return (
    <div className='max-w-screen-xs mx-auto py-6 bg-sky-900 flex items-center w-[70vw] justify-start gap-10 ' >
        <img src="https://i.pinimg.com/736x/92/c9/c4/92c9c49f4e0316573a1c9532eafbc66f.jpg" alt="" className='w-[5vw] h-[10vh] ml-2 ' />
       <div className="links flex gap-14 ml-20">
         {['Home','About','Contact','Blog','Careers'].map((item)=>(<a href="" className='text-white flex items-center g-1' >
            <span className="inline-block w-1 h-1 rounded-full bg-green-300 "></span>
            {item} </a>))}
       </div>
    </div>
  )
}

export default Navbar