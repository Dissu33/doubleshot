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
        <section className="py-24 bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-coffee-400 uppercase tracking-widest text-sm font-medium">Gallery</span>
                    <h2 className="text-4xl md:text-5xl font-heading text-white mt-3">Moments at DoubleShot</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
