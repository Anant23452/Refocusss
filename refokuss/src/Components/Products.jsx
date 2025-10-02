import React from 'react'
import Product from './Product'

function Products() {
    var products=[{title:"arquit",desc:"Lorem ipsum dolor sit amet consectetur eligendi.",live:true,case:false},
    {title:"anika",desc:"Lorem ipsum dolor sit amet consectetur eligendi.",live:true,case:false},
    {title:"anant",desc:"Lorem ipsum dolor sit amet consectetur eligendi.",live:true,case:false},
    {title:"Abhisekh",desc:"Lorem ipsum dolor sit amet consectetur eligendi.",live:true,case:false}
    ]
  return (
    <div>
        <Product/>
    </div>
  )
}

export default Products