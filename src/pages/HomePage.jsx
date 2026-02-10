import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />

            {/* Quick Preview Section */}
            <section className="py-32 bg-zinc-900 section-divider">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                            Welcome to DoubleShot
                        </h2>
                        <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                            More than just a coffee shop - we're a destination for coffee enthusiasts.
                            Explore our carefully curated menu, learn about our story, and find your way to our cozy cafe in Mohali.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <a href="/menu" className="group bg-black/40 border border-zinc-800 p-8 rounded-xl hover:border-coffee-500 transition-all card-hover">
                                <div className="text-4xl mb-4">☕</div>
                                <h3 className="text-xl font-heading text-white mb-2 group-hover:text-coffee-400 transition-colors">Our Menu</h3>
                                <p className="text-zinc-500 text-sm">Explore our signature drinks and food</p>
                            </a>
                            <a href="/about" className="group bg-black/40 border border-zinc-800 p-8 rounded-xl hover:border-coffee-500 transition-all card-hover">
                                <div className="text-4xl mb-4">📖</div>
                                <h3 className="text-xl font-heading text-white mb-2 group-hover:text-coffee-400 transition-colors">Our Story</h3>
                                <p className="text-zinc-500 text-sm">Learn about our journey and passion</p>
                            </a>
                            <a href="/contact" className="group bg-black/40 border border-zinc-800 p-8 rounded-xl hover:border-coffee-500 transition-all card-hover">
                                <div className="text-4xl mb-4">📍</div>
                                <h3 className="text-xl font-heading text-white mb-2 group-hover:text-coffee-400 transition-colors">Visit Us</h3>
                                <p className="text-zinc-500 text-sm">Find our location and hours</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
