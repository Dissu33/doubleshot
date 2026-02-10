import React from 'react';
import { motion } from 'framer-motion';
import Menu from '../components/Menu';

const pageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
};

const MenuPage = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="pt-24"
        >
            {/* Page Header with Parallax Effect */}
            <section className="py-20 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-coffee-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-coffee-700/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 mb-4"
                    >
                        <div className="h-[1px] w-8 bg-coffee-400"></div>
                        <span className="text-coffee-400 uppercase tracking-[0.3em] text-xs font-semibold">Our Offerings</span>
                        <div className="h-[1px] w-8 bg-coffee-400"></div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-heading text-white mb-6 relative inline-block"
                    >
                        Our Menu
                        <motion.div
                            className="absolute -inset-4 bg-gradient-to-r from-coffee-500/20 to-coffee-700/20 blur-2xl -z-10"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 max-w-2xl mx-auto text-lg"
                    >
                        From classic espresso to innovative cold brews, every drink is crafted with precision and passion.
                    </motion.p>
                </div>
            </section>

            <Menu />
        </motion.div>
    );
};

export default MenuPage;
