import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';


const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

const ContactPage = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="pt-24"
        >
            {/* Page Header */}
            <section className="py-20 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-72 h-72 bg-coffee-500 rounded-full blur-3xl"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coffee-700 rounded-full blur-3xl"
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 mb-4"
                    >
                        <div className="h-[1px] w-8 bg-coffee-400"></div>
                        <span className="text-coffee-400 uppercase tracking-[0.3em] text-xs font-semibold">Get in Touch</span>
                        <div className="h-[1px] w-8 bg-coffee-400"></div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-heading text-white mb-6"
                    >
                        Visit Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 max-w-2xl mx-auto text-lg"
                    >
                        Come experience the perfect cup at our Mohali location.
                    </motion.p>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-32 bg-zinc-950 section-divider relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-coffee-500/5 rounded-full blur-3xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Location Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-sm border-2 border-zinc-800 p-10 rounded-2xl hover:border-coffee-500 transition-all duration-300 card-hover group"
                        >
                            <h3 className="text-3xl font-heading font-bold mb-6 text-white group-hover:text-coffee-300 transition-colors">
                                DoubleShot Mohali
                            </h3>

                            <div className="space-y-6 mb-8">
                                {[
                                    { icon: MapPin, title: 'Address', content: 'Sector 82, JLPL Industrial Area\nMohali, Punjab 160055' },
                                    { icon: Clock, title: 'Opening Hours', content: 'Monday - Sunday\n8:00 AM - 11:00 PM' },
                                    { icon: Phone, title: 'Phone', content: '+91 98765 43210' },
                                    { icon: Mail, title: 'Email', content: 'hello@doubleshot.in' }
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        className="flex items-start gap-4 group/item"
                                    >
                                        <item.icon className="text-coffee-400 shrink-0 mt-1 group-hover/item:scale-110 transition-transform" size={24} />
                                        <div>
                                            <div className="text-coffee-400 text-sm font-semibold mb-1">{item.title}</div>
                                            <div className="text-zinc-300 whitespace-pre-line">{item.content}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary w-full text-center block"
                            >
                                Get Directions
                            </motion.a>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="h-full min-h-[500px] bg-zinc-800 rounded-2xl overflow-hidden relative shadow-2xl group"
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-600 z-10">
                                <div className="bg-black/80 px-6 py-3 rounded-lg backdrop-blur-sm border border-zinc-700">
                                    <p className="text-sm text-coffee-400 font-medium">📍 Hunter Street, Mohali</p>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop"
                                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                                alt="Location Map"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <ContactForm />

            {/* CTA Section */}
            <section className="py-20 bg-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/10 to-coffee-700/10"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-heading text-white mb-4"
                    >
                        Ready to Experience DoubleShot?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 mb-8 max-w-2xl mx-auto"
                    >
                        Reserve your table or simply drop by. We're always brewing something special.
                    </motion.p>
                    <motion.a
                        href="/"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary inline-block"
                    >
                        Book a Table
                    </motion.a>
                </div>
            </section>
        </motion.div>
    );
};

export default ContactPage;
