"use client";
import { authorize, createBlog } from "@/lib/server-actions";
import { titleToSlug } from "@/utils";
import { useState } from "react";

export default function Page() {
  const [authorized, setAuthorized] = useState(false);
  if (!authorized) {
    return (
      <div className="w-full  border border-neutral-800 rounded-2xl bg-[#1C1C1C] py-4 px-24 flex flex-col justify-start items-center">
        <h1 className="text-3xl font-light font-sans my-10 animate-pulse ">
          Enter Secret Key
        </h1>
        <form
          className="flex flex-col w-full"
          action={async (formData) => {
            const response = await authorize(formData);
            setAuthorized(response.authorized);
          }}
        >
          <input
            className="text-black w-full rounded-md px-10 py-2 text-center focus:outline-none font-light placeholder:font-medium"
            type="password"
            name="secretkey"
            placeholder="Secret Key"
          />

          <button
            className=" mt-6 bg-neutral-700 rounded-md py-4 hover:bg-neutral-800 transition-all duration-150 "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="w-full  border border-neutral-800 rounded-2xl bg-[#1C1C1C] py-4 px-4 flex flex-col justify-start items-center">
        <h1 className="text-xl font-light font-sans my-4">Create Blog</h1>
        <form
          className="flex flex-col w-full gap-4"
          action={async (formData) => {
            const data = {
              title: formData.get("title"),
              content: formData.get("content"),
              thumbnail: formData.get("thumbnail"),
            };
            const slug = titleToSlug(data.title);
            data.slug = slug;
            const response = await createBlog(data);
            console.log("response :", response);
          }}
        >
          <input
            className="text-black w-full rounded-md px-10 py-2 text-center focus:outline-none font-light placeholder:font-medium"
            type="text"
            name="title"
          />
          <textarea
            className="text-black w-full rounded-md px-10 py-2 text-center focus:outline-none font-light placeholder:font-medium"
            name="content"
            placeholder="Content"
          />
          <input
            className="text-black w-full rounded-md px-10 py-2 text-center focus:outline-none font-light placeholder:font-medium"
            type="text"
            name="thumbnail"
          />
          <button
            className=" mt-6 bg-neutral-700 rounded-md py-4 hover:bg-neutral-800 transition-all duration-150 "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
