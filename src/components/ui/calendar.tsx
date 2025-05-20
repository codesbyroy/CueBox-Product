import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

/**
 * A customizable calendar component built on top of react-day-picker.
 * Features:
 * - Consistent styling with the application's design system
 * - Customizable month/year navigation
 * - Support for outside days visibility
 * - Responsive layout with mobile optimization
 * - Customizable styling through classNames prop
 * - Accessibility features for keyboard navigation and screen readers
 *
 * @component
 * @param {object} props - Component props extending DayPicker's props
 * @param {string} props.className - Additional CSS classes
 * @param {object} props.classNames - Custom class names for calendar elements
 * @param {boolean} props.showOutsideDays - Whether to show days from previous/next months
 */
function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn("p-3", className)}
            classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0", // Container for months
                month: "space-y-4", // Individual month container
                caption: "flex justify-center pt-1 relative items-center", // Month/year header
                caption_label: "text-sm font-medium", // Month/year text
                nav: "space-x-1 flex items-center", // Navigation container
                nav_button: cn(
                    buttonVariants({ variant: "outline" }),
                    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100", // Navigation buttons
                ),
                nav_button_previous: "absolute left-1", // Previous month button
                nav_button_next: "absolute right-1", // Next month button
                table: "w-full border-collapse space-y-1", // Calendar grid
                head_row: "flex", // Weekday header row
                head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]", // Weekday header cells
                row: "flex w-full mt-2", // Week row
                cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20", // Day cell
                day: cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-9 w-9 p-0 font-normal aria-selected:opacity-100", // Day button
                ),
                day_range_end: "day-range-end", // End of date range marker
                day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground", // Selected day
                day_today: "bg-accent text-accent-foreground", // Current day
                day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30", // Days from previous/next months
                day_disabled: "text-muted-foreground opacity-50", // Disabled days
                day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground", // Middle days in a range
                day_hidden: "invisible", // Hidden days
                ...classNames,
            }}
            components={{
                IconLeft: ({ ..._props }) => (
                    <ChevronLeft className="h-4 w-4" />
                ),
                IconRight: ({ ..._props }) => (
                    <ChevronRight className="h-4 w-4" />
                ),
            }}
            {...props}
        />
    );
}
Calendar.displayName = "Calendar";

export { Calendar };
