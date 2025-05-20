// 404 Not Found page with animated illustration and helpful navigation
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound: React.FC = () => {
    return (
        // Full-screen container with gradient background
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
            {/* Content container with animations */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* 404 heading with gradient text */}
                <motion.h1
                    className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.2,
                    }}
                >
                    404
                </motion.h1>

                {/* Error message */}
                <motion.p
                    className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Oops! Page not found.
                </motion.p>

                {/* Home navigation button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <Button
                        asChild
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                    >
                        <Link to="/" className="flex items-center gap-2">
                            <Home size={18} />
                            Return Home
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFound;
