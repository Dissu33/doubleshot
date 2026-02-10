import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Award, Heart, Users } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Coffee,
            title: "Premium Beans",
            description: "Sourced from the finest coffee estates around the world"
        },
        {
            icon: Award,
            title: "Expert Roasting",
            description: "Small-batch roasting to preserve unique flavor profiles"
        },
        {
            icon: Heart,
            title: "Made with Love",
            description: "Every cup crafted with passion and precision"
        },
        {
            icon: Users,
            title: "Community Hub",
            description: "A welcoming space for coffee lovers to connect"
        }
    ];

    return (
        <section className="py-24 bg-zinc-900 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-coffee-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-coffee-700 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-coffee-400 uppercase tracking-widest text-sm font-medium">Why Choose Us</span>
                    <h2 className="text-4xl md:text-5xl font-heading text-white mt-3">The DoubleShot Difference</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-black/40 backdrop-blur-sm border border-zinc-800 p-8 rounded-lg hover:border-coffee-500 transition-all duration-300 hover:shadow-lg hover:shadow-coffee-900/20"
                        >
                            <div className="w-14 h-14 bg-coffee-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-coffee-500/20 transition-colors">
                                <feature.icon className="w-7 h-7 text-coffee-400" />
                            </div>
                            <h3 className="text-xl font-heading text-white mb-3 group-hover:text-coffee-300 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
