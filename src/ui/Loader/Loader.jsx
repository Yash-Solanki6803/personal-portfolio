function Loader({ size = 10 }) {
  return (
    <div
      className={`w-${size} h-${size} border-2 border-transparent border-t-white  rounded-full animate-spin`}
    ></div>
  );
}

export default Loader;
