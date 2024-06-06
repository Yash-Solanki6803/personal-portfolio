"use client";
import { motion } from "framer-motion";

function CardWrapper({ children, className, customDelay }) {
  return (
    <motion.div
      className={"text-neutral-50 " + className}
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: customDelay || 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default CardWrapper;
