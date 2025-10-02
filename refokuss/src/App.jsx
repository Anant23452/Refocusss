import { useState } from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquees from './Components/Marquees'



function App() {
 

  return (
   <>
   <div className="bg-gray-900  w-screen  h-screen text-white">
   <Navbar/>
   <Work/>
   <Stripes/>
   <Products/>
   <Marquees/>
   </div>
   
   </>
  )
}

export default App
