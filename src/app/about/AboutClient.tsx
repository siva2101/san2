'use client';

import { motion, useScroll, useTransform, useSpring, MotionValue, Variants } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    }
};

const staggerContainer: Variants = {
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

function ParallaxImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect: moves the image slightly against the scroll direction
    const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

    return (
        <div ref={ref} className={`overflow-hidden relative ${className}`}>
            <motion.div style={{ y, scale: 1.1 }} className="absolute inset-0 w-full h-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </motion.div>
        </div>
    );
}

function SectionDivider({ src }: { src: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <div ref={ref} className="h-[50vh] relative overflow-hidden flex items-center justify-center">
            <motion.div style={{ y }} className="absolute inset-0 -z-10 h-[120%]">
                <Image src={src} alt="Background" fill className="object-cover brightness-50" />
            </motion.div>
            <div className="text-center text-white px-4 relative z-10">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-light tracking-widest uppercase"
                >
                    Designed for Life
                </motion.h3>
            </div>
        </div>
    )
}

export default function AboutClient() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const headerY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // Smooth progress bar
    /*
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
*/
    return (
        <div ref={containerRef} className="min-h-screen bg-white text-gray-900 font-sans selection:bg-green-200">

            {/* Progress Bar 
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-green-600 origin-left z-50"
                style={{ scaleX }}
            />
*/}
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Parallax Background for Hero */}
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                        alt="Architecture Hero"
                        fill
                        priority
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white" />
                </motion.div>

                <motion.div
                    style={{ y: headerY, opacity: headerOpacity }}
                    className="relative z-10 max-w-5xl mx-auto text-center px-4"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-4 rounded-full border border-green-600/30 text-green-700 text-sm font-semibold tracking-widest uppercase mb-6 bg-white/50 backdrop-blur-sm">
                            Est. 2024
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-slate-900"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-emerald-900">
                            Future Today
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        We define spaces where design meets tranquility.
                        Merging sustainable innovation with timeless aesthetics.
                    </motion.p>
                </motion.div>
            </section>

            {/* Narrative Section */}
            <section className="py-24 md:py-32 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        {/* Image with Parallax */}
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <ParallaxImage
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                                alt="Modern Interior"
                                className="absolute inset-0 w-full h-full"
                            />
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="absolute -bottom-10 -right-10 w-48 h-48 bg-green-50 rounded-full flex items-center justify-center hidden md:flex mix-blend-multiply"
                            >
                                <p className="font-serif text-green-900 text-center p-4 italic">"Simplicity is the ultimate sophistication"</p>
                            </motion.div>
                        </div>

                        <motion.div
                            className="space-y-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Crafting Spaces <br /> That <span className="text-green-600">Inspire</span>
                            </motion.h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <motion.p variants={fadeInUp}>
                                    Sanskriti isn't just a construction company; it's a philosophy. Born from a desire to integrate nature with structure,
                                    we began our journey with a single residential project that challenged the status quo.
                                </motion.p>
                                <motion.p variants={fadeInUp}>
                                    Today, we stand at the forefront of the architectural evolution, blending raw materials with refined elegance.
                                    Our spaces are designed to pause time, allowing you to breathe, connect, and thrive.
                                </motion.p>
                            </div>

                            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                                <div>
                                    <h4 className="text-5xl font-bold text-slate-800 mb-2">50+</h4>
                                    <span className="text-sm text-gray-500 uppercase tracking-widest">Projects</span>
                                </div>
                                <div>
                                    <h4 className="text-5xl font-bold text-slate-800 mb-2">12</h4>
                                    <span className="text-sm text-gray-500 uppercase tracking-widest">Awards</span>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <SectionDivider src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" />

            {/* Values Section */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <motion.div
                        className="text-center mb-24"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">Our Core Values</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">Foundations that stand the test of time.</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        {[
                            {
                                title: 'Sustainability',
                                desc: 'We honor the earth by using eco-friendly materials and passive energy designs.',
                                img: 'https://images.unsplash.com/photo-1518531933037-91b2f5d2294a?q=80&w=1000&auto=format&fit=crop'
                            },
                            {
                                title: 'Innovation',
                                desc: 'Pushing boundaries with smart home integration and modern engineering.',
                                img: 'https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1000&auto=format&fit=crop'
                            },
                            {
                                title: 'Integrity',
                                desc: 'Transparent processes and unwavering commitment to quality delivery.',
                                img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop'
                            },
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-[400px] flex flex-col justify-end"
                            >
                                <div className="absolute inset-0">
                                    <Image
                                        src={value.img}
                                        alt={value.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                </div>

                                <div className="relative z-10 p-8 transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                                    <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                                    <p className="text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {value.desc}
                                    </p>
                                    <div className="w-12 h-1 bg-green-500 mt-4 rounded-full" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1531971589569-0d9370cbe865?q=80&w=2070&auto=format&fit=crop"
                    alt="Office"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-green-950/80" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                            Your Vision. <br /> Our Expertise.
                        </h2>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-white text-green-900 rounded-full font-bold text-lg shadow-2xl hover:bg-green-50 transition-colors"
                        >
                            Start Your Project
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
