"use client";
// import { cookies } from "next/headers";
import { useState } from "react";

function resumeInput() {
  const [resume, setResume] = useState("");
  const updateResume = async () => {
    const newData = { ...data, resumeLink: resume };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WEB_URL}/api/admin/update-links`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Cookie: cookies().toString(),
        },
        body: JSON.stringify(newData),
      }
    );
    if (response.ok) {
      alert("Link updated successfully");
    } else {
      const data = await response.json();
      alert(data);
      console.log("error:", data);
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <input
        type="text"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        className="bg-slate-800 py-3 px-1 rounded-md text-xs w-full focus:outline-none"
      />
      <button
        onClick={updateResume}
        className="bg-[#696969] px-2 py-1 rounded-md text-xs font-RubikMedium text-neutral-50 hover:bg-green-700 transition-all"
      >
        Change
      </button>
    </div>
  );
}

export default resumeInput;
