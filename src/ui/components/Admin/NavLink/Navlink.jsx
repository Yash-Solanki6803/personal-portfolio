import Link from "next/link";
function Navlink({ href = "/", children, className = "" }) {
  return (
    <Link
      href={href}
      className={
        "bg-[#696969] px-4 py-2 rounded-full text-xs w-full font-RubikMedium text-neutral-50 hover:bg-[#4a4a4a]  transition-all ease-in duration-300" +
        className
      }
    >
      {children}
    </Link>
  );
}

export default Navlink;
