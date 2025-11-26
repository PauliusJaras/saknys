export default function MenuOpenButton({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer relative p-4.75 rounded-lg bg-current/5 hover:bg-current/10 hover:border-current/25 border border-current/15 transition-all duration-500 ease-out-in group"
    >
      <span className="absolute h-px w-5 bg-current group-hover:top-1/2 top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out-in"></span>
      <span className="absolute h-px w-5 bg-current top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
      <span className="absolute h-px w-5 bg-current group-hover:bottom-1/2 bottom-[35%] left-1/2 -translate-x-1/2 translate-y-1/2 transition-all duration-300 ease-out-in"></span>
    </button>
  );
}
