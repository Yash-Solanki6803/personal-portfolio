"use client";
import { useState } from "react";
import HamburIcon from "./HamburgurIcon/HamburgurIcon";
function Sidebar({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={
        "fixed  z-50 right-0 top-0 h-full pt-16" +
        (open ? " backdrop-blur-md" : "")
      }
    >
      <div className="absolute  right-4 top-4">
        <HamburIcon open={open} setOpen={setOpen} />
      </div>
      {open && children}
    </div>
  );
}

export default Sidebar;
