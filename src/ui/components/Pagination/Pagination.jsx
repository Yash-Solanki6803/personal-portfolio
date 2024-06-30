"use client";

import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import { useRouter, useSearchParams } from "next/navigation";

function Pagination({ count, type = "Blogs" }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const projectPage = parseInt(searchParams.get("projectPage")) || 1;
  const blogPage = parseInt(searchParams.get("blogPage")) || 1;

  const isDisabledLeft = () => {
    if (type === "Projects") {
      return projectPage <= 1;
    }
    return blogPage <= 1;
  };

  const isDisabledRight = () => {
    if (type === "Projects") {
      return count <= projectPage * 3;
    } else {
      return count <= blogPage * 3;
    }
  };

  const handleClickLeft = () => {
    if (type === "Projects") {
      router.replace(`?blogPage=${blogPage}&projectPage=${projectPage - 1}`, {
        scroll: false,
      });
    } else {
      router.replace(`?blogPage=${blogPage - 1}&projectPage=${projectPage}`, {
        scroll: false,
      });
    }
  };
  const handleClickRight = () => {
    if (type === "Projects") {
      router.replace(`?blogPage=${blogPage}&projectPage=${projectPage + 1}`, {
        scroll: false,
      });
    } else {
      router.replace(`?blogPage=${blogPage + 1}&projectPage=${projectPage}`, {
        scroll: false,
      });
    }
  };

  return (
    <div className=" flex justify-between">
      <button
        disabled={isDisabledLeft()}
        className="my-2 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleClickLeft}
      >
        <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center ml-3">
          <div className="bg-neutral-300 rounded-full h-5 w-5 flex items-center justify-center">
            <PiArrowLeftThin className="text-black text-lg" />
          </div>
        </div>
      </button>
      <button
        disabled={isDisabledRight()}
        className="my-2 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleClickRight}
      >
        <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center mr-3">
          <div className="bg-neutral-300 rounded-full h-5 w-5 flex items-center justify-center">
            <PiArrowRightThin className="text-black text-lg" />
          </div>
        </div>
      </button>
    </div>
  );
}

export default Pagination;
