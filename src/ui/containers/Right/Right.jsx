import { FaMusic, FaPaintBrush } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { Tooltip } from "@/ui";
import CardWrapper from "../../components/CardWrapper/CardWrapper";
import Image from "next/image";
import Link from "next/link";
import data from "@/lib/data";
// import col_logo from "/collogo.png";

const Rightpage = () => {
  return (
    <CardWrapper>
      <div className=" lg:w-60 w-full rounded-2xl h-fit lg:sticky top-5 ">
        <div>
          <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 h-fit">
            <h2 className="font-RubikBold text-neutral-200">Resume</h2>
            <p className="text-xs my-3 text-neutral-400 font-RubikRegular">
              Stop worrying about perfecting <br /> the details, just refer my
              resume <br />
            </p>
            <Link
              href={data.resumeLink}
              target="_blank"
              className="bg-[#696969]  py-2 px-4 rounded-md text-xs w-full font-RubikMedium text-neutral-50 hover:bg-green-700 transition-all"
            >
              Download
            </Link>

            <div className="border border-neutral-700 my-5" />

            <div className="text-neutral-400">
              <h1 className="font-RubikMedium text-neutral-200">
                Apart from Coding
              </h1>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md ">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <FaMusic />
                </div>
                <h3 className="text-xs ">
                  I love playing <br /> Flute.
                </h3>
              </div>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <FaPaintBrush />
                </div>
                <h3 className="text-xs ">
                  I like to draw characters. <br /> But I rotate the colors'{" "}
                  <br />
                  HUE by 180'{" "}
                </h3>
              </div>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-10  rounded-full flex items-center justify-center">
                  <IoGameController />
                </div>
                <h3 className="text-xs ">I play alot of video games as well</h3>
              </div>

              <div className="border border-neutral-700 my-5" />

              <div className="flex items-center justify-center gap-x-2">
                <Tooltip />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3 text-neutral-50 flex flex-col items-center">
          <Image
            width={1000}
            height={1000}
            className="h-32 w-56 object-cover rounded-lg"
            src="/collogo.png"
            alt=""
          />
          <p className="my-3 font-RubikMedium text-sm">
            Check my Discord Community
          </p>
          <Link
            href={data.discordLink}
            className="bg-[#696969] block hover:bg-green-800  py-2 rounded-md text-xs text-center w-full font-RubikMedium transition-all"
          >
            Get Invitation Link
          </Link>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Rightpage;
