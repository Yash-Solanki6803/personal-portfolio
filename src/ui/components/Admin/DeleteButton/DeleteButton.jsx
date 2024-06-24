"use client";

function DeleteButton({ slug, type = "blogs" }) {
  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WEB_URL}/api/${type}/${slug}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    alert(data?.message);
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
