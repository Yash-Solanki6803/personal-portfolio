"use client";
// import { createBlog } from "@/lib/server-actions";
import { titleToSlug } from "@/utils";
import { useState } from "react";
import { PreviewBlog, UploadImage } from "@/ui";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
function PublishArticle() {
  const router = useRouter();
  //Handle Form Data
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const clearForm = () => {
    setFormData({
      title: "",
      content: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const slug = titleToSlug(formData.title);
    const body = {
      title: formData["title"],
      content: formData["content"],
    };
    body.slug = slug;
    const res = await fetch("/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    const { message, status } = data;
    if (status === 200) {
      alert(message, "success");
      revalidatePath("/api/blogs");
      // Redirect to the newly created blog;
      router.push(`/gallery/blogs/${slug}`);
    } else {
      alert(message);
    }
    clearForm();
  };

  //Handle Preview
  const [preview, setPreview] = useState(false);
  return (
    <div className="w-full h-fit border border-neutral-800 rounded-2xl bg-[#1C1C1C]  flex flex-col justify-start items-center p-5">
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
        Publish News Article
      </h1>
      <div className="border border-neutral-700 my-5 w-full mx-4 " />
      {preview ? (
        <PreviewBlog data={formData} />
      ) : (
        <form className="flex flex-col w-full h-full gap-4 ">
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

          <button
            className=" mt-6 bg-neutral-700 rounded-md py-4 hover:bg-neutral-800 transition-all duration-150 "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default PublishArticle;
