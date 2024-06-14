"use client";
import { createBlog } from "@/lib/server-actions";
import { titleToSlug } from "@/utils";
import { useState } from "react";
import PreviewBlog from "../PreviewBlog/PreviewBlog";
import UploadImage from "../UploadImage/UploadImage";

function WriteBlog() {
  //Handle Form Data
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    thumbnailSrc: "",
    thumbnailAlt: "",
  });

  const clearForm = () => {
    setFormData({
      title: "",
      content: "",
      thumbnailSrc: "",
      thumbnailAlt: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  //Handle Preview
  const [preview, setPreview] = useState(false);
  return (
    <div className="w-full border border-neutral-800 rounded-2xl bg-[#1C1C1C]  flex flex-col justify-start items-center p-5">
      <div className="flex flex-col sm:flex-row mt-6 items-center gap-4 w-full ">
        <UploadImage />
        <button
          onClick={() => setPreview(!preview)}
          className="w-full sm:w-32 bg-slate-800 rounded-md py-4 px-6 md:px-2 lg:px-6 hover:bg-neutral-800 transition-all duration-150 text-center"
        >
          {preview ? "Write" : "Preview"}
        </button>
      </div>
      <h1 className="text-xl w-full font-light font-sans mt-10 ">
        Create Blog
      </h1>
      <div className="border border-neutral-700 my-5 w-full mx-4" />
      {preview ? (
        <PreviewBlog data={formData} />
      ) : (
        <form
          className="flex flex-col w-full h-full gap-4 "
          action={async (formData) => {
            const data = {
              title: formData.get("title"),
              content: formData.get("content"),
              thumbnailSrc: formData.get("thumbnailSrc"),
              thumbnailAlt: formData.get("thumbnailAlt"),
            };
            const slug = titleToSlug(data.title);
            data.slug = slug;
            console.log("formdata:", data);
            const response = await createBlog(data);
            alert(response);
            clearForm();
          }}
        >
          <input
            className="text-white bg-slate-950 w-full rounded-md px-4 sm:px-10 py-2  focus:outline-none font-light placeholder:font-medium"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Add Title"
            required
          />
          <textarea
            className="text-white  text-sm bg-slate-950 w-full h-full rounded-md px-4 sm:px-10 py-2 focus:outline-none font-light placeholder:font-medium text-left"
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleChange}
            required
          />
          <input
            className="text-white bg-slate-950 w-full rounded-md px-4 sm:px-10 py-2  focus:outline-none font-light placeholder:font-medium"
            type="text"
            name="thumbnailSrc"
            value={formData.thumbnailSrc}
            onChange={handleChange}
            placeholder="Add thumbnail URL"
            required
          />
          {formData.thumbnailSrc && (
            <img
              src={formData.thumbnailSrc}
              className="w-full h-36 object-cover rounded-md"
            />
          )}
          <input
            className="text-white bg-slate-950 w-full rounded-md px-4 sm:px-10 py-2  focus:outline-none font-light placeholder:font-medium"
            type="text"
            name="thumbnailAlt"
            value={formData.thumbnailAlt}
            onChange={handleChange}
            placeholder="Add thumbnail Alt"
            required
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
