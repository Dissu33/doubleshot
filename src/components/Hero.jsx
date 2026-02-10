
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-950 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
                    alt="Coffee Shop Interior"
                    className="w-full h-full object-cover scale-105 animate-subtle-zoom"
                />
            </div>

            <div className="relative z-20 text-center container px-4 mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-block text-coffee-400 uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-medium"
                >
                    Established in Mohali
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight"
                >
                    DoubleShot <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-200 to-coffee-500">Coffee Roasters</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
                >
                    Experience the art of roasting and brewing. From our signature Nitro Cold Brews to artisanal Hot Pour-overs.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <a href="#menu" className="px-8 py-3 bg-coffee-500 text-white font-medium hover:bg-coffee-600 transition-all rounded-sm uppercase tracking-wider text-sm">
                        View Menu
                    </a>
                    <a href="#locations" className="px-8 py-3 border border-white/20 hover:border-white text-white font-medium transition-all rounded-sm uppercase tracking-wider text-sm backdrop-blur-sm">
                        Find Us
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
