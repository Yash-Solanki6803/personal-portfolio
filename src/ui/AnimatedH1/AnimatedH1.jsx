"use client";
import { motion } from "framer-motion";

function AnimatedH1({ children, className }) {
  return (
    <motion.h1
      initial={{ x: 100, opacity: 0, filter: "blur(4px)" }}
      animate={{
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.8,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
      transition={{ delay: 0.4 }}
      className={"text-3xl font-RubikExtraBold text-center " + className}
    >
      How to write type-safe CSS Modules
    </motion.h1>
  );
}

export default AnimatedH1;
