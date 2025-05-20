import { useEffect, memo, Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    BrowserRouter,
    Routes,
    Route,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FloatingNav from "./components/FloatingNav";

// Lazy load Privacy page to reduce initial bundle size
const Privacy = lazy(() => import("./pages/Privacy"));

// Configure global query client with optimized settings
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // Prevent unnecessary refetches
            retry: 1, // Limit retry attempts for failed queries
        },
    },
});

// Fallback component shown while lazy-loaded components are loading
const LoadingFallback = memo(() => (
    <div className="flex items-center justify-center min-h-screen">
        Loading...
    </div>
));
LoadingFallback.displayName = "LoadingFallback";

const App = memo(() => {
    // Initialize theme based on system preference or stored value
    useEffect(() => {
        const isDarkMode =
            localStorage.getItem("theme") === "dark" ||
            (!localStorage.getItem("theme") &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);

        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter
                    future={{
                        v7_startTransition: true,
                        v7_relativeSplatPath: true,
                    }}
                >
                    <FloatingNav />
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route path="/" element={<Index />} />
                            <Route
                                path="/privacy"
                                element={
                                    <Suspense fallback={<LoadingFallback />}>
                                        <Privacy />
                                    </Suspense>
                                }
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </AnimatePresence>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    );
});

App.displayName = "App";

export default App;
