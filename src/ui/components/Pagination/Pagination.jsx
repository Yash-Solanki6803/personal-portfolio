"use client";

import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import { useRouter, useSearchParams } from "next/navigation";

function Pagination({ count }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("blogpage")) || 1;
  return (
    <div className=" flex justify-between">
      <button
        disabled={page <= 1}
        className="my-2 disabled:opacity-50"
        onClick={() => router.push(`?blogpage=${page - 1}`)}
      >
        <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center ml-3">
          <div className="bg-neutral-300 rounded-full h-5 w-5 flex items-center justify-center">
            <PiArrowLeftThin className="text-black text-lg" />
          </div>
        </div>
      </button>
      <button
        disabled={count <= page * 3}
        className="my-2 disabled:opacity-50"
        onClick={() => router.push(`?blogpage=${page + 1}`)}
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
