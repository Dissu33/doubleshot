import React from 'react';
import Menu from '../components/Menu';
import { motion } from 'framer-motion';

const MenuPage = () => {
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
                        <span className="text-coffee-400 uppercase tracking-[0.3em] text-xs font-semibold">Our Offerings</span>
                        <div className="h-[1px] w-8 bg-coffee-400"></div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-heading text-white mb-6"
                    >
                        Our Menu
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
        </div>
    );
};

export default MenuPage;
