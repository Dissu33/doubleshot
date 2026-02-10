import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

const HomePage = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
        >
            <Hero />
            <Features />

            {/* Quick Preview Section with Glow Effects */}
            <section className="py-32 bg-zinc-900 section-divider relative overflow-hidden">
                {/* Animated gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coffee-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coffee-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                            Welcome to DoubleShot
                        </h2>
                        <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                            More than just a coffee shop - we're a destination for coffee enthusiasts.
                            Explore our carefully curated menu, learn about our story, and find your way to our cozy cafe in Mohali.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: '☕', title: 'Our Menu', desc: 'Explore our signature drinks and food', link: '/menu', delay: 0 },
                            { icon: '📖', title: 'Our Story', desc: 'Learn about our journey and passion', link: '/about', delay: 0.1 },
                            { icon: '📍', title: 'Visit Us', desc: 'Find our location and hours', link: '/contact', delay: 0.2 }
                        ].map((item, index) => (
                            <motion.a
                                key={item.title}
                                href={item.link}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: item.delay }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative bg-gradient-to-br from-black/60 to-zinc-900/60 backdrop-blur-sm border border-zinc-800 p-10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-coffee-500 hover:shadow-2xl hover:shadow-coffee-900/30"
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-coffee-500/0 to-coffee-900/0 group-hover:from-coffee-500/5 group-hover:to-coffee-900/10 transition-all duration-300"></div>

                                <div className="relative z-10">
                                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                    <h3 className="text-2xl font-heading text-white mb-3 group-hover:text-coffee-300 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default HomePage;
