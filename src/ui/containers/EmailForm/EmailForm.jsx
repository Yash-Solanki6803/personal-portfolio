"use client";
import { Loader } from "@/ui";
import { checkValidEmail } from "@/utils";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

function EmailForm() {
  // const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidEmail) {
      setLoading(true);

      const { message } = await sendFormData({ email });
      alert(message);

      setEmail("");
      setIsValidEmail(false);
      setLoading(false);
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
  const sendFormData = async (email) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(email),
    });
    if (!response.ok) {
      const { message } = await response.json();
      alert(message);
      throw new Error(message);
    }
    const data = await response.json();
    return data;
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
          "h-full p-1 rounded-md text-xs w-20 font-RubikMedium text-neutral-50 text-center" +
          (isValidEmail ? " bg-green-500" : " bg-[#696969]")
        }
        whileTap={{ scale: 0.9 }}
      >
        {loading ? (
          <div className="flex justify-center items-center">
            <div
              className={
                "animate-spin ease-linear rounded-full border-t border-gray-200 h-4 w-4 "
              }
            ></div>
          </div>
        ) : (
          "Contact"
        )}
      </motion.button>
    </form>
  );
}

export default EmailForm;
