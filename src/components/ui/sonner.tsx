import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

/**
 * Sonner Toast Component
 * A toast notification system with a clean design and smooth animations
 * Built using the Sonner toast library
 * 
 * Features:
 * - Theme-aware styling
 * - Consistent design system integration
 * - Custom toast styling
 * - Accessible notifications
 * - Responsive layout
 * 
 * @example
 * ```tsx
 * // In your app root
 * <Toaster />
 * 
 * // To show a toast
 * toast("Hello World");
 * 
 * // With options
 * toast.success("Operation completed", {
 *   description: "Your changes have been saved"
 * });
 * ```
 */
const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                },
            }}
            {...props}
        />
    );
};

export { Toaster, toast };
