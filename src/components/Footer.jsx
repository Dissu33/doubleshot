
import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-3xl font-heading font-bold text-white mb-6">DoubleShot<span className="text-coffee-500">.</span></h3>
                        <p className="text-zinc-400 mb-8 max-w-sm">
                            We believe in the power of a good brew. Sourced ethically, roasted locally, and served with love in the heart of Mohali.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-coffee-500 hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-coffee-500 hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-coffee-100">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'Menu', 'About Us', 'Contact', 'Reservations'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-zinc-400 hover:text-coffee-400 transition-colors text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-coffee-100">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-zinc-400 text-sm">
                                <MapPin className="text-coffee-500 shrink-0" size={18} />
                                <span>Sector 82, JLPL Industrial Area, Mohali, Punjab</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400 text-sm">
                                <Phone className="text-coffee-500 shrink-0" size={18} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400 text-sm">
                                <Mail className="text-coffee-500 shrink-0" size={18} />
                                <span>hello@doubleshot.in</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-400 text-sm">
                                <Clock className="text-coffee-500 shrink-0" size={18} />
                                <span>Mon - Sun: 8:00 AM - 11:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
                    <p>&copy; {new Date().getFullYear()} DoubleShot Coffee Roasters. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
