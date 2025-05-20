// Support form modal component for user feedback and inquiries
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Send, User, Mail } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

// Props interface for form state management
interface SupportFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const SupportForm: React.FC<SupportFormProps> = ({ isOpen, onClose }) => {
    // Form state management
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");
    }, []);

    // Clear form and focus first input when form opens
    useEffect(() => {
        if (isOpen) {
            // Clear form fields when opening
            setName("");
            setEmail("");
            setFeedback("");
            
            // Focus on name input after a short delay
            setTimeout(() => {
                const nameInput = document.getElementById("name");
                if (nameInput) nameInput.focus();
            }, 300);
        }
    }, [isOpen]);

    // Close on escape key press
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form
        if (!name.trim()) {
            toast({
                description: "Please enter your name.",
                variant: "destructive",
                duration: 3000,
            });
            return;
        }

        if (!email.trim()) {
            toast({
                description: "Please enter your email.",
                variant: "destructive",
                duration: 3000,
            });
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast({
                description: "Please enter a valid email address.",
                variant: "destructive",
                duration: 3000,
            });
            return;
        }

        setIsSubmitting(true);

        try {
            // Send email using EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                message: feedback,
                to_email: "dev.souravroy@gmail.com",
            };

            // Attempt to send via EmailJS
            try {
                await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
                    templateParams,
                );

                // Show success message
                toast({
                    description:
                        "Your feedback has been submitted. We'll get back to you soon!",
                });

                // Reset form and close
                setName("");
                setEmail("");
                setFeedback("");
                onClose();
            } catch (emailError) {
                console.error("EmailJS error:", emailError);

                // Fallback to mailto link if EmailJS fails
                const mailtoLink = `mailto:dev.souravroy@gmail.com?subject=Support Request from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nFeedback: ${feedback}`)}`;
                window.open(mailtoLink);

                toast({
                    title: "Email Client Opened",
                    description:
                        "Please send the email to complete your request.",
                });

                // Reset form and close
                setName("");
                setEmail("");
                setFeedback("");
                onClose();
            }
        } catch (error) {
            toast({
                description:
                    "Failed to submit your feedback. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-40 font-sans">
            {/* Backdrop with blur effect */}
            <motion.div
                className="absolute inset-0 bg-black/30 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            {/* Form modal */}
            <motion.div
                className="relative bg-white/90 dark:bg-gray-800/90 p-8 rounded-2xl shadow-2xl z-50 w-full max-w-md backdrop-blur-sm border border-white/20 m-4"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 30 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
            >
                <motion.div
                    className="absolute -top-16 left-0 right-0 mx-auto w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Send size={32} className="text-white" />
                </motion.div>

                <div className="flex justify-between items-center mb-2 mt-4">
                    <motion.h2
                        className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        We'd Love to Hear From You
                    </motion.h2>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="h-8 w-8 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        <X size={18} />
                    </Button>
                </div>

                <motion.p
                    className="text-sm text-gray-500 dark:text-gray-400 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Thanks for taking your time to use the extension. Your
                    feedback will be considered for our next release.
                </motion.p>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-1"
                        >
                            Name
                        </label>
                        <div className="flex items-center rounded-xl bg-white dark:bg-gray-700 pl-3 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                            <User size={18} className="text-gray-400" />
                            <input
                                id="name"
                                name="from_name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="John Doe"
                                className="block min-w-0 grow py-1.5 px-3 text-base text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none sm:text-sm/6 bg-transparent"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-1"
                        >
                            Email
                        </label>
                        <div className="flex items-center rounded-xl bg-white dark:bg-gray-700 pl-3 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                            <Mail size={18} className="text-gray-400" />
                            <input
                                id="email"
                                name="from_email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="you@example.com"
                                className="block min-w-0 grow py-1.5 px-3 text-base text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none sm:text-sm/6 bg-transparent"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <label
                            htmlFor="feedback"
                            className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-1"
                        >
                            Got Thoughts? Let Us Know!
                        </label>
                        <div className="rounded-xl bg-white dark:bg-gray-700 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 has-[textarea:focus-within]:outline-2 has-[textarea:focus-within]:-outline-offset-2 has-[textarea:focus-within]:outline-indigo-600">
                            <textarea
                                id="feedback"
                                name="message"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                placeholder="Tell us how we can help..."
                                rows={4}
                                className="block w-full py-1.5 px-3 text-base text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none sm:text-sm/6 bg-transparent resize-none rounded-xl"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-2 rounded-xl transition-all shadow-md hover:shadow-lg"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Submitting...
                                </span>
                            ) : (
                                <span className="flex items-center justify-center">
                                    Submit <Send size={16} className="ml-2" />
                                </span>
                            )}
                        </Button>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
};

export default SupportForm;
