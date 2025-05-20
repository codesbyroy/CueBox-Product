import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Toggle button variants configuration using class-variance-authority
 * Defines styles for different states and variants of the toggle button
 * 
 * Variants:
 * - default: Simple transparent background toggle
 * - outline: Toggle with a border and transparent background
 * 
 * Sizes:
 * - default (h-10)
 * - sm (h-9)
 * - lg (h-11)
 */
const toggleVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                outline:
                    "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
            },
            size: {
                default: "h-10 px-3",
                sm: "h-9 px-2.5",
                lg: "h-11 px-5",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

/**
 * Toggle component
 * A two-state button that can be either on or off
 * Built on top of Radix UI's Toggle primitive
 * 
 * Features:
 * - Multiple visual variants (default, outline)
 * - Three size options (sm, default, lg)
 * - Accessible keyboard navigation
 * - Support for disabled state
 * - Customizable through className prop
 * 
 * @example
 * ```tsx
 * <Toggle variant="outline" size="lg">
 *   Toggle Me
 * </Toggle>
 * ```
 */
const Toggle = React.forwardRef<
    React.ElementRef<typeof TogglePrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
        VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
        ref={ref}
        className={cn(toggleVariants({ variant, size, className }))}
        {...props}
    />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
