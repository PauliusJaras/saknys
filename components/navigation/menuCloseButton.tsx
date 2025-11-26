export default function MenuCloseButton() {
  return (
    <button className="cursor-pointer relative p-4.75 rounded-lg bg-current/5 hover:bg-current/10 hover:border-current/25 border border-current/15 transition-all duration-500 ease-out-in group">
      <span className="rotate-45 group-hover:rotate-0 absolute h-px w-5 bg-current top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out-in"></span>
      <span className="-rotate-45 group-hover:rotate-0 absolute h-px w-5 bg-current top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out-in"></span>
    </button>
  );
}
