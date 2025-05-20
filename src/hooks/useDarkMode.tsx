import { useState, useEffect } from "react";

type Theme = "dark" | "light";

export default function useDarkMode() {
    const [theme, setTheme] = useState<Theme>(() => {
        // Check for stored theme preference
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme") as Theme | null;

            // If user has explicitly set a theme, use that
            if (storedTheme) {
                return storedTheme;
            }

            // Otherwise check system preference
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                return "dark";
            }
        }

        return "light";
    });

    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        // Save theme preference
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
}
