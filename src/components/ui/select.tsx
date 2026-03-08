import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

const Select = forwardRef<HTMLSelectElement, ComponentProps<"select">>(
  ({ className, children, ...props }, ref) => (
    <select
      className={cn(
        "flex h-10 w-full rounded-md border border-[var(--color-input)] bg-[var(--bg-background)] px-3 py-2 text-base text-[var(--color-foreground)] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  )
);

Select.displayName = "Select";

export { Select };