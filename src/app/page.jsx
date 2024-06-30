import Image from "next/image";
import Link from "next/link";
import { PiHouseLight, PiGithubLogoLight } from "react-icons/pi";
import { RiGalleryView2 } from "react-icons/ri";
import { ToggleFullScreen } from "@/ui";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center  w-screen h-screen gap-4 md:gap-10">
      <div className="p-5   flex flex-col items-center justify-center mx-auto   w-full ">
        <div className="bg-neutral-600 rounded-full w-48 h-48  border-2 border-slate-300 inset-3  shadow-2xl shadow-slate-600 flex items-center justify-center">
          <Image
            height={1000}
            width={1000}
            className="object-cover w-fit"
            src="/emo.png"
            alt="Avatar Image of the developer wearing sunglasses and smiling."
          />
        </div>
        <h1 className="font-RubikExtraBold text-3xl md:text-6xl text-center my-9 btn-shine">
          Yash Solanki Portfolio
        </h1>

        <p className="text-neutral-400 lg:max-w-lg text-center font-RubikRegular ">
          There is only one thing more painful than learning from experience and
          that is not learning from experience.
        </p>
      </div>

      <div className="flex relative border border-neutral-600 rounded-lg p-2 gap-x-5 text-neutral-500">
        <Link href={"/gallery"}>
          <span className=" flex flex-col px-4 justify-center items-center border-b border-transparent hover:border-slate-300 transition-all duration-200">
            <RiGalleryView2 className="text-2xl" />
            <p>Gallery</p>
          </span>
        </Link>
        <Link href="https://github.com/Yash-Solanki6803">
          <span className=" flex flex-col px-4 justify-center items-center border-b border-transparent hover:border-slate-300 transition-all duration-200">
            <PiGithubLogoLight className="text-2xl" />
            <p>Github</p>
          </span>
        </Link>
        <ToggleFullScreen />
        <div className="ml-10 absolute top-[120%] right-0 w-full md:hidden">
          <p className="text-neutral-400 lg:max-w-lg text-xs font-RubikRegular ">
            * Switch to full screen for the optimal experience.
          </p>
        </div>
      </div>
    </div>
  );
}
