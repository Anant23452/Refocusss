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
          initial={{ y: pos, x: "-50%" }}
          animate ={{y:pos+`rem`}}
          transition={{cubic:(0.83, 0, 0.17, 1),duration:.6}}
          
          className="window absolute bg-blue-200 w-[25rem] h-[23rem] left-[40%] overflow-hidden "
        >
          <motion.div animate={{y:-pos +`rem`}}   transition={{cubic:(0.83, 0, 0.17, 1),duration:.6}} className="seen bg-red-600 w-full h-full  ">
            <img src="https://i.pinimg.com/736x/13/28/d8/1328d82b09803ab042363df2e9fd6c5a.jpg" alt="" />
          </motion.div>
          <motion.div animate={{y:-pos +`rem`}}   transition={{cubic:(0.83, 0, 0.17, 1),duration:.6}} className="seen bg-blue-600 w-full h-full  ">
            <img src="https://i.pinimg.com/736x/02/19/b4/0219b4ef14a333c71bdad19c85e6c123.jpg" alt="" />
          </motion.div>
          <motion.div animate={{y:-pos +`rem`}}   transition={{cubic:(0.83, 0, 0.17, 1),duration:.6}} className="seen bg-blue-600 w-full h-full  ">
            <img src="https://i.pinimg.com/736x/bd/11/15/bd1115329e697cf41a21bae1ac712f33.jpg" alt="" />
          </motion.div>
          <motion.div animate={{y:-pos +`rem`}}   transition={{cubic:(0.83, 0, 0.17, 1),duration:.6}} className="seen bg-blue-600 w-full h-full  ">
            <img src="https://i.pinimg.com/736x/36/c0/2c/36c02c854baa1fbf085bf2aac2d639d2.jpg" alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
