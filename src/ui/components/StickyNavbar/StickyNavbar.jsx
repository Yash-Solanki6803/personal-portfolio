import Link from "next/link";
import { PiArrowLeftThin } from "react-icons/pi";

function StickyNavbar() {
  return (
    <div className="sticky top-5 z-40">
      <div className=" ">
        <div className="-mt-6   ">
          <div className="bg-neutral-700/25 backdrop-blur-md h-10  w-full rounded-xl flex items-center gap-x-7 ">
            <Link href={"/gallery"}>
              <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center ml-3">
                <div className="bg-neutral-300 rounded-full h-5 w-5 flex items-center justify-center">
                  <PiArrowLeftThin className="text-black text-lg" />
                </div>
              </div>
            </Link>

            <Link href={"/"}>
              <button className="text-xs bg-neutral-700/25 p-1 w-16 h-6 rounded-md">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickyNavbar;
