import React from 'react'

function Marquee({imageurl}) {
  return (
    <div className='flex w-full py-5 gap-20 whitespace-nowrap overflow-hidden justify-center ' >
        {imageurl.map((url)=><img src={url}  className='w-20  flex-shrink-0' /> )}
    </div>
  )
}

export default Marquee