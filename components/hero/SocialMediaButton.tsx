import { cn } from "@/helpers/cn";

export default function SocialMediaButton({
  children,
  className,
  src,
}: {
  children: React.ReactNode;
  className?: string;
  src: string;
}) {
  return (
    <a
      target="_blank"
      className={cn(
        "rounded-full p-2 cursor-pointer bg-current/5 hover:bg-current/10 hover:border-current/25 border border-current/15 transition-all duration-500 ease-out-in",
        className
      )}
      href={src}
    >
      {children}
    </a>
  );
}
