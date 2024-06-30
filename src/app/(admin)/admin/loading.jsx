import { Loader } from "@/ui";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <Loader />
    </div>
  );
}
