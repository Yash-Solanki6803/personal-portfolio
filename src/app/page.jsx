import Image from "next/image";
import Link from "next/link";
import { PiHouseLight, PiGithubLogoLight } from "react-icons/pi";

export default function Home() {
  return (
    <div className=" ">
      <div className="p-5 fixed bottom-28 flex flex-col items-center justify-center mx-auto   w-full ">
        <div className="bg-neutral-600 rounded-full ">
          <Image
            height={1000}
            width={1000}
            className="object-cover w-fit"
            src="/emo.png"
            alt=""
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

      <div className=" flex justify-center">
        <div className="fixed bottom-7 flex border border-neutral-600 rounded-lg p-2 gap-x-5 text-neutral-500">
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
    </div>
  );
}
