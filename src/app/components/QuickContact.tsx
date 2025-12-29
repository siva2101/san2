"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

export default function QuickContact() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Close modal when path changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Disable body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Do not show on the contact page
    if (pathname === "/contact") return null;

    return (
        <>
            {/* Sticky Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-sansRed text-white py-6 px-2 rounded-l-lg shadow-lg hover:shadow-xl hover:pl-4 transition-all duration-300 font-medium tracking-wide cursor-pointer hidden md:block"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                aria-label="Open Quick Contact"
            >
                Quick Contact
            </button>

            {/* Mobile Floating Action Button variant (icon only) */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-24 right-8 z-40 bg-sansRed text-white p-3 rounded-full shadow-lg md:hidden hover:scale-110 transition-transform"
                aria-label="Open Quick Contact"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </button>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto custom-scrollbar rounded-3xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-gray-100/80 hover:bg-gray-200 text-gray-500 rounded-full transition-colors backdrop-blur-md"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {/* Contact Form Container (Component handles its own styling, but we wrap it to ensure clean modal presentation) */}
                            <div className="bg-white">
                                <ContactForm isModal={true} />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
