import Image from "next/image";
import Link from "next/link";
import Pagination from "../../components/Pagination/Pagination";
import { formatDate } from "@/utils";

export const revalidate = 60 * 60 * 24; // 24 hours

const getBlogs = async (blogPage = 1) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_URL}/api/blogs?blogPage=${blogPage}`
  );
  const data = await res.json();
  return data;
};

async function BlogGallery({ blogPage }) {
  const { blogs, totalBlogs } = await getBlogs(blogPage);
  return (
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
                    <div className="text-xs font-thin mt-2">
                      {blog.views || 10} views
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      <Pagination count={totalBlogs} />
    </div>
  );
}

export default BlogGallery;
