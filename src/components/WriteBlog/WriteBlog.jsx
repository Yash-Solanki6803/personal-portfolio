"use client";
import { createBlog } from "@/lib/server-actions";
import { titleToSlug } from "@/utils";
import { useState } from "react";
import PreviewBlog from "../PreviewBlog/PreviewBlog";

function WriteBlog() {
  const content = `# This is a markdown preview . 
   ## You can write your blog here
  `;

  //Handle Form Data
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    thumbnail: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  //Handle Preview
  const [preview, setPreview] = useState(false);
  return (
    <div className="w-full  border border-neutral-800 rounded-2xl bg-[#1C1C1C] py-4 px-4 flex flex-col justify-start items-center">
      <button
        onClick={() => setPreview(!preview)}
        className="w-1/2 mt-6 bg-blue-700 rounded-md py-4 hover:bg-neutral-800 transition-all duration-150 "
      >
        {preview ? "Write" : "Preview"}
      </button>
      <h1 className="text-xl font-light font-sans my-4">Create Blog</h1>
      {preview ? (
        <PreviewBlog data={formData} />
      ) : (
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
          }}
        >
          <input
            className="text-white bg-slate-950 w-full rounded-md px-10 py-2  focus:outline-none font-light placeholder:font-medium"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <textarea
            className="text-white bg-slate-950 w-full rounded-md px-10 py-2 focus:outline-none font-light placeholder:font-medium text-left"
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleChange}
          />
          <input
            className="text-white bg-slate-950 w-full rounded-md px-10 py-2 text-center focus:outline-none font-light placeholder:font-medium"
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
          />
          <button
            className=" mt-6 bg-neutral-700 rounded-md py-4 hover:bg-neutral-800 transition-all duration-150 "
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default WriteBlog;
