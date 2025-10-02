import React from 'react'
import Stripe from './Stripe'

function Stripes() {
  var data =[{url:"",number:"48"},
{url:"",number:"24"},
{url:"",number:"12"},
{url:"",number:"6"},
{url:"",number:"3"},
{url:"",number:"2"},
{url:"",number:"1"}
  ]
  return (
    <div className='flex gap-4 overflow-x-scroll p-4 bg-red-600' >
   <Stripe/>
    </div>
  )
}

export default Stripes