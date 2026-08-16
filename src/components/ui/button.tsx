import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/25 shadow-[0_0_20px_rgba(0,0,0,0.2)]",
        destructive:
          "bg-red-500/20 text-red-200 border border-red-500/30 hover:bg-red-500/30",
        outline:
          "border border-white/12 bg-white/5 text-white hover:bg-white/10 hover:border-white/25",
        secondary:
          "bg-white/10 text-white border border-white/15 hover:bg-white/20",
        ghost: "hover:bg-white/10 text-white border border-transparent",
        link: "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2.5",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-12 rounded-full px-8 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
