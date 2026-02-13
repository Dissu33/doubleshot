import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Generate unique message ID
        const messageId = `MSG${Date.now()}`;

        // Create message object
        const message = {
            id: messageId,
            ...formData,
            timestamp: new Date().toISOString(),
            status: 'unread'
        };

        // Get existing messages from localStorage
        const existingMessages = JSON.parse(localStorage.getItem('doubleshot_messages') || '[]');

        // Add new message
        existingMessages.push(message);

        // Save to localStorage
        localStorage.setItem('doubleshot_messages', JSON.stringify(existingMessages));

        // Show success message
        setTimeout(() => {
            alert(`✅ Message Sent Successfully!\n\nReference ID: ${messageId}\n\nThank you for reaching out! We'll get back to you soon.`);

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 500);
    };

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Animated background */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-coffee-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coffee-700/10 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="h-[1px] w-8 bg-coffee-400"></div>
                            <span className="text-coffee-400 uppercase tracking-[0.3em] text-xs font-semibold">Get in Touch</span>
                            <div className="h-[1px] w-8 bg-coffee-400"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
                            Send Us a Message
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            Have a question or feedback? We'd love to hear from you!
                        </p>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-sm border-2 border-zinc-800 p-8 md:p-12 rounded-2xl space-y-6"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
                                    <User size={16} />
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-coffee-500 focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
                                    <Mail size={16} />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-coffee-500 focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
                                    <Phone size={16} />
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-coffee-500 focus:outline-none transition-colors"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
                                    <MessageSquare size={16} />
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-coffee-500 focus:outline-none transition-colors"
                                    placeholder="How can we help?"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
                                <MessageSquare size={16} />
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-coffee-500 focus:outline-none transition-colors resize-none"
                                placeholder="Tell us more about your inquiry..."
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-coffee-500 hover:bg-coffee-600 disabled:bg-zinc-700 text-white font-medium py-4 rounded-lg transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
