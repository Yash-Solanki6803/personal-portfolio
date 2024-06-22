"use client";
import { motion } from "framer-motion";

const Spinner = () => {
  // Define the base animation speed
  let speed = 15; // Duration in seconds for one full rotation

  return (
    <motion.div
      className="border-b-2 shadow-lg shadow-slate-500 w-28 h-28 absolute top-0 rounded-full cursor-pointer"
      animate={{ rotate: 360 }}
      transition={{
        duration: speed,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
};

export default Spinner;
