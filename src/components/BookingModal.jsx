import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Clock } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2'
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Generate unique booking ID
        const bookingId = `BK${Date.now()}`;

        // Create booking object
        const booking = {
            id: bookingId,
            ...formData,
            timestamp: new Date().toISOString(),
            status: 'pending'
        };

        // Get existing bookings from localStorage
        const existingBookings = JSON.parse(localStorage.getItem('doubleshot_bookings') || '[]');

        // Add new booking
        existingBookings.push(booking);

        // Save to localStorage
        localStorage.setItem('doubleshot_bookings', JSON.stringify(existingBookings));

        // Show success message
        alert(`✅ Booking Confirmed!\n\nBooking ID: ${bookingId}\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\n\nWe look forward to serving you!`);

        // Reset form and close
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            guests: '2'
        });
        onClose();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-lg p-8 z-50"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-heading text-white">Reserve a Table</h3>
                            <button
                                onClick={onClose}
                                className="text-zinc-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm text-zinc-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black border border-zinc-800 rounded px-4 py-2 text-white focus:border-coffee-500 focus:outline-none transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-zinc-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black border border-zinc-800 rounded px-4 py-2 text-white focus:border-coffee-500 focus:outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-zinc-400 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black border border-zinc-800 rounded px-4 py-2 text-white focus:border-coffee-500 focus:outline-none transition-colors"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-zinc-400 mb-2">
                                        <Calendar className="inline w-4 h-4 mr-1" />
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black border border-zinc-800 rounded px-4 py-2 text-white focus:border-coffee-500 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-zinc-400 mb-2">
                                        <Clock className="inline w-4 h-4 mr-1" />
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black border border-zinc-800 rounded px-4 py-2 text-white focus:border-coffee-500 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-zinc-400 mb-2">
                                    <Users className="inline w-4 h-4 mr-1" />
                                    Number of Guests
                                </label>
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="w-full bg-black border border-zinc-800 rounded px-4 py-2 text-white focus:border-coffee-500 focus:outline-none transition-colors"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-coffee-500 hover:bg-coffee-600 text-white font-medium py-3 rounded transition-colors uppercase tracking-wider text-sm"
                            >
                                Confirm Reservation
                            </button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
