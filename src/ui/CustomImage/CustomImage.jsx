import Image from "next/image";

function CustomImage({ src, alt, width, height }) {
  return (
    <Image
      width={1000}
      height={1000}
      className="rounded-lg h-56 w-full object-cover"
      src={src}
      alt={alt}
    />
  );
}

export default CustomImage;
