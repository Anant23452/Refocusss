import { motion } from "motion/react";
import React from "react";

function Marquee({ imageurl,direction }) {
  return (
    
    <div className="flex w-full py-5 gap-20 whitespace-nowrap overflow-hidden justify-center ">
     <motion.div initial={{x:direction==="left"?"0":"-100%"}} animate={{x:direction==="left"?"-100%":"0"}} transition={{ease:"linear",duration:25,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40 ">
       {imageurl.map((url) => (
        <img src={url} className="" />
      ))}
     </motion.div>
     <motion.div initial={{x:direction==="left"?"0":"-100%"}} animate={{x:direction==="left"?"-100%":"0"}} transition={{ease:"linear",duration:20,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40 ">
       {imageurl.map((url) => (
        <img src={url} className="" />
      ))}
     </motion.div>
   
    
    </div>
  );
}

export default Marquee;
