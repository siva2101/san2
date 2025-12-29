"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 md:p-14 rounded-3xl shadow-xl shadow-sansGray/20 border border-sansGray/10"
        >
            <h2 className="text-3xl text-sansGray mb-8">Send a Message</h2>
            {status.message && (
                <div className={`p-4 mb-6 rounded-lg ${status.type === 'success' ? 'bg-sansRed/10 text-sansRed' : 'bg-red-50 text-red-800'}`}>
                    {status.message}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sansGray/50 mb-2 uppercase tracking-wide">Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-sansGray/5 border border-sansGray/20 focus:border-sansRed focus:ring-1 focus:ring-sansRed outline-none transition-all placeholder-sansGray/40"
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sansGray/50 mb-2 uppercase tracking-wide">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-sansGray/5 border border-sansGray/20 focus:border-sansRed focus:ring-1 focus:ring-sansRed outline-none transition-all placeholder-sansGray/40"
                        placeholder="your.email@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-sansGray/50 mb-2 uppercase tracking-wide">Message</label>
                    <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-sansGray/5 border border-sansGray/20 focus:border-sansRed focus:ring-1 focus:ring-sansRed outline-none transition-all placeholder-sansGray/40 resize-none"
                        placeholder="How can we help you?"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-sansGray text-white font-medium text-lg rounded-lg shadow-lg hover:bg-sansRed hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </motion.div>
    );
}
