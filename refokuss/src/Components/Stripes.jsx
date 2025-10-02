import React from 'react'
import Stripe from './Stripe'

function Stripes() {
  var data =[{url:"https://i.pinimg.com/736x/93/7d/b6/937db623e28b571bc55aa1560cbba1f0.jpg",number:"48"},
{url:"https://i.pinimg.com/736x/9f/e7/fe/9fe7fe99de3b2afa7b75dd353345f901.jpg",number:"24"},
{url:"https://i.pinimg.com/736x/09/50/aa/0950aaf7b4e9d8f73768839072744ed8.jpg",number:"12"},
{url:"https://i.pinimg.com/736x/e5/d7/7c/e5d77c8dd7e42e65820a508d0714c2ff.jpg",number:"6"},
{url:"https://i.pinimg.com/736x/52/aa/ec/52aaec53ae51a59e3d8df5e496c498de.jpg",number:"3"},
{url:"https://i.pinimg.com/736x/1f/01/04/1f010495feaea5b6f995fa0947695a3e.jpg",number:"2"},

  ]
  return (
    <div className='flex gap-4 overflow-x-scroll p-4 mt-20  ' >
  {data.map((item,index)=>{
    return   <Stripe key={index} val ={item} />
  })}
    </div>
  )
}

export default Stripes