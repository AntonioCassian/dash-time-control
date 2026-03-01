import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement, ComponentProps<"button">>(({ className, type, ...props }, ref) => (
    <button type={type} className={cn("bg-[var(--color-primary)] inline-flex items-center justify-center gap-2 text-gray-50 p-2 rounded-sm cursor-pointer", className)} ref={ref} {...props} />
))

Button.displayName = "Button";

export { Button };