import Link from "next/link";
import ReactMarkdown from "react-markdown";
import CustomImage from "@/ui/components/CustomImage/CustomImage";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import CopyIcon from "@/ui/components/CopyIcon/CopyIcon";
import { PiArrowLeftThin } from "react-icons/pi";
import Image from "next/image";
import CardWrapper from "@/ui/components/CardWrapper/CardWrapper";
import AnimatedH1 from "@/ui/components/AnimatedH1/AnimatedH1";
import { formatDate } from "@/utils";

const getSingleBlog = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_URL}/api/blogs/${slug}`
  );
  const data = res.json();
  return data;
};

async function page({ params }) {
  const { slug } = params;
  const data = await getSingleBlog(slug);

  const { title, content, thumbnailSrc, thumbnailAlt, createdAt } = data;
  const time = formatDate(createdAt);
  const thumbnail = {
    src: thumbnailSrc,
    alt: thumbnailAlt,
    height: 1000,
    width: 1000,
  };
  return (
    <CardWrapper customDelay={0.2} className=" text-neutral-50 w-full ">
      {/* Navbar */}
      <div className="sticky top-5 z-50">
        <div className=" ">
          <div className="-mt-6   ">
            <div className="bg-neutral-700/25 backdrop-blur-md h-10  w-full rounded-xl flex items-center gap-x-7 ">
              <Link href={"/gallery"}>
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center ml-3">
                  <div className="bg-neutral-300 rounded-full h-5 w-5 flex items-center justify-center">
                    <PiArrowLeftThin className="text-black text-lg" />
                  </div>
                </div>
              </Link>

              <Link href={"/"}>
                <button className="text-xs bg-neutral-700/25 p-1 w-16 h-6 rounded-md">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="  mt-9 w-full p-5 border border-neutral-700   rounded-2xl h-full bg-[#1C1C1C] ">
        <AnimatedH1>{title}</AnimatedH1>
        <div className="flex items-center gap-x-2 justify-center my-4 font-RubikRegular">
          <span className="text-xs">Written by Yash Solanki</span>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">{time}</span>
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
