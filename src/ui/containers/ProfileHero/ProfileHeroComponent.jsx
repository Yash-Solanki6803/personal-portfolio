import ProfileImage from "./ProfileImage/ProfileImage";
import Link from "next/link";
import { PiBookOpenTextLight, PiHouseLight } from "react-icons/pi";

function ProfileHeroComponent() {
  return (
    <div className="flex relative">
      <div className="w-full  relative">
        <ProfileImage />
        <h1 className="font-RubikExtraBold text-xl  text-neutral-300 mt-3">
          Yash Solanki
        </h1>
        <p className="text-xs font-RubikMedium text-neutral-300 mt-2">
          yashsolanki.dev@gmail.com
        </p>

        <p className="text-xs font-RubikMedium text-neutral-300 mt-1">
          4th Year Student | Software Engineer
        </p>

        <div className="flex w-full   ">
          <div className="flex gap-1 flex-wrap text-xs my-4">
            <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
              Developer
            </p>
            <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
              Designer
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

      <div className="flex absolute right-0 gap-x-1 w-fit h-fit">
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
  );
}

export default ProfileHeroComponent;
