import ReactMarkdown from "react-markdown";
import Image from "next/image";
import CustomImage from "@/ui/components/CustomImage/CustomImage";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { FaCopy } from "react-icons/fa";
import { formatDate } from "@/utils";

const PreviewBlog = ({ data, tags = [] }) => {
  const { title, content } = data;
  const thumbnailSrc = data.thumbnailSrc || "";
  const thumbnailAlt = data.thumbnailAlt || "";
  const time = formatDate();
  const thumbnail = {
    src: thumbnailSrc,
    alt: thumbnailAlt,
    height: 1000,
    width: 1000,
  };
  return (
    <div className="w-full h-full p-5 border border-neutral-700 rounded-2xl">
      <h1 className="text-3xl font-RubikExtraBold text-center ">{title}</h1>
      <div className="flex items-center gap-x-2 justify-center my-4 font-RubikRegular">
        <span className="text-xs">Written by Yash Solanki</span>
        <div className="w-1 h-1 rounded-full bg-neutral-400" />
        <span className="text-xs">{time}</span>
      </div>
      {tags.length > 0 && (
        <div className="flex justify-center gap-2">
          {tags.map((tag) => (
            <span className="bg-neutral-800 px-2 py-1 rounded-md text-xs">
              {tag}
            </span>
          ))}
        </div>
      )}

      {thumbnail.src && (
        <div className="my-11 font-RubikMedium">
          <Image
            src={thumbnail.src}
            width={1000}
            height={1000}
            className="rounded-lg h-56 w-full object-cover"
            alt={thumbnail.alt || "thumbnail"}
          />
        </div>
      )}

      <ReactMarkdown
        className="prose prose-invert prose-pre:bg-[#282C34] prose-pre:relative"
        components={{
          img: CustomImage,
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <>
                <div
                  className="bg-slate-700 p-2 rounded-md absolute top-2 right-4 cursor-pointer hover:bg-slate-800 transition-all"
                  onClick={() => navigator.clipboard.writeText(children)}
                >
                  <FaCopy />
                </div>

                <SyntaxHighlighter
                  // className="bg-black"
                  // language={match[1]}
                  // style={dark}
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
  );
};

export default PreviewBlog;
