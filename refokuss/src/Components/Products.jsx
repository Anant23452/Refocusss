import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

function Products() {
  const [pos, setPos] = useState(0);
  
  const move =(val)=>{
    setPos(val*23)
  }
  var products = [
    {
      title: "arquit",
      desc: "Lorem ipsum dolor sit amet consectetur eligendi.",
      live: true,
      case: false,
    },
    {
      title: "anika",
      desc: "Lorem ipsum dolor sit amet consectetur eligendi.",
      live: true,
      case: false,
    },
    {
      title: "anant",
      desc: "Lorem ipsum dolor sit amet consectetur eligendi.",
      live: true,
      case: true,
    },
    {
      title: "Abhisekh",
      desc: "Lorem ipsum dolor sit amet consectetur eligendi.",
      live: true,
      case: false,
    },
  ];
  return (
    <div className="bg-gray-900 mt-10 relative">
      {products.map((item, index) => {
        return <Product count={index} item={item} move={move} />;
      })}
      <div className="w-full h-full  absolute top-0 pointer-events-none  ">
        <motion.div
          initial={{ y: pos, x: "-30%" }}
          animate ={{y:pos+`rem`}}
          
          className="window absolute bg-blue-200 w-[25rem] h-[23rem] left-[40%] overflow-hidden "
        >
          <motion.div animate={{y:pos*23 +`rem`}} className="seen bg-blue-600 w-full h-full  "></motion.div>
          <motion.div animate={{y:pos*23 +`rem`}} className="seen bg-blue-600 w-full h-full  "></motion.div>
          <motion.div animate={{y:pos*23 +`rem`}} className="seen bg-blue-600 w-full h-full  "></motion.div>
          <motion.div animate={{y:pos*23 +`rem`}} className="seen bg-blue-600 w-full h-full  "></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
