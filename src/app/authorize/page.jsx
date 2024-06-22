// app/page.js
"use client";
import { handleAuth } from "@/lib/server-actions";
import { redirect } from "next/navigation";
import { useState } from "react";

const Authorize = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  return (
    <>
      <div className="w-full h-fit border border-neutral-800 rounded-2xl bg-[#1C1C1C] mt-10 lg:mt-0 pb-14 px-4 lg:px-24 flex flex-col justify-start items-center">
        <h1 className="text-3xl font-light font-sans my-10 animate-pulse ">
          Authorize Yourself
        </h1>
        <form
          className="flex flex-col w-full"
          action={async (formData) => {
            const response = await handleAuth(formData);
            if (response.authorized) {
              alert("Authorized");
              redirect("/admin");
            } else {
              setError("Invalid Secret Key");
            }
            setValue("");
          }}
        >
          <input
            className=" w-full bg-transparent px-10 text-center focus:outline-none "
            type="password"
            name="secretKey"
            placeholder="Secret Key"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {error && <p className="text-red-500 mt-2 ">{error}</p>}
          <div className="border border-neutral-700 my-5" />
          <button
            className=" mt-6 bg-neutral-700 rounded-md py-4 hover:bg-neutral-800 transition-all duration-150 "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Authorize;
