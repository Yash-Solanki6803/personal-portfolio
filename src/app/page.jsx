import Image from "next/image";
import Link from "next/link";
import { PiHouseLight, PiGithubLogoLight } from "react-icons/pi";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center  w-screen h-screen gap-10">
      <div className="p-5   flex flex-col items-center justify-center mx-auto   w-full ">
        <div className="bg-neutral-600 rounded-full w-48 h-48  border-2 border-slate-300 inset-3  shadow-2xl shadow-slate-600">
          <Image
            height={1000}
            width={1000}
            className="object-cover w-fit"
            src="/emo.png"
            alt="Avatar Image of the developer wearing sunglasses and smiling."
          />
        </div>
        <h1 className="font-RubikExtraBold text-6xl text-center my-9 btn-shine">
          Yash Solanki Portfolio
        </h1>

        <p className="text-neutral-400 lg:max-w-lg text-center font-RubikRegular ">
          All features are done and coded by Joscript, please use this template
          with free mind, remember to subscribe and share our videos
        </p>
      </div>

      <div className="flex border border-neutral-600 rounded-lg p-2 gap-x-5 text-neutral-500">
        <Link href={"/gallery"}>
          <span>
            <PiHouseLight className="text-2xl" />
          </span>
        </Link>
        <Link href="https://github.com/Yash-Solanki6803">
          <span>
            <PiGithubLogoLight className="text-2xl" />
          </span>
        </Link>
      </div>
    </div>
  );
}
