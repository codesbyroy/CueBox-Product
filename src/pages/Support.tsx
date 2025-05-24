// Support page component that shows the index page with support form open
import React, { useState, useEffect } from "react";
import Index from "./Index";
import SupportForm from "@/components/SupportForm";

const Support = () => {
    const [showSupportForm, setShowSupportForm] = useState(false);
    
    // Open the support form when the component mounts
    useEffect(() => {
        // Small delay to ensure the page is fully loaded
        const timer = setTimeout(() => {
            setShowSupportForm(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <>
            <Index />
            {showSupportForm && (
                <SupportForm 
                    isOpen={showSupportForm} 
                    onClose={() => setShowSupportForm(false)} 
                />
            )}
        </>
    );
};

export default Support;