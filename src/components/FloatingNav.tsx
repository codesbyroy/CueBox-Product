// Floating navigation component that provides persistent access to key actions
import { useState, memo } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SupportForm from "./SupportForm";

// Animation variants for nav container
const navVariants = {
    hidden: {
        opacity: 0,
        y: -20,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.95,
        transition: { duration: 0.2 },
    },
};

const FloatingNav = memo(() => {
    // Track support form visibility
    const [isSupportOpen, setIsSupportOpen] = useState(false);
    const handleSupportClose = () => setIsSupportOpen(false);
    const handleSupportClick = () => setIsSupportOpen(true);

    // Check current route for conditional rendering
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <>
            {/* Support form modal */}
            <SupportForm isOpen={isSupportOpen} onClose={handleSupportClose} />
            
            {/* Animated navigation bar */}
            <AnimatePresence>
                <motion.div
                    className="fixed top-4 right-16 z-50 flex gap-4 bg-indigo-600/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Conditional home link */}
                    {!isHomePage && (
                        <a
                            href="/"
                            className="text-white hover:text-yellow-200 transition-colors text-sm"
                        >
                            Home
                        </a>
                    )}
                    
                    {/* Extension download link */}
                    <a
                        href="https://chromewebstore.google.com/detail/flihmekgclecklblbnocoagjdapgeakm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-200 transition-colors text-sm"
                    >
                        Download
                    </a>
                    
                    {/* Support button */}
                    <button
                        onClick={handleSupportClick}
                        className="text-white hover:text-yellow-200 transition-colors text-sm bg-transparent border-none cursor-pointer"
                    >
                        Support
                    </button>
                    
                    {/* Privacy policy link */}
                    <a
                        href="/privacy"
                        className="text-white hover:text-yellow-200 transition-colors text-sm"
                    >
                        Privacy Policy
                    </a>
                </motion.div>
            </AnimatePresence>
        </>
    );
});

FloatingNav.displayName = "FloatingNav";

export default FloatingNav;
