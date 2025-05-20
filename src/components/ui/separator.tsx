import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

/**
 * Separator Component
 * A visual divider that separates content
 * Built on top of Radix UI's Separator primitive
 * 
 * Features:
 * - Horizontal and vertical orientations
 * - Decorative or semantic separator roles
 * - Consistent styling with the design system
 * - Customizable through className prop
 * 
 * @example
 * ```tsx
 * {/* Horizontal separator *\/}
 * <Separator />
 * 
 * {/* Vertical separator *\/}
 * <Separator orientation="vertical" />
 * 
 * {/* With semantic role *\/}
 * <Separator decorative={false} />
 * ```
 */
const Separator = React.forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
    (
        { className, orientation = "horizontal", decorative = true, ...props },
        ref,
    ) => (
        <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={cn(
                "shrink-0 bg-border",
                orientation === "horizontal"
                    ? "h-[1px] w-full"  // Horizontal line styles
                    : "h-full w-[1px]", // Vertical line styles
                className,
            )}
            {...props}
        />
    ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
