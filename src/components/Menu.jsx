
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menuData';

const Menu = () => {
    const categories = Object.keys(menuData);
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <section id="menu" className="py-24 bg-zinc-950 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-coffee-800 to-transparent"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-coffee-400 uppercase tracking-widest text-sm font-medium">Discover Our Flavors</span>
                    <h2 className="text-4xl md:text-5xl font-heading text-white mt-3 mb-6">Curated Menu</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Meticulously sourced beans, roasted to perfection, and brewed with passion.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 border ${activeCategory === category
                                    ? 'bg-coffee-500 border-coffee-500 text-white shadow-lg shadow-coffee-900/20'
                                    : 'bg-transparent border-zinc-800 text-zinc-400 hover:border-coffee-500 hover:text-coffee-400'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Menu Items Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto"
                >
                    <AnimatePresence mode="popLayout">
                        {menuData[activeCategory].map((item, index) => (
                            <motion.div
                                key={`${activeCategory}-${item.name}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group flex justify-between items-start border-b border-zinc-800 pb-4 hover:border-coffee-700 transition-colors"
                            >
                                <div className="flex flex-col gap-1 pr-4">
                                    <h3 className="text-xl font-heading text-zinc-200 group-hover:text-coffee-300 transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-zinc-500 font-light">{item.description}</p>
                                </div>
                                <div className="text-coffee-400 font-mono text-lg whitespace-nowrap">
                                    {item.price}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-20 text-center">
                    <p className="text-zinc-500 italic text-sm">* Prices include taxes vertically aligned. Customizations available.</p>
                </div>
            </div>
        </section>
    );
};

export default Menu;
