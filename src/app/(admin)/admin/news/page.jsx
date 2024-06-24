import Link from "next/link";
import { formatDate } from "@/utils";
import { DeleteButton, EditButton } from "@/ui";

export const revalidate = 3600;

const getBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WEB_URL}/api/news/all`);
  const data = await res.json();
  return data;
};

async function NewsGallery({ blogPage }) {
  const { newsArticles } = await getBlogs(blogPage);
  return (
    <div className="mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
      {newsArticles &&
        newsArticles?.map((article) => {
          const date = formatDate(article.createdAt);
          return (
            <div className="relative">
              <Link href={`/gallery/news/${article.slug}`} key={article.id}>
                <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                  <div className="  flex items-center gap-x-3">
                    <div>
                      <span className="text-sm">{date}</span>
                      <h2 className="text-sm font-RubikMedium">
                        {article.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="absolute top-4 right-4  flex  gap-2">
                <EditButton slug={article?.slug} type="news" />
                <DeleteButton slug={article?.slug} type="news" />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default NewsGallery;
