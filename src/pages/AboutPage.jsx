import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

const pageVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 }
};

const AboutPage = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="pt-24"
        >
            {/* Page Header */}
            <section className="py-20 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-coffee-400 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-coffee-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 mb-4"
                    >
                        <div className="h-[1px] w-8 bg-coffee-400"></div>
                        <span className="text-coffee-400 uppercase tracking-[0.3em] text-xs font-semibold">About Us</span>
                        <div className="h-[1px] w-8 bg-coffee-400"></div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-heading text-white mb-6"
                    >
                        Our Story
                    </motion.h1>
                </div>
            </section>

            {/* About Content */}
            <section className="py-32 bg-zinc-900 section-divider relative overflow-hidden">
                {/* Floating gradient orbs */}
                <motion.div
                    className="absolute top-1/3 right-1/4 w-96 h-96 bg-coffee-500/10 rounded-full blur-3xl"
                    animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 image-overlay group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
                                alt="Coffee Brewing Process"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <p className="text-zinc-300 leading-relaxed text-lg">
                                    At <span className="text-coffee-400 font-semibold">DoubleShot Coffee Roasters</span>, we believe coffee is more than a beverage—it's an experience, a ritual, and a moment of pure joy.
                                </p>
                                <p className="text-zinc-400 leading-relaxed">
                                    Founded in the heart of Mohali, we source the finest beans from renowned estates across the globe. Each batch is roasted with precision to unlock unique flavor profiles that tell a story in every sip.
                                </p>
                                <p className="text-zinc-400 leading-relaxed">
                                    Whether you're savoring our signature Nitro Cold Brew or indulging in a warm Jaggery Latte, every cup reflects our unwavering commitment to quality, sustainability, and the art of coffee making.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800">
                                {[
                                    { num: '5+', label: 'Years' },
                                    { num: '50+', label: 'Varieties' },
                                    { num: '10k+', label: 'Happy Customers' }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="text-center group cursor-default"
                                    >
                                        <div className="text-3xl font-heading text-coffee-400 mb-1 group-hover:text-coffee-300 transition-colors">
                                            {stat.num}
                                        </div>
                                        <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Gallery />
            <Testimonials />
        </motion.div>
    );
};

export default AboutPage;
