import Link from "next/link";
import React from "react";
import { PiArrowLeftThin, PiArrowRightThin, PiCodeThin } from "react-icons/pi";
import Image from "next/image";
import CardWrapper from "@/components/CardWrapper/CardWrapper";
import { getAllBlogs } from "@/lib/server-actions";
import { formatDate } from "@/utils";
import Pagination from "@/components/Pagination/Pagination";
const gallery = async ({ searchParams }) => {
  const { blogpage, projectpage } = searchParams;
  const { blogs, totalBlogs } = await getAllBlogs(blogpage);
  return (
    <CardWrapper customDelay={0.5} className="w-full lg:w-fit ">
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
              <p className="max-w-sm text-neutral-400 text-sm">
                I manage and code products strategically, and <br />{" "}
                occasionally i write about them
              </p>
            </div>
          </div>

          <div className="border border-neutral-700 my-5" />

          <div className="  bg-[#1C1C1C] rounded-lg text-neutral-400">
            {blogs &&
              blogs.map((blog) => {
                const date = formatDate(blog.createdAt);
                return (
                  <Link href={`/gallery/blogs/${blog.slug}`} key={blog.id}>
                    <div className="hover:bg-neutral-800 duration-200 rounded-lg transition-all ease-in p-4">
                      <div className="  flex items-center gap-x-3">
                        <Image
                          width={1000}
                          height={1000}
                          className="w-24 h-24 object-cover rounded-md"
                          src={blog.thumbnailSrc}
                          alt={blog.thumbnailAlt}
                        />
                        <div>
                          <h2 className="text-sm font-semibold font-RubikMedium line-clamp-1">
                            {blog.title}
                          </h2>
                          <span className="text-xs">{date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            <Pagination count={totalBlogs} />
          </div>

          {/* News Section*/}

          <div className="mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-x-6 p-4">
            <PiCodeThin className="text-6xl text-neutral-50" />

            <div>
              <h1 className="text-2xl font-RubikMedium text-neutral-300">
                Blogs,{" "}
                <span className="text-sm text-neutral-400">
                  created with love.
                </span>
              </h1>
              <p className="max-w-sm text-neutral-400 text-sm">
                I write and explain about softwares, and <br /> occasionally i
                rant about them
              </p>
            </div>
          </div>

          <div className="border border-neutral-700 my-5" />
          {/* With image */}

          <div className=" mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
            {blogs &&
              blogs.map((blog) => {
                const date = formatDate(blog.createdAt);
                return (
                  <Link href={`/gallery/blogs/${blog.slug}`} key={blog.id}>
                    <div className="hover:bg-neutral-800 duration-200 rounded-lg transition-all ease-in p-4">
                      <div className="  flex items-center gap-x-3">
                        <Image
                          width={1000}
                          height={1000}
                          className="w-24 h-24 object-cover rounded-md"
                          src={blog.thumbnailSrc}
                          alt={blog.thumbnailAlt}
                        />
                        <div>
                          <span className="text-sm">{date}</span>
                          <h2 className="text-sm font-RubikMedium line-clamp-1">
                            {blog.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default gallery;
