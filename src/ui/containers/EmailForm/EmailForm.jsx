"use client";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

function EmailForm() {
  // const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    if (isValidEmail) {
      controls.start({
        backgroundColor: "#f01a1a",
      });
    } else {
      controls.start({
        backgroundColor: "#696969",
      });
    }
  }, [isValidEmail]);

  const handleChange = (e) => {
    setEmail(e.target.value);
    checkValidEmail(e.target.value)
      ? setIsValidEmail(true)
      : setIsValidEmail(false);
  };

  const checkValidEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidEmail) {
      setEmail("");
      setIsValidEmail(false);
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
      className="bg-[#282828] p-1  rounded-md flex items-center  justify-between h-9 w-full  "
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
        className={
          "h-full p-1 rounded-md text-xs w-20 font-RubikMedium text-neutral-50" +
          (isValidEmail ? " bg-green-500" : " bg-[#696969]")
        }
        whileTap={{ scale: 0.9 }}
      >
        Contact
      </motion.button>
    </form>
  );
}

export default EmailForm;
