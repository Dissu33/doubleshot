import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingModal from './BookingModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showBooking, setShowBooking] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-zinc-950/80 backdrop-blur-sm py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <Coffee className="w-8 h-8 text-coffee-400 group-hover:text-coffee-300 transition-colors" />
                        <span className="text-2xl font-heading font-bold text-white tracking-wider">DoubleShot</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm uppercase tracking-widest transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-coffee-400 after:transition-all ${location.pathname === link.path
                                        ? 'text-coffee-400 after:w-full'
                                        : 'text-zinc-300 hover:text-coffee-400 after:w-0 hover:after:w-full'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => setShowBooking(true)}
                            className="px-6 py-2 border-2 border-coffee-400 text-coffee-400 hover:bg-coffee-400 hover:text-white transition-all duration-300 uppercase text-xs tracking-widest rounded-sm"
                        >
                            Book Table
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 py-8 px-6 md:hidden flex flex-col gap-6"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-lg font-heading transition-colors ${location.pathname === link.path
                                            ? 'text-coffee-400'
                                            : 'text-zinc-300 hover:text-coffee-400'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setShowBooking(true);
                                    setIsOpen(false);
                                }}
                                className="px-6 py-2 border-2 border-coffee-400 text-coffee-400 hover:bg-coffee-400 hover:text-white transition-all duration-300 uppercase text-xs tracking-widest rounded-sm"
                            >
                                Book Table
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} />
        </>
    );
};

export default Navbar;
