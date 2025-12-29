'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
export default function ContactClient() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const captchaRef = useRef<ReCAPTCHA>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        // Simulator submission for static export
        setTimeout(() => {
            setIsSubmitting(false);
            setStatus({ type: 'success', message: 'Message sent successfully! (Simulation)' });
            setFormState({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-stone-50 text-stone-800">
            {/* Hero Section */}
            <section className="h-[50vh] bg-stone-900 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900/40 to-black/60 z-10" />
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
                    <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto font-light">
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
                            <h2 className="text-4xl text-stone-900 mb-6">Contact Details</h2>
                            <p className="text-stone-600 text-lg leading-relaxed max-w-md">
                                Reach out to us directly or visit our studio to discuss your vision over a cup of coffee.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <div className="flex items-start space-x-6 group">
                                <div className="w-14 h-14 rounded-full bg-stone-200 flex items-center justify-center text-stone-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11l-3 3m0 0l-3-3m3 3V9" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-stone-900">Our Studio</h3>
                                    <p className="text-stone-600 leading-relaxed mt-2">
                                        Sanskriti Architects, Eroor Road,<br />
                                        Labour Corner, Kochi, Kerala 682306
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="w-14 h-14 rounded-full bg-stone-200 flex items-center justify-center text-stone-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-stone-900">Email Us</h3>
                                    <p className="text-stone-600 leading-relaxed mt-2 hover:text-amber-700 transition-colors cursor-pointer">
                                        hello@sanskritiarchitects.in<br />
                                        projects@sanskritiarchitects.in
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="w-14 h-14 rounded-full bg-stone-200 flex items-center justify-center text-stone-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-stone-900">Call Us</h3>
                                    <p className="text-stone-600 leading-relaxed mt-2">
                                        +91 123 456 7890<br />
                                        Mon-Fri, 9am - 6pm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-10 md:p-14 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100"
                    >
                        <h2 className="text-3xl text-stone-900 mb-8">Send a Message</h2>
                        {status.message && (
                            <div className={`p-4 mb-6 rounded-lg ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                                {status.message}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-stone-500 mb-2 uppercase tracking-wide">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-amber-700 focus:ring-1 focus:ring-amber-700 outline-none transition-all placeholder-stone-400"
                                    placeholder="Your Name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone-500 mb-2 uppercase tracking-wide">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-amber-700 focus:ring-1 focus:ring-amber-700 outline-none transition-all placeholder-stone-400"
                                    placeholder="your.email@example.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-500 mb-2 uppercase tracking-wide">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-amber-700 focus:ring-1 focus:ring-amber-700 outline-none transition-all placeholder-stone-400 resize-none"
                                    placeholder="How can we help you?"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>

                            {/*
                            <div className="flex justify-center md:justify-start">
                                <ReCAPTCHA
                                    ref={captchaRef}
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // TEST SITE KEY from Google
                                />
                            </div>
                            */}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-stone-900 text-white font-medium text-lg rounded-lg shadow-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>

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
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-stone-50 to-transparent pointer-events-none" />
            </div>

        </div>
    );
}
