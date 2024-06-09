import ReactMarkdown from "react-markdown";
import Image from "next/image";

const PreviewBlog = ({ data }) => {
  const { title, content, thumbnail } = data;
  return (
    <div>
      <h1 className="text-4xl">{title}</h1>
      {thumbnail && (
        <Image src={thumbnail} alt="thumbnail" width={500} height={500} />
      )}
      <ReactMarkdown className="prose prose-invert">{content}</ReactMarkdown>
    </div>
  );
};

export default PreviewBlog;
