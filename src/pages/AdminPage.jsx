import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, MessageSquare, Users, Trash2, CheckCircle, XCircle, Eye, Database, RefreshCw } from 'lucide-react';
import { addSampleData, clearAllData } from '../utils/dataUtils';

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('bookings');
    const [bookings, setBookings] = useState([]);
    const [messages, setMessages] = useState([]);
    const [subscribers, setSubscribers] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        setBookings(JSON.parse(localStorage.getItem('doubleshot_bookings') || '[]'));
        setMessages(JSON.parse(localStorage.getItem('doubleshot_messages') || '[]'));
        setSubscribers(JSON.parse(localStorage.getItem('doubleshot_subscribers') || '[]'));
    };

    const deleteBooking = (id) => {
        if (window.confirm('Are you sure you want to delete this booking?')) {
            const updated = bookings.filter(b => b.id !== id);
            localStorage.setItem('doubleshot_bookings', JSON.stringify(updated));
            setBookings(updated);
        }
    };

    const deleteMessage = (id) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            const updated = messages.filter(m => m.id !== id);
            localStorage.setItem('doubleshot_messages', JSON.stringify(updated));
            setMessages(updated);
        }
    };

    const deleteSubscriber = (id) => {
        if (window.confirm('Are you sure you want to delete this subscriber?')) {
            const updated = subscribers.filter(s => s.id !== id);
            localStorage.setItem('doubleshot_subscribers', JSON.stringify(updated));
            setSubscribers(updated);
        }
    };

    const markMessageAsRead = (id) => {
        const updated = messages.map(m =>
            m.id === id ? { ...m, status: 'read' } : m
        );
        localStorage.setItem('doubleshot_messages', JSON.stringify(updated));
        setMessages(updated);
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const tabs = [
        { id: 'bookings', label: 'Bookings', icon: Calendar, count: bookings.length },
        { id: 'messages', label: 'Messages', icon: MessageSquare, count: messages.length },
        { id: 'subscribers', label: 'Subscribers', icon: Users, count: subscribers.length }
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="h-[1px] w-8 bg-coffee-400"></div>
                        <span className="text-coffee-400 uppercase tracking-[0.3em] text-xs font-semibold">Admin Dashboard</span>
                        <div className="h-[1px] w-8 bg-coffee-400"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading text-white mb-4">
                        Manage Your Data
                    </h1>
                    <p className="text-zinc-400">
                        View and manage all bookings, messages, and newsletter subscribers
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-4 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all ${activeTab === tab.id
                                ? 'bg-coffee-500 text-white'
                                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
                                }`}
                        >
                            <tab.icon size={20} />
                            <span className="font-medium">{tab.label}</span>
                            <span className="bg-black/30 px-2 py-1 rounded text-xs">
                                {tab.count}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Bookings Tab */}
                {activeTab === 'bookings' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        {bookings.length === 0 ? (
                            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 text-center">
                                <Calendar className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
                                <p className="text-zinc-500">No bookings yet</p>
                            </div>
                        ) : (
                            bookings.map((booking) => (
                                <div
                                    key={booking.id}
                                    className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-coffee-500 transition-colors"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-coffee-400 font-mono text-sm">{booking.id}</span>
                                                <span className={`px-2 py-1 rounded text-xs ${booking.status === 'pending'
                                                    ? 'bg-yellow-500/20 text-yellow-400'
                                                    : 'bg-green-500/20 text-green-400'
                                                    }`}>
                                                    {booking.status}
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <span className="text-zinc-500">Name:</span>
                                                    <p className="text-white font-medium">{booking.name}</p>
                                                </div>
                                                <div>
                                                    <span className="text-zinc-500">Date:</span>
                                                    <p className="text-white font-medium">{booking.date}</p>
                                                </div>
                                                <div>
                                                    <span className="text-zinc-500">Time:</span>
                                                    <p className="text-white font-medium">{booking.time}</p>
                                                </div>
                                                <div>
                                                    <span className="text-zinc-500">Guests:</span>
                                                    <p className="text-white font-medium">{booking.guests}</p>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-xs text-zinc-600">
                                                Booked on: {formatDate(booking.timestamp)}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => deleteBooking(booking.id)}
                                            className="text-red-400 hover:text-red-300 p-2 hover:bg-red-500/10 rounded transition-colors"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </motion.div>
                )}

                {/* Messages Tab */}
                {activeTab === 'messages' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        {messages.length === 0 ? (
                            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 text-center">
                                <MessageSquare className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
                                <p className="text-zinc-500">No messages yet</p>
                            </div>
                        ) : (
                            messages.map((message) => (
                                <div
                                    key={message.id}
                                    className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-coffee-500 transition-colors"
                                >
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="text-coffee-400 font-mono text-sm">{message.id}</span>
                                                    <span className={`px-2 py-1 rounded text-xs ${message.status === 'unread'
                                                        ? 'bg-blue-500/20 text-blue-400'
                                                        : 'bg-zinc-700 text-zinc-400'
                                                        }`}>
                                                        {message.status}
                                                    </span>
                                                </div>
                                                <h3 className="text-white font-semibold text-lg mb-2">{message.subject}</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-3">
                                                    <div>
                                                        <span className="text-zinc-500">From:</span>
                                                        <p className="text-white">{message.name}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-zinc-500">Email:</span>
                                                        <p className="text-white">{message.email}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-zinc-500">Phone:</span>
                                                        <p className="text-white">{message.phone}</p>
                                                    </div>
                                                </div>
                                                <div className="bg-black/40 p-4 rounded-lg">
                                                    <p className="text-zinc-300 text-sm leading-relaxed">{message.message}</p>
                                                </div>
                                                <div className="mt-3 text-xs text-zinc-600">
                                                    Received on: {formatDate(message.timestamp)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            {message.status === 'unread' && (
                                                <button
                                                    onClick={() => markMessageAsRead(message.id)}
                                                    className="flex items-center gap-2 text-green-400 hover:text-green-300 px-4 py-2 hover:bg-green-500/10 rounded transition-colors text-sm"
                                                >
                                                    <CheckCircle size={16} />
                                                    Mark as Read
                                                </button>
                                            )}
                                            <button
                                                onClick={() => deleteMessage(message.id)}
                                                className="flex items-center gap-2 text-red-400 hover:text-red-300 px-4 py-2 hover:bg-red-500/10 rounded transition-colors text-sm"
                                            >
                                                <Trash2 size={16} />
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </motion.div>
                )}

                {/* Subscribers Tab */}
                {activeTab === 'subscribers' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        {subscribers.length === 0 ? (
                            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 text-center">
                                <Users className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
                                <p className="text-zinc-500">No subscribers yet</p>
                            </div>
                        ) : (
                            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                                <table className="w-full">
                                    <thead className="bg-black/40">
                                        <tr>
                                            <th className="text-left p-4 text-zinc-400 font-medium text-sm">ID</th>
                                            <th className="text-left p-4 text-zinc-400 font-medium text-sm">Email</th>
                                            <th className="text-left p-4 text-zinc-400 font-medium text-sm">Subscribed On</th>
                                            <th className="text-left p-4 text-zinc-400 font-medium text-sm">Status</th>
                                            <th className="text-right p-4 text-zinc-400 font-medium text-sm">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subscribers.map((subscriber, index) => (
                                            <tr key={subscriber.id} className={index % 2 === 0 ? 'bg-black/20' : ''}>
                                                <td className="p-4 text-coffee-400 font-mono text-sm">{subscriber.id}</td>
                                                <td className="p-4 text-white">{subscriber.email}</td>
                                                <td className="p-4 text-zinc-400 text-sm">{formatDate(subscriber.timestamp)}</td>
                                                <td className="p-4">
                                                    <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                                                        {subscriber.status}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-right">
                                                    <button
                                                        onClick={() => deleteSubscriber(subscriber.id)}
                                                        className="text-red-400 hover:text-red-300 p-2 hover:bg-red-500/10 rounded transition-colors"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </motion.div>
                )}

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 flex flex-wrap justify-center gap-4"
                >
                    <button
                        onClick={() => {
                            const stats = addSampleData();
                            alert(`✅ Sample data added!\n\nBookings: ${stats.bookings}\nMessages: ${stats.messages}\nSubscribers: ${stats.subscribers}`);
                            loadData();
                        }}
                        className="flex items-center gap-2 bg-coffee-500 hover:bg-coffee-600 text-white px-6 py-3 rounded-lg transition-all"
                    >
                        <Database size={20} />
                        Add Sample Data
                    </button>

                    <button
                        onClick={() => {
                            const data = {
                                bookings,
                                messages,
                                subscribers,
                                exportedAt: new Date().toISOString()
                            };
                            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `doubleshot-data-${Date.now()}.json`;
                            a.click();
                        }}
                        className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-coffee-500 text-white px-6 py-3 rounded-lg transition-all"
                    >
                        Export All Data (JSON)
                    </button>

                    <button
                        onClick={() => {
                            if (clearAllData()) {
                                loadData();
                                alert('✅ All data cleared successfully!');
                            }
                        }}
                        className="flex items-center gap-2 bg-red-900/50 hover:bg-red-900 border border-red-800 hover:border-red-600 text-red-300 px-6 py-3 rounded-lg transition-all"
                    >
                        <Trash2 size={20} />
                        Clear All Data
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminPage;
