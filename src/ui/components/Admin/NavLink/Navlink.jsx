"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
function Navlink({ href = "/", children, className = "" }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={
        " px-4 py-2 rounded-full text-xs w-full font-RubikMedium text-neutral-50 hover:bg-[#4a4a4a]  transition-all ease-in duration-300" +
        (pathname === href ? " bg-[#4a4a4a] " : "bg-transparent ") +
        className
      }
    >
      {children}
    </Link>
  );
}

export default Navlink;
