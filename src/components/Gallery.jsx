import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
            alt: "Espresso being poured"
        },
        {
            url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop",
            alt: "Coffee beans"
        },
        {
            url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop",
            alt: "Latte art"
        },
        {
            url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop",
            alt: "Coffee shop interior"
        },
        {
            url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2070&auto=format&fit=crop",
            alt: "Cold brew coffee"
        },
        {
            url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2061&auto=format&fit=crop",
            alt: "Coffee and pastries"
        }
    ];

    return (
        <section className="py-32 bg-zinc-950 section-divider">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-4"
                    >
                        <div className="h-[1px] w-8 bg-coffee-400"></div>
                        <span className="text-coffee-400 uppercase tracking-[0.3em] text-xs font-semibold">Visual Journey</span>
                        <div className="h-[1px] w-8 bg-coffee-400"></div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading text-white"
                    >
                        Moments at DoubleShot
                    </motion.h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="aspect-square overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-coffee-900/20 transition-shadow mobile-bright"
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 brightness-90 md:brightness-75 group-hover:brightness-100"
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 text-coffee-400 text-sm">
                        <span className="w-12 h-[1px] bg-coffee-400"></span>
                        <span>Every cup tells a story</span>
                        <span className="w-12 h-[1px] bg-coffee-400"></span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
