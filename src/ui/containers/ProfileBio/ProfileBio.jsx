import { FaMicrosoft } from "react-icons/fa";
import { PiMagicWandThin, PiShapesThin } from "react-icons/pi";
import { SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function ProfileBio() {
  return (
    <div className="w-full mt-5 text-neutral-300">
      <h2 className="font-RubikBold my-4">Bio</h2>
      <p className="text-[12px]  font-RubikRegular my-3">
        The world of digital design and <br /> development is constantly
        evolving and so <br /> has my role over the last 4 years.{" "}
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
          <span className="text-xs font-RubikRegular">3 Clients</span>
        </div>
      </div>

      <div className="border border-[#282828] text-neutral-300 my-6" />

      {/* Work History Section */}
      <div className="my-4 ">
        <h1 className="font-RubikRegular">Work History</h1>
        <div className="mt-7 flex  justify-between">
          <div className="flex gap-x-3  w-2/3">
            <TbBrandNextjs className="text-xl" />
            <div className="-mt-1">
              <h3 className="text-sm font-RubikMedium">NextJS Developer</h3>
              <p className="text-[9px]">Rankbit Tech. pvt. ltd.</p>
            </div>
          </div>
          <small className="text-[9px] text-neutral-300 w-1/3">
            May 2023 - Dec 2023
          </small>
        </div>
        <div className="my-3 flex  justify-between">
          <div className="flex gap-x-3 w-2/3">
            <SiReact className="text-xl" />
            <div className="-mt-1">
              <h3 className="text-sm font-RubikMedium">Jr. React Dev</h3>
              <p className="text-[9px]">Rankbit Tech. pvt. ltd.</p>
            </div>
          </div>
          <small className="text-[9px] text-neutral-300 w-1/3">
            March 2023 - April 2023
          </small>
        </div>
      </div>

      {/* Volunteering Section */}
      <div className="my-4 md:block hidden">
        <h1 className="font-RubikRegular">Volunteering</h1>
        <div className="mt-7 flex  justify-between">
          <div className="flex gap-x-3 w-2/3">
            <FaMicrosoft className="text-xl" />
            <div className="-mt-1">
              <h3 className="text-sm font-RubikMedium">Student Ambassador</h3>
              <p className="text-[9px]">Microsoft Learn</p>
            </div>
          </div>
          <small className="text-[9px] text-neutral-300 w-1/3">
            Jan 2023 - Present
          </small>
        </div>
        <div className="my-3 flex  justify-between">
          <div className="flex gap-x-3 w-2/3">
            <SiReact className="text-xl" />
            <div className="-mt-1">
              <h3 className="text-sm font-RubikMedium">Community Leader</h3>
              <p className="text-[9px]">CODE-O-LOGIC</p>
            </div>
          </div>
          <small className="text-[9px] text-neutral-300 w-1/3">
            Sept 2023 - Present
          </small>
        </div>
        <div className="my-3 flex  justify-between">
          <div className="flex gap-x-3 w-2/3 ">
            <SiReact className="text-xl" />
            <div className="-mt-1">
              <h3 className="text-sm font-RubikMedium">Community Ambassador</h3>
              <p className="text-[9px]">Ahmedabad Developer Club</p>
            </div>
          </div>
          <small className="text-[9px] text-neutral-300 w-1/3">
            June 2023 - Present
          </small>
        </div>
      </div>
    </div>
  );
}

export default ProfileBio;
