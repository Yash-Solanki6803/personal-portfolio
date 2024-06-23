import { ProjectGallery, BlogGallery, NewsGallery, CardWrapper } from "@/ui";
import { PiCodeThin } from "react-icons/pi";
const gallery = async ({ searchParams }) => {
  const blogpage = searchParams.blogPage || 1;
  const projectpage = searchParams.projectPage || 1;

  return (
    <CardWrapper customDelay={0.5} className="w-full  ">
      <div className="bg-[#1C1C1C] lg:bg-transparent rounded-2xl ">
        <div>
          <div className="flex gap-x-6 p-4">
            <PiCodeThin className="text-6xl text-neutral-50" />

            <div>
              <h1 className="text-2xl font-RubikMedium text-neutral-300">
                Projects,{" "}
                <span className="text-sm text-neutral-400">
                  built with passion
                </span>
              </h1>
              <p className=" text-neutral-400 text-sm ">
                I manage and code products strategically, and occasionally i
                write about them
              </p>
            </div>
          </div>

          <div className="border border-neutral-700 my-5" />

          <ProjectGallery projectPage={projectpage} />

          {/* News Section*/}

          <NewsGallery />

          <div className="flex gap-x-6 p-4">
            <PiCodeThin className="text-6xl text-neutral-50" />

            <div>
              <h1 className="text-2xl font-RubikMedium text-neutral-300">
                Blogs,{" "}
                <span className="text-sm text-neutral-400">
                  created with love.
                </span>
              </h1>
              <p className="text-neutral-400 text-sm">
                I write and explain about softwares, and occasionally i rant
                about them
              </p>
            </div>
          </div>

          <div className="border border-neutral-700 my-5" />

          {/* With image */}

          <BlogGallery blogPage={blogpage} />
        </div>
      </div>
    </CardWrapper>
  );
};

export default gallery;
