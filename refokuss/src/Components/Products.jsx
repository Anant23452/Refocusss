import React from 'react'
import Product from './Product'

function Products() {
    var products=[{title:"arquit",desc:"Lorem ipsum dolor sit amet consectetur eligendi.",live:true,case:false},
    {title:"anika",desc:"Lorem ipsum dolor sit amet consectetur eligendi.",live:true,case:false},
    {title:"anant",desc:"Lorem ipsum dolor sit amet consectetur eligendi.",live:true,case:true},
    {title:"Abhisekh",desc:"Lorem ipsum dolor sit amet consectetur eligendi.",live:true,case:false}
    ]
  return (
    <div className='bg-gray-900 mt-10 relative' >
        {products.map((item,index)=>{
            return <Product index={index} item={item} />
        })}
        <div className="w-full h-full  absolute top-0 pointer-events-none  ">
          <div className="absolute bg-blue-200 w-[32rem] h-[23rem] left-1/3 "></div>
        </div>
    </div>
  )
}

export default Products