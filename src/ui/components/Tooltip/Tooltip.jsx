"use client";
import React, { useState } from "react";
import data from "@/lib/data";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

function TestimonialTooltip() {
  const [hoveredIndex, setHoveredIndex] = useState();

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [0, 100], [-50, 50]),
    springConfig
  );

  const people = [
    {
      id: 1,
      name: "Instagram",
      position: data.socialLinks.instagram,
      image: <RiInstagramFill className="text-xl" />,
    },
    {
      id: 2,
      name: "Youtube",
      position: data.socialLinks.youtube,
      image: <FaYoutube className="text-xl" />,
    },
    {
      id: 3,
      name: "LinkedIn",
      position: data.socialLinks.linkedin,
      image: <FaLinkedin className="text-xl" />,
    },
  ];

  return (
    <div
      className="flex flex-row items-center gap-x-9  
    cursor-pointer  w-full justify-around
    "
    >
      {people.map((testimonial, idx) => (
        <Link
          className="-mr-4  relative"
          key={testimonial.id}
          onMouseEnter={() => setHoveredIndex(testimonial.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          href={testimonial.position}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === testimonial.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {testimonial.name}
                </div>
                <div className="text-white text-xs">{testimonial.position}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <p>{testimonial.image}</p>
        </Link>
      ))}
    </div>
  );
}

export default TestimonialTooltip;
