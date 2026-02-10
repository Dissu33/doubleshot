import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-24">
            {/* Page Header */}
            <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
                <div className="container mx-auto px-6 text-center">
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
            <section className="py-32 bg-zinc-950 section-divider">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Location Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-zinc-900 border-2 border-zinc-800 p-10 rounded-2xl hover:border-coffee-500 transition-all duration-300 card-hover"
                        >
                            <h3 className="text-3xl font-heading font-bold mb-6 text-white">DoubleShot Mohali</h3>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-coffee-400 shrink-0 mt-1" size={24} />
                                    <div>
                                        <div className="text-coffee-400 text-sm font-semibold mb-1">Address</div>
                                        <div className="text-zinc-300">Sector 82, JLPL Industrial Area<br />Mohali, Punjab 160055</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Clock className="text-coffee-400 shrink-0 mt-1" size={24} />
                                    <div>
                                        <div className="text-coffee-400 text-sm font-semibold mb-1">Opening Hours</div>
                                        <div className="text-zinc-300">Monday - Sunday<br />8:00 AM - 11:00 PM</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="text-coffee-400 shrink-0 mt-1" size={24} />
                                    <div>
                                        <div className="text-coffee-400 text-sm font-semibold mb-1">Phone</div>
                                        <div className="text-zinc-300">+91 98765 43210</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="text-coffee-400 shrink-0 mt-1" size={24} />
                                    <div>
                                        <div className="text-coffee-400 text-sm font-semibold mb-1">Email</div>
                                        <div className="text-zinc-300">hello@doubleshot.in</div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full text-center block"
                            >
                                Get Directions
                            </a>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="h-full min-h-[500px] bg-zinc-800 rounded-2xl overflow-hidden relative shadow-2xl"
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-600 z-10">
                                <div className="bg-black/80 px-6 py-3 rounded-lg backdrop-blur-sm border border-zinc-700">
                                    <p className="text-sm text-coffee-400 font-medium">📍 Hunter Street, Mohali</p>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop"
                                className="w-full h-full object-cover opacity-40 hover:opacity-60 transition-opacity"
                                alt="Location Map"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-zinc-900">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
                        Ready to Experience DoubleShot?
                    </h2>
                    <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Reserve your table or simply drop by. We're always brewing something special.
                    </p>
                    <a href="/" className="btn-primary inline-block">
                        Book a Table
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
