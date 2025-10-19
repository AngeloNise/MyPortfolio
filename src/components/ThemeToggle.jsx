import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    // Set default theme to 'dark' if there's no stored theme in localStorage
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check if theme is stored in localStorage, otherwise default to dark
        const storedTheme = localStorage.getItem("theme");
        return storedTheme ? storedTheme === "dark" : true; // Default to dark mode
    });

    useEffect(() => {
        // Set the theme on the document based on the state
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]); // Re-run this effect when the `isDarkMode` changes

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev); // Toggle theme on button click
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};
