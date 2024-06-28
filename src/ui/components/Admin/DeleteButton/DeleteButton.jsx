"use client";
import { useRouter } from "next/navigation";
// import { cookies } from "next/headers";

function DeleteButton({ slug, type = "blogs" }) {
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WEB_URL}/api/${type}/${slug}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    alert(data?.message);
    // Refresh the page
    router.refresh();
  };
  return (
    <button
      onClick={handleDelete}
      className="px-3 py-1 border rounded-md border-neutral-500 hover:border-red-400 hover:text-red-500 transition-all duration-500 text-center"
    >
      Delete
    </button>
  );
}

export default DeleteButton;
