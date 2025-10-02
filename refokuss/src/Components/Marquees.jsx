import React from 'react'
import Marquee from './Marquee'

function Marquees() {
    var images=[
        ["https://cdn.prod.website-files.com/634f69e43807ee7b3741ad25/634f6d88cb905b0d0744223f_logoipsum-286%20(1).svg","https://cdn.prod.website-files.com/634f69e43807ee7b3741ad25/634f6d8b3807ee593941e3f1_logoipsum-287.svg","https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/dot.svg","https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/avax.svg","https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/matic.svg","https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/xrp.svg","https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/ada.svg","https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/sol.svg"

        ],
        ["https://cdn.prod.website-files.com/634f69e43807ee7b3741ad25/634f6d88cb905b0d0744223f_logoipsum-286%20(1).svg","https://cdn.prod.website-files.com/634f69e43807ee7b3741ad25/634f6d8b3807ee593941e3f1_logoipsum-287.svg","https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/dot.svg","https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/avax.svg","https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/matic.svg","https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/xrp.svg","https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/ada.svg","https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/sol.svg"

        ],
        
    ]
  return (
    <div className='py-8 mt-10 bg-gray-900 w-full relative overflow-hidden'>
        {images.map((items,index)=><Marquee imageurl={items} key={index} />)}
        
    </div>
  )
}

export default Marquees