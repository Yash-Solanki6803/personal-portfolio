import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Image from "next/image";
import { formatDate } from "@/utils";
import {
  StickyNavbar,
  CustomImage,
  CopyIcon,
  CardWrapper,
  AnimatedH1,
} from "@/ui";

const getSingleProject = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_URL}/api/projects/${slug}`
  );
  const data = res.json();
  return data;
};

const incrementViews = async (slug) => {
  await fetch(`${process.env.NEXT_PUBLIC_WEB_URL}/api/projects/${slug}`, {
    method: "PATCH",
    cache: "no-store", // Ensure no caching
  });
};

async function page({ params }) {
  const { slug } = params;
  const data = await getSingleProject(slug);
  await incrementViews(slug);

  const { title, content, thumbnailSrc, thumbnailAlt, views, Tags, createdAt } =
    data;
  const time = formatDate(createdAt);
  const thumbnail = {
    src: thumbnailSrc,
    alt: thumbnailAlt,
    height: 1000,
    width: 1000,
  };
  return (
    <CardWrapper customDelay={0.2} className=" text-neutral-50 w-full">
      {/* Navbar */}
      <StickyNavbar />

      {/* Blog Content */}
      <div className="  mt-9 w-full p-5 border border-neutral-700   rounded-2xl h-full bg-[#1C1C1C] ">
        <AnimatedH1>{title}</AnimatedH1>
        <div className="flex flex-col  items-center gap-2 justify-center my-4 font-RubikRegular">
          <div className="flex flex-col md:flex-row items-center gap-2 justify-center ">
            <span className="text-xs text-center">Written by Yash Solanki</span>
            <div className="w-1 h-1 rounded-full bg-neutral-400" />
            <span className="text-xs text-center">{time}</span>
          </div>
          {Tags?.length > 0 && (
            <div className="flex justify-center gap-2  flex-wrap">
              {Tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-neutral-800 px-2 py-1 rounded-md text-xs flex items-center justify-center"
                >
                  {tag.title}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="my-11 font-RubikMedium">
          {thumbnail.src && (
            <Image
              src={thumbnail.src}
              width={1000}
              height={1000}
              className="rounded-lg h-56 w-full object-cover"
              alt={thumbnail.alt || "thumbnail"}
            />
          )}
        </div>
        <ReactMarkdown
          className="prose prose-invert prose-pre:bg-[#282C34] prose-pre:relative"
          components={{
            img: CustomImage,
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <>
                  <CopyIcon children={children} />
                  <SyntaxHighlighter
                    PreTag="code"
                    className="rounded-none m-0 bg-black"
                    style={atomOneDark}
                  >
                    {children}
                  </SyntaxHighlighter>
                </>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </CardWrapper>
  );
}

export default page;
