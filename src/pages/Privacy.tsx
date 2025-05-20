import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

// Privacy Policy page component with motion animations and styled sections
const Privacy: React.FC = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <ThemeToggle />
            {/* Main content container with gradient background */}
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Header section with navigation and title */}
                    <div className="mb-8">
                        <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="mb-6"
                        >
                            <Link
                                to="/"
                                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>

                        {/* Title and metadata */}
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl font-bold text-[#1f4b55] dark:text-white mb-3">
                                CueBox Privacy Policy
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 mb-2">
                                Last updated: 17th May, 2025
                            </p>
                            <p className="text-md font-medium">
                                Built and managed by{" "}
                                <span className="font-bold text-[#1f4b55] dark:text-white">
                                    Hablar
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Privacy policy content sections */}
                    <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                        <p>
                            This Privacy Policy describes how CueBox, a product
                            by Hablar (the "Company", "we", "us", or "our")
                            collects, uses, and discloses your personal
                            information when you use our Chrome Extension
                            (CueBox Chrome Extension) or otherwise communicate
                            with us (collectively, the "Services").
                        </p>

                        <h2 className="text-2xl font-semibold text-[#1f4b55] dark:text-white mt-8 mb-4">
                            Data Collection and Storage
                        </h2>
                        <p>
                            CueBox does not collect or transmit your personal
                            data to our servers. All data is stored locally
                            either in your browser's local storage or using
                            Google Chrome's synced storage if you are logged in
                            to your Google account and have sync enabled.
                        </p>
                        <p>
                            This means that you are in complete control of your
                            data. At no point is your information shared with us
                            or any third parties. You can clear or manage your
                            data anytime from your browser settings.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#1f4b55] dark:text-white mt-8 mb-4">
                            How We Use the Data
                        </h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>
                                To provide a personalized and seamless user
                                experience.
                            </li>
                            <li>
                                To save your preferences and data locally for
                                future sessions.
                            </li>
                            <li>
                                To sync your data across devices using Chrome's
                                built-in sync feature (if enabled).
                            </li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-[#1f4b55] dark:text-white mt-8 mb-4">
                            No Third-Party Sharing
                        </h2>
                        <p>
                            We do not share, sell, or distribute your
                            information to any third-party services. Your data
                            is private and remains on your device or within your
                            Google account's secure cloud storage (if sync is
                            enabled).
                        </p>

                        <h2 className="text-2xl font-semibold text-[#1f4b55] dark:text-white mt-8 mb-4">
                            Security and Responsibility
                        </h2>
                        <p>
                            While we ensure your data remains local, it's your
                            responsibility to secure your device and Google
                            account. We recommend using strong passwords and
                            enabling two-factor authentication.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#1f4b55] dark:text-white mt-8 mb-4">
                            Changes to This Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy to reflect changes
                            in our services or practices. Updates will be posted
                            on this page with the revised date.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#1f4b55] dark:text-white mt-8 mb-4">
                            Contact Us
                        </h2>
                        <p>
                            If you have any questions or concerns about this
                            policy, you can contact us at{" "}
                            <a
                                href="mailto:dev.souravroy@gmail.com"
                                className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                            >
                                dev.souravroy@gmail.com
                            </a>
                            .
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
                        © 2025 Hablar. All rights reserved.
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;
