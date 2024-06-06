"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

function EmailForm() {
  // const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const controls = useAnimation();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidEmail(email)) {
      setEmail("");
    } else {
      controls.start({
        x: 0,
        transition: {
          type: "spring",
          velocity: "600",
          stiffness: "5000",
          damping: 15,
        },
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#282828] p-1  rounded-md md:flex items-center  justify-between h-9 w-full hidden "
    >
      <input
        value={email}
        onChange={handleChange}
        className=" w-36 focus:outline-none bg-transparent text-neutral-400 text-xs placeholder:text-neutral-600 h-full pl-2 placeholder:text-xs placeholder:font-RubikMedium"
        placeholder="name@email.com"
        type="text"
      />
      <motion.button
        animate={controls}
        className="bg-[#696969] h-full p-1 rounded-md text-xs w-20 font-RubikMedium text-neutral-50"
      >
        Contact
      </motion.button>
    </form>
  );
}

export default EmailForm;
