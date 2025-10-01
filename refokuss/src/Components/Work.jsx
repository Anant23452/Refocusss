import React from 'react'

const images=[
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6867e5af4ce59d080b9ebf42_branding-big.webp",top:"50%",left:"50%",isActive:false},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9.webp",top:"52%",left:"48%",isActive:false},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10.webp",top:"47%",left:"52%",isActive:false},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb122fb3c4a2a89a21ed_1.webp",top:"51%",left:"49%",isActive:false},
    {url:"https://i.pinimg.com/1200x/eb/d2/c9/ebd2c947fa4e41abe889f8646be506bc.jpg",top:"53%",left:"53%",isActive:false},
    {url:"https://i.pinimg.com/736x/1d/e5/29/1de52947cf871b610fb4276053dd137f.jpg",top:"55%",left:"52%",isActive:false},
]
function Work() {
  return (
    <div className=' w-full '>
        <div className="relative max-w-screen-xl mx-auto  w-[70vw] text-center">
            <h1 className="text-[30vw] leading-none tracking-tight font-medium select-none ">work</h1>
        <div className=" absolute top-0 w-full h-full bg-blue-400">
            {images.map((image,index)=>{
             return  <img className='w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%] ' src={image.url} alt="" style={{top:image.top,left:image.left}} />
            })}
        </div>
        </div>
        </div>
  )
}

export default Work