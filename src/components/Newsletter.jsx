import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Generate unique subscriber ID
        const subscriberId = `SUB${Date.now()}`;

        // Create subscriber object
        const subscriber = {
            id: subscriberId,
            email: email,
            timestamp: new Date().toISOString(),
            status: 'active'
        };

        // Get existing subscribers from localStorage
        const existingSubscribers = JSON.parse(localStorage.getItem('doubleshot_subscribers') || '[]');

        // Check if email already exists
        const emailExists = existingSubscribers.some(sub => sub.email === email);

        if (emailExists) {
            alert('📧 This email is already subscribed to our newsletter!');
            setIsSubmitting(false);
            setEmail('');
            return;
        }

        // Add new subscriber
        existingSubscribers.push(subscriber);

        // Save to localStorage
        localStorage.setItem('doubleshot_subscribers', JSON.stringify(existingSubscribers));

        // Show success
        setTimeout(() => {
            setIsSubscribed(true);
            setIsSubmitting(false);
            setEmail('');

            // Reset after 3 seconds
            setTimeout(() => {
                setIsSubscribed(false);
            }, 3000);
        }, 500);
    };

    return (
        <section className="py-20 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
            {/* Animated background */}
            <motion.div
                className="absolute top-0 left-1/3 w-96 h-96 bg-coffee-500/10 rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="h-[1px] w-8 bg-coffee-400"></div>
                            <span className="text-coffee-400 uppercase tracking-[0.3em] text-xs font-semibold">Stay Updated</span>
                            <div className="h-[1px] w-8 bg-coffee-400"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
                            Join Our Coffee Community
                        </h2>
                        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                            Subscribe to our newsletter for exclusive offers, new menu items, and coffee brewing tips delivered to your inbox.
                        </p>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="max-w-md mx-auto"
                    >
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1 relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={isSubmitting || isSubscribed}
                                    className="w-full bg-black border border-zinc-800 rounded-lg pl-12 pr-4 py-4 text-white focus:border-coffee-500 focus:outline-none transition-colors disabled:opacity-50"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                disabled={isSubmitting || isSubscribed}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-coffee-500 hover:bg-coffee-600 disabled:bg-coffee-700 text-white font-medium px-8 py-4 rounded-lg transition-colors uppercase tracking-wider text-sm whitespace-nowrap flex items-center justify-center gap-2"
                            >
                                {isSubscribed ? (
                                    <>
                                        <CheckCircle size={18} />
                                        Subscribed!
                                    </>
                                ) : isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Subscribing...
                                    </>
                                ) : (
                                    'Subscribe'
                                )}
                            </motion.button>
                        </div>
                        <p className="text-zinc-600 text-xs mt-3">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
