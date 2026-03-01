import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, HtmlHTMLAttributes } from "react";

const Card = forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>> (({className, ...props}, ref) => (
    <div ref={ref} className={cn("rounded-lg border bg-[var(--bg-card)] text-[var(--card-foreground)] shadow-sm", className)}  {...props} />
))

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>> (({className, ...props}, ref) => (
    <div ref={ref} className={cn("flex flex-col space-x-1.5 p-6", className)}  {...props} />
))

CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>> (({className, ...props}, ref) => (
    <h3 ref={ref}  className={cn("text-2xl font-semibold leading-none tracking-tight", className)}  {...props} />
))

CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>> (({className, ...props}, ref) => (
    <p ref={ref}  className={cn("text-sm text-[var(--muted-foreground)]", className)}  {...props} />
))

CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>> (({className, ...props}, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)}  {...props} />
))

CardContent.displayName = "CardContent"

const CardFooter = forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>> (({className, ...props}, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)}  {...props} />
))

CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter}