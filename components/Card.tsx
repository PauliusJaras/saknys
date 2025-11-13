import { cn } from "@/helpers/cn";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-xl w-full h-full overflow-hidden", className)}>
      {children}
    </div>
  );
}
