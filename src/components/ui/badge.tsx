import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border-2 border-foreground px-3 py-1 text-xs font-bold font-heading tracking-wide transition-all shadow-[2px_2px_0px_#1E293B]",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-accent-foreground",
        secondary:
          "bg-secondary text-foreground",
        tertiary:
          "bg-tertiary text-foreground",
        mint:
          "bg-quaternary text-foreground",
        sticker:
          "bg-white text-foreground hover:rotate-1",
        outline:
          "bg-transparent text-foreground shadow-none",
      },
    },
    defaultVariants: {
      variant: "sticker",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
