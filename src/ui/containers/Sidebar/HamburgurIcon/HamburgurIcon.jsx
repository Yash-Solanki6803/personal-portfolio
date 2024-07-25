"use client";
import "./hamburIcon.css";

export default function HamburIcon({ className = "", open, setOpen }) {
  return (
    <div
      id="nav-icon3"
      className={
        "z-50 cursor-pointer block xl:hidden " +
        (open ? "open" : "") +
        " " +
        className
      }
      onClick={() => setOpen(!open)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
