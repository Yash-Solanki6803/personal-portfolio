import Link from "next/link";

function EditButton({ slug, type = "blogs" }) {
  return (
    <Link
      className="px-3 py-1 border rounded-md border-neutral-500 hover:border-yellow-400 hover:text-yellow-500 transition-all duration-500 text-center"
      href={`/admin/${type}/edit/${slug}`}
    >
      Edit
    </Link>
  );
}

export default EditButton;
