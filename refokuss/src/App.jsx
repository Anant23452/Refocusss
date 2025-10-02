import { useState } from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'



function App() {
 

  return (
   <>
   <div className="bg-gray-900  w-screen  h-screen text-white">
   <Navbar/>
   <Work/>
   <Stripes/>
   <Products/>
   </div>
   
   </>
  )
}

export default App
