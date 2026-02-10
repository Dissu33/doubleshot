import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Coffee Enthusiast",
            content: "The Nitro Cold Brew here is absolutely divine! Best coffee experience in Mohali.",
            rating: 5
        },
        {
            name: "Rajesh Kumar",
            role: "Regular Customer",
            content: "Amazing ambiance and even better coffee. The Jaggery Latte is my go-to drink!",
            rating: 5
        },
        {
            name: "Ananya Singh",
            role: "Food Blogger",
            content: "DoubleShot has set a new standard for specialty coffee in the region. Highly recommend!",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-coffee-400 uppercase tracking-widest text-sm font-medium">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-heading text-white mt-3">What Our Customers Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg relative hover:border-coffee-500 transition-all duration-300"
                        >
                            <Quote className="text-coffee-500/20 w-12 h-12 mb-4" />
                            <p className="text-zinc-300 mb-6 italic leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-coffee-400">★</span>
                                ))}
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
