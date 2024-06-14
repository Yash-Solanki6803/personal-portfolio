"use client";

import { FaCopy } from "react-icons/fa";

function CopyIcon({ children }) {
  return (
    <div
      className="bg-slate-700 p-2 rounded-md absolute top-2 right-4 cursor-pointer hover:bg-slate-800 transition-all"
      onClick={() => navigator.clipboard.writeText(children)}
    >
      <FaCopy />
    </div>
  );
}

export default CopyIcon;
