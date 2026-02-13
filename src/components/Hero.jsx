import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Mobile-Optimized Overlay */}
            <div className="absolute inset-0 z-0 mobile-bright">
                <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-zinc-950 md:from-black/80 md:via-black/60 md:to-zinc-950 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop"
                    alt="Coffee Shop Interior"
                    className="w-full h-full object-cover animate-subtle-zoom"
                />
            </div>

            <div className="relative z-20 text-center container px-4 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center justify-center gap-3 mb-6"
                >
                    <div className="h-[1px] w-12 bg-coffee-400"></div>
                    <span className="text-coffee-300 md:text-coffee-400 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
                        Premium Coffee Experience
                    </span>
                    <div className="h-[1px] w-12 bg-coffee-400"></div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-[1.1] drop-shadow-lg"
                >
                    DoubleShot
                    <br />
                    <span className="text-gradient drop-shadow-md">Coffee Roasters</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-zinc-200 md:text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light leading-relaxed drop-shadow-md"
                >
                    Experience the art of roasting and brewing. From our signature Nitro Cold Brews to artisanal Hot Pour-overs.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-zinc-300 md:text-zinc-400 mb-10"
                >
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-coffee-400" />
                        <span>Sector 82, Mohali</span>
                    </div>
                    <div className="hidden sm:block h-4 w-[1px] bg-zinc-700"></div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-coffee-400" />
                        <span>8 AM - 11 PM</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <Link to="/menu" className="btn-primary w-full md:w-auto">
                        Explore Menu
                    </Link>
                    <Link to="/contact" className="btn-secondary w-full md:w-auto">
                        Visit Us
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 md:text-white/40 animate-bounce"
            >
                <ArrowDown size={28} strokeWidth={1.5} />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
        </section>
    );
};

export default Hero;
