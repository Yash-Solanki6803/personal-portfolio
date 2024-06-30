function Loader({ size = 10 }) {
  return (
    <div class="relative inline-flex">
      <div class="w-8 h-8 bg-slate-400 rounded-full"></div>
      <div class="w-8 h-8 bg-slate-300 rounded-full absolute top-0 left-0 animate-ping"></div>
      <div class="w-8 h-8 bg-slate-200 rounded-full absolute top-0 left-0 animate-pulse"></div>
    </div>
  );
}

export default Loader;
