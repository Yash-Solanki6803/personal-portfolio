"use client";
// import { createBlog } from "@/lib/server-actions";
import { titleToSlug, trimCapitalizeAndCreateObjects } from "@/utils";
import { useState, useEffect } from "react";
import { UploadImage, PreviewBlog } from "@/ui";

const getProject = async (slug) => {
  const res = await fetch(`/api/projects/${slug}`);
  const data = await res.json();
  return data;
};

function AddProject({ params }) {
  const { slug } = params;
  //Handle Form Data
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    thumbnailSrc: "",
    thumbnailAlt: "",
  });

  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProject(slug);
      setFormData(data);
      const fetchedTags = data.Tags.map((Tag) => Tag.title);
      setTags(fetchedTags);
    };
    fetchData();
  }, []);

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
      thumbnailSrc: formData["thumbnailSrc"],
      thumbnailAlt: formData["thumbnailAlt"],
    };
    body.slug = slug;

    body.tags = trimCapitalizeAndCreateObjects(tags);
    const res = await fetch(`/api/projects/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    const { message, status } = data;
    if (status === 200) {
      alert(message, "success");
    } else {
      alert(message);
    }
  };

  //Handle Preview
  const [preview, setPreview] = useState(false);
  return (
    <div className="w-full h-full border border-neutral-800 rounded-2xl bg-[#1C1C1C]  flex flex-col justify-start items-center p-5">
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
        Add Project
      </h1>
      <div className="border border-neutral-700 my-5 w-full mx-4" />
      {preview ? (
        <PreviewBlog data={formData} tags={tags} />
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
          <div className="flex flex-col gap-4 w-full">
            <input
              className="text-white bg-slate-950 w-full rounded-md px-4 sm:px-10 py-2  focus:outline-none font-light placeholder:font-medium"
              type="text"
              name="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value.split(","))}
              placeholder="Add Tags"
              required
            />
            <div className="flex gap-2">
              {tags.map((tag) => (
                <span className="bg-slate-800 text-white px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default AddProject;
