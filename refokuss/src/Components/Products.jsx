import React from 'react'
import Product from './Product'

function Products() {
    var products=[{title:"arquit",desc:"Lorem ipsum dolor sit amet consectetur eligendi.",live:true,case:false},
    {title:"anika",desc:"Lorem ipsum dolor sit amet consectetur eligendi.",live:true,case:false},
    {title:"anant",desc:"Lorem ipsum dolor sit amet consectetur eligendi.",live:true,case:true},
    {title:"Abhisekh",desc:"Lorem ipsum dolor sit amet consectetur eligendi.",live:true,case:false}
    ]
  return (
    <div className='bg-gray-900' >
        {products.map((item,index)=>{
            return <Product index={index} item={item} />
        })}
    </div>
  )
}

export default Products