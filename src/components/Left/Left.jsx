import {
  PiBookOpenTextLight,
  PiMagicWandThin,
  PiShapesThin,
  PiHouseLight,
} from "react-icons/pi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { EmailForm, ProfileImage } from "@/ui";
import Link from "next/link";
// import Image from "next/image";

const Leftpage = () => {
  return (
    <div>
      <div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 200 },
        }}
        className=" hidden md:block bg-[#1C1C1C] rounded-2xl w-full md:w-80  h-fit sticky top-5 "
      >
        <div className=" md:w-80 w-full p-3 border border-neutral-800 rounded-2xl h-full bg-[#1C1C1C]  ">
          <div className="flex ">
            <div className="w-full  relative">
              <ProfileImage />
              <h1 className="font-RubikExtraBold text-xl  text-neutral-300 mt-3">
                Yash Solanki
              </h1>
              <p className="text-xs font-RubikMedium text-neutral-300 mt-2">
                yashsolanki.dev@gmail.com
              </p>

              <p className="text-xs font-RubikMedium text-neutral-300 mt-1">
                3rd Year Student | Developer
              </p>

              <div className="flex   w-full   ">
                <div className="flex gap-1 flex-wrap text-xs my-4">
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                    Developer
                  </p>
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                    Community Builder
                  </p>
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                    MLSA - Alpha
                  </p>
                </div>
              </div>
            </div>

            <div className="flex  gap-x-1 w-fit h-fit">
              <Link href={"/"}>
                <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                  <PiHouseLight className="text-neutral-100" />
                </div>
              </Link>

              <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                <PiBookOpenTextLight className="text-neutral-100" />
              </div>
            </div>
          </div>
          <EmailForm />
          <div className="w-full mt-5 text-neutral-300">
            <h2 className="font-RubikBold my-4">Bio</h2>
            <p className="text-[12px]  font-RubikRegular my-3">
              The world of digital design and <br /> development is constantly
              evolving and so <br /> has my role over the last 3 years.{" "}
            </p>

            <div className="mt-6 flex justify-between text-sm">
              <div className="flex items-center gap-x-1">
                <PiShapesThin />
                <span className="text-xs font-RubikRegular">
                  3 Years as a Developer
                </span>
              </div>
              <div className="flex items-center gap-x-1">
                <PiMagicWandThin />
                <span className="text-xs font-RubikRegular">3 Projects</span>
              </div>
            </div>

            <div className="border border-[#282828] text-neutral-300 my-6" />

            <div className="my-4 ">
              <h1 className="font-RubikRegular">Work History</h1>
              <div className="mt-7 flex  justify-between">
                <div className="flex gap-x-3">
                  <TbBrandNextjs className="text-xl" />
                  <div className="-mt-1">
                    <h3 className="text-sm font-RubikMedium">
                      NextJS Developer
                    </h3>
                    <p className="text-[9px]">Rankbit Tech. pvt. ltd.</p>
                  </div>
                </div>
                <small className="text-[9px] text-neutral-300">
                  May 2023 - December 2023
                </small>
              </div>
              <div className="my-3 flex  justify-between">
                <div className="flex gap-x-3">
                  <SiReact className="text-xl" />
                  <div className="-mt-1">
                    <h3 className="text-sm font-RubikMedium">Jr. React Dev</h3>
                    <p className="text-[9px]">Rankbit Tech. pvt. ltd.</p>
                  </div>
                </div>
                <small className="text-[9px] text-neutral-300">
                  March 2023 - April 2023
                </small>
              </div>
            </div>
            <div className="my-4 ">
              <h1 className="font-RubikRegular">Volunteering</h1>
              <div className="mt-7 flex  justify-between">
                <div className="flex gap-x-3">
                  <FaMicrosoft className="text-xl" />
                  <div className="-mt-1">
                    <h3 className="text-sm font-RubikMedium">
                      Student Ambassador
                    </h3>
                    <p className="text-[9px]">Microsoft Learn</p>
                  </div>
                </div>
                <small className="text-[9px] text-neutral-300">
                  January 2023 - Present
                </small>
              </div>
              <div className="my-3 flex  justify-between">
                <div className="flex gap-x-3">
                  <SiReact className="text-xl" />
                  <div className="-mt-1">
                    <h3 className="text-sm font-RubikMedium">
                      Community Leader
                    </h3>
                    <p className="text-[9px]">CODE-O-LOGIC</p>
                  </div>
                </div>
                <small className="text-[9px] text-neutral-300">
                  September 2023 - Present
                </small>
              </div>
              <div className="my-3 flex  justify-between">
                <div className="flex gap-x-3">
                  <SiReact className="text-xl" />
                  <div className="-mt-1">
                    <h3 className="text-sm font-RubikMedium">
                      Community Ambassador
                    </h3>
                    <p className="text-[9px]">Ahmedabad Developer Club</p>
                  </div>
                </div>
                <small className="text-[9px] text-neutral-300">
                  June 2023 - Present
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftpage;
