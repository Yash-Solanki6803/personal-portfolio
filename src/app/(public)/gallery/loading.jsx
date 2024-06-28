import { Loader } from "@/ui";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-screen flex items-center justify-center">
      Loading...
      <Loader />
    </div>
  );
}
