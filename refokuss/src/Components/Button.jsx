import { motion } from "motion/react";
import React from "react";
import { SlActionRedo } from "react-icons/sl";

function Button({ title = "Get started" }) {
  return (
    <motion.div
      initial={{ backgroundColor: "#eeeeffff" }} // zinc-100 ka hex
      whileHover={{ backgroundColor: "gray" }}
      className="w-fit px-3 py-2  text-black rounded-full"
    >
      <span className="text-sm font-medium">{title}</span>
      <SlActionRedo className="inline-block ml-2 " />
    </motion.div>
  );
}

export default Button;
