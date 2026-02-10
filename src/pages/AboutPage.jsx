import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

const AboutPage = () => {
    return (
        <div className="pt-24">
            {/* Page Header */}
            <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
                <div className="container mx-auto px-6 text-center">
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
            <section className="py-32 bg-zinc-900 section-divider">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 image-overlay"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
                                alt="Coffee Brewing Process"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
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
                                <div className="text-center">
                                    <div className="text-3xl font-heading text-coffee-400 mb-1">5+</div>
                                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Years</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-heading text-coffee-400 mb-1">50+</div>
                                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Varieties</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-heading text-coffee-400 mb-1">10k+</div>
                                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Happy Customers</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Gallery />
            <Testimonials />
        </div>
    );
};

export default AboutPage;
