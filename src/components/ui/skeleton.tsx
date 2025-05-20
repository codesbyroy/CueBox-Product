// Loading placeholder component that mimics content structure
import { cn } from "@/lib/utils";

// Skeleton component for displaying loading states
function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        // Base skeleton with pulse animation and rounded corners
        <div
            className={cn("animate-pulse rounded-md bg-muted", className)}
            {...props}
        />
    );
}

export { Skeleton };
