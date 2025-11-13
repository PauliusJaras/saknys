export default function MenuOpenButton() {
  return (
    <button className="cursor-pointer relative p-6 rounded-lg bg-current/5 hover:bg-current/10 hover:border-current/25 border border-current/15 transition-all duration-500 ease-out-in group">
      <span className="absolute h-0.5 w-7 bg-current group-hover:top-1/2 top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out-in"></span>
      <span className="absolute h-0.5 w-7 bg-current top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
      <span className="absolute h-0.5 w-7 bg-current group-hover:bottom-1/2 bottom-[35%] left-1/2 -translate-x-1/2 translate-y-1/2 transition-all duration-300 ease-out-in"></span>
    </button>
  );
}
