'use client';

import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

export default function ContactClient() {
    return (
        <div className="min-h-screen bg-sansGray/5 text-sansGray">
            {/* Hero Section */}
            <section className="h-[50vh] bg-sansGray relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sansGray/40 to-black/60 z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-60 sepia-[.3]" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 text-center text-white px-4"
                >
                    <span className="inline-block py-1 px-3 mb-6 border border-white/30 rounded-full text-xs font- tracking-widest uppercase bg-white/10 backdrop-blur-sm">
                        Get in Touch
                    </span>
                    <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight italic">Let's Build Together</h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
                        Ready to start your next project? We are here to listen.
                    </p>
                </motion.div>
            </section>

            <div className="container mx-auto px-6 py-24 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-4xl text-sansGray mb-6">Contact Details</h2>
                            <p className="text-sansGray/60 text-lg leading-relaxed max-w-md">
                                Reach out to us directly or visit our studio to discuss your vision over a cup of coffee.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <div className="flex items-start space-x-6 group">
                                <div className="w-14 h-14 rounded-full bg-sansGray/10 flex items-center justify-center text-sansGray group-hover:bg-sansRed group-hover:text-white transition-all duration-300 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11l-3 3m0 0l-3-3m3 3V9" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-sansGray">Our Studio</h3>
                                    <p className="text-sansGray/60 leading-relaxed mt-2">
                                        Sanskriti Architects, Eroor Road,<br />
                                        Labour Corner, Kochi, Kerala 682306
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="w-14 h-14 rounded-full bg-sansGray/10 flex items-center justify-center text-sansGray group-hover:bg-sansRed group-hover:text-white transition-all duration-300 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-sansGray">Email Us</h3>
                                    <p className="text-sansGray/60 leading-relaxed mt-2 hover:text-sansRed transition-colors cursor-pointer">
                                        hello@sanskritiarchitects.in<br />
                                        projects@sanskritiarchitects.in
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="w-14 h-14 rounded-full bg-sansGray/10 flex items-center justify-center text-sansGray group-hover:bg-sansRed group-hover:text-white transition-all duration-300 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-sansGray">Call Us</h3>
                                    <p className="text-sansGray/60 leading-relaxed mt-2">
                                        +91 123 456 7890<br />
                                        Mon-Fri, 9am - 6pm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <ContactForm />

                </div>
            </div>

            {/* Full Bleed Google Map */}
            <div className="w-full h-[60vh] relative grayscale-[0.8] hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.478013244131!2d76.33422589999999!3d9.9773152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080cb58b8726bd%3A0x258c0f87b0d09d60!2sSanskriti%20Architects!5e0!3m2!1sen!2sin!4v1765808201134!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sanskriti Architects Location"
                ></iframe>
                {/* Gradient fade from content to map */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sansGray/5 to-transparent pointer-events-none" />
            </div>

        </div>
    );
}
