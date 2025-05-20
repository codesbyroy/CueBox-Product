import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Label Variants
 * Defines consistent styles for form labels
 * Features:
 * - Base styles for typography and spacing
 * - Proper text color in light/dark modes
 * - Disabled state styling
 */
const labelVariants = cva(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

/**
 * Label Component
 * An accessible form label built on Radix UI's Label primitive
 * 
 * Features:
 * - Associates with form controls through htmlFor prop
 * - Proper ARIA attributes
 * - Consistent styling with design system
 * - Supports disabled states
 * - Customizable through className prop
 * 
 * @example
 * ```tsx
 * <Label htmlFor="email">Email</Label>
 * <Input id="email" type="email" />
 * ```
 */
const Label = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
        VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(labelVariants(), className)}
        {...props}
    />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
