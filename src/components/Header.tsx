import { useState, memo } from "react";
import { CornerDownLeft, Search } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import SupportForm from "./SupportForm";
import { headerContent } from "@/content";

// Animation variants defined outside component
const logoContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const logoImageVariants = {
    animate: {
        rotate: [0, 10, 0],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
};

const logoTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
};

const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
};

const searchBarVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { delay: 0.7, type: "spring", stiffness: 100 },
    },
};

// Background pattern as a constant to avoid re-creation
const PATTERN_BG =
    "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6bTAtMThjMCAxIDEgMiAyIDI')]";

const Header = memo(() => {
    const [isSupportFormOpen, setIsSupportFormOpen] = useState(false);
    const closeSupportForm = () => setIsSupportFormOpen(false);

    return (
        <header className="text-center py-16 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
            <ThemeToggle />
            <div className="absolute inset-0 opacity-10">
                <div className={`absolute inset-0 ${PATTERN_BG}`}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <SupportForm
                    isOpen={isSupportFormOpen}
                    onClose={closeSupportForm}
                />

                <motion.div
                    className="flex items-center justify-center gap-4 mb-6"
                    variants={logoContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.img
                        src="/icon/icon128.png"
                        alt="CueBox Logo"
                        className="w-16 h-16"
                        variants={logoImageVariants}
                        animate="animate"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        {headerContent.title}
                        <motion.span
                            className="text-yellow-300 ml-2"
                            variants={logoTextVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {headerContent.subtitle}
                        </motion.span>
                    </h1>
                </motion.div>

                <motion.p
                    className="text-xl text-white/90 max-w-2xl mx-auto mb-8"
                    variants={descriptionVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {headerContent.description}
                </motion.p>

                <motion.div
                    className="flex items-center justify-center space-x-2 text-white/80 text-sm max-w-xs mx-auto bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm"
                    variants={searchBarVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Search className="w-4 h-4" />
                    <span>{headerContent.searchBarText}</span>
                    <CornerDownLeft className="w-4 h-4" />
                </motion.div>
            </div>
        </header>
    );
});

Header.displayName = "Header";

export default Header;
