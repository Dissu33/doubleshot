import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menuData';

const Menu = () => {
    const categories = Object.keys(menuData);
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <section id="menu" className="py-32 bg-zinc-950 relative section-divider">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-4"
                    >
                        <div className="h-[1px] w-8 bg-coffee-400"></div>
                        <span className="text-coffee-400 uppercase tracking-[0.3em] text-xs font-semibold">Our Offerings</span>
                        <div className="h-[1px] w-8 bg-coffee-400"></div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading text-white mb-6"
                    >
                        Curated Menu
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 max-w-2xl mx-auto text-lg"
                    >
                        Meticulously sourced beans, roasted to perfection, and brewed with passion.
                    </motion.p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 border-2 ${activeCategory === category
                                    ? 'bg-coffee-500 border-coffee-500 text-white shadow-lg shadow-coffee-900/30'
                                    : 'bg-transparent border-zinc-800 text-zinc-400 hover:border-coffee-500 hover:text-coffee-400'
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Menu Items Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 max-w-6xl mx-auto"
                >
                    <AnimatePresence mode="popLayout">
                        {menuData[activeCategory].map((item, index) => (
                            <motion.div
                                key={`${activeCategory}-${item.name}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.03 }}
                                className="group relative"
                            >
                                <div className="flex justify-between items-start gap-4 pb-6 border-b border-zinc-800 group-hover:border-coffee-700 transition-colors">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-heading text-zinc-100 group-hover:text-coffee-300 transition-colors mb-2">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm text-zinc-500 font-light leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="text-coffee-400 font-mono text-xl font-semibold whitespace-nowrap">
                                        {item.price}
                                    </div>
                                </div>
                                {/* Decorative dot */}
                                <div className="absolute -bottom-[5px] left-0 w-2 h-2 bg-coffee-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <p className="text-zinc-500 italic text-sm mb-4">
                        * All prices are inclusive of taxes. Customizations available upon request.
                    </p>
                    <div className="inline-flex items-center gap-2 text-coffee-400 text-sm">
                        <span className="w-12 h-[1px] bg-coffee-400"></span>
                        <span>Crafted with precision</span>
                        <span className="w-12 h-[1px] bg-coffee-400"></span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Menu;
