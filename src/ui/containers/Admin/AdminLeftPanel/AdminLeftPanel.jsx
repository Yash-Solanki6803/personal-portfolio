import { CardWrapper, Sidebar, NavLink, CustomLineBreak } from "@/ui";
import Link from "next/link";
const Leftpage = () => {
  return (
    <>
      <CardWrapper
        customDelay={0.2}
        className="hidden md:block bg-[#1C1C1C] rounded-2xl w-full md:w-80 h-fit sticky top-5 "
      >
        <div className=" md:w-80 w-full py-10 px-4 border border-neutral-800 rounded-2xl h-full bg-[#1C1C1C] flex flex-col gap-4">
          <Link href="/admin" className="text-white text-2xl font-thin px-4">
            Admin Panel
          </Link>
          <CustomLineBreak />
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/admin/blogs">Blogs</NavLink>
          <NavLink href="/admin/projects">Projects</NavLink>
          <NavLink href="/admin/news">News</NavLink>
          <CustomLineBreak />
          <NavLink href="/admin/blogs/create">Create Blog</NavLink>
          <NavLink href="/admin/projects/create">Add Project</NavLink>
          <NavLink href="/admin/news/create">Publish News Article</NavLink>
        </div>
      </CardWrapper>
      <Sidebar>
        <CardWrapper
          customDelay={0.2}
          className=" rounded-2xl w-screen px-10 md:px-24 h-fit top-5 "
        >
          <div className=" w-full py-10 px-4  border border-neutral-800 rounded-2xl h-full bg-[#1C1C1C] flex flex-col gap-4 ">
            <Link href="/admin" className="text-white text-2xl font-thin px-4">
              Admin Panel
            </Link>
            <CustomLineBreak />
            <NavLink href="/admin/blogs">Blogs</NavLink>
            <NavLink href="/admin/projects">Projects</NavLink>
            <NavLink href="/admin/news">News</NavLink>
            <CustomLineBreak />
            <NavLink href="/admin/blogs/create">Create Blog</NavLink>
            <NavLink href="/admin/projects/create">Add Project</NavLink>
            <NavLink href="/admin/news/create">Publish News Article</NavLink>
          </div>
        </CardWrapper>
      </Sidebar>
    </>
  );
};

export default Leftpage;
