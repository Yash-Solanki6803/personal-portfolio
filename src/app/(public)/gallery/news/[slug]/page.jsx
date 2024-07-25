import Link from "next/link";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { PiArrowLeftThin } from "react-icons/pi";
import Image from "next/image";
import {
  StickyNavbar,
  CardWrapper,
  AnimatedH1,
  CopyIcon,
  CustomImage,
} from "@/ui";
import { formatDate } from "@/utils";

const getSingleArticle = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_URL}/api/news/${slug}`
  );
  const data = res.json();
  return data;
};

const incrementViews = async (slug) => {
  await fetch(`${process.env.NEXT_PUBLIC_WEB_URL}/api/news/${slug}`, {
    method: "PATCH",
    cache: "no-store", // Ensure no caching
  });
};

async function page({ params }) {
  const { slug } = params;
  const data = await getSingleArticle(slug);
  await incrementViews(slug);

  const { title, content, createdAt } = data;
  const time = formatDate(createdAt);
  return (
    <CardWrapper customDelay={0.2} className=" text-neutral-50 w-full ">
      {/* Navbar */}
      <StickyNavbar />

      {/* News Content */}
      <div className="  mt-9 w-full p-5 border border-neutral-700   rounded-2xl h-full bg-[#1C1C1C] ">
        <AnimatedH1>{title}</AnimatedH1>
        <div className="flex items-center gap-x-2 justify-center my-4 font-RubikRegular">
          <span className="text-xs">Written by Yash Solanki</span>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">{time}</span>
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
