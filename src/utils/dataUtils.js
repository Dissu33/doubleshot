// Utility functions for managing localStorage data

export const addSampleData = () => {
    // Sample Bookings
    const sampleBookings = [
        {
            id: 'BK1707890123456',
            name: 'Rahul Sharma',
            email: 'rahul@example.com',
            phone: '+91 98765 43210',
            date: '2026-02-20',
            time: '19:00',
            guests: '4',
            timestamp: '2026-02-13T10:30:00.000Z',
            status: 'pending'
        },
        {
            id: 'BK1707890234567',
            name: 'Priya Singh',
            email: 'priya@example.com',
            phone: '+91 98765 43211',
            date: '2026-02-21',
            time: '18:30',
            guests: '2',
            timestamp: '2026-02-13T11:45:00.000Z',
            status: 'pending'
        }
    ];

    // Sample Messages
    const sampleMessages = [
        {
            id: 'MSG1707890345678',
            name: 'Amit Kumar',
            email: 'amit@example.com',
            phone: '+91 98765 43212',
            subject: 'Catering Services',
            message: 'Hi, I would like to know if you provide catering services for corporate events. We are planning an event for 50 people next month.',
            timestamp: '2026-02-13T09:15:00.000Z',
            status: 'unread'
        },
        {
            id: 'MSG1707890456789',
            name: 'Neha Patel',
            email: 'neha@example.com',
            phone: '+91 98765 43213',
            subject: 'Great Coffee!',
            message: 'Just wanted to say that your Nitro Cold Brew is absolutely amazing! Best coffee I have had in Mohali. Keep up the great work!',
            timestamp: '2026-02-13T12:30:00.000Z',
            status: 'read'
        }
    ];

    // Sample Subscribers
    const sampleSubscribers = [
        {
            id: 'SUB1707890567890',
            email: 'coffee.lover@example.com',
            timestamp: '2026-02-12T08:00:00.000Z',
            status: 'active'
        },
        {
            id: 'SUB1707890678901',
            email: 'mohali.foodie@example.com',
            timestamp: '2026-02-12T14:20:00.000Z',
            status: 'active'
        },
        {
            id: 'SUB1707890789012',
            email: 'brew.enthusiast@example.com',
            timestamp: '2026-02-13T07:45:00.000Z',
            status: 'active'
        }
    ];

    // Get existing data
    const existingBookings = JSON.parse(localStorage.getItem('doubleshot_bookings') || '[]');
    const existingMessages = JSON.parse(localStorage.getItem('doubleshot_messages') || '[]');
    const existingSubscribers = JSON.parse(localStorage.getItem('doubleshot_subscribers') || '[]');

    // Merge with sample data (avoid duplicates)
    const mergedBookings = [...existingBookings, ...sampleBookings.filter(
        sample => !existingBookings.some(existing => existing.id === sample.id)
    )];
    const mergedMessages = [...existingMessages, ...sampleMessages.filter(
        sample => !existingMessages.some(existing => existing.id === sample.id)
    )];
    const mergedSubscribers = [...existingSubscribers, ...sampleSubscribers.filter(
        sample => !existingSubscribers.some(existing => existing.id === sample.id)
    )];

    // Save to localStorage
    localStorage.setItem('doubleshot_bookings', JSON.stringify(mergedBookings));
    localStorage.setItem('doubleshot_messages', JSON.stringify(mergedMessages));
    localStorage.setItem('doubleshot_subscribers', JSON.stringify(mergedSubscribers));

    return {
        bookings: mergedBookings.length,
        messages: mergedMessages.length,
        subscribers: mergedSubscribers.length
    };
};

export const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear ALL data? This cannot be undone!')) {
        localStorage.removeItem('doubleshot_bookings');
        localStorage.removeItem('doubleshot_messages');
        localStorage.removeItem('doubleshot_subscribers');
        return true;
    }
    return false;
};

export const getDataStats = () => {
    const bookings = JSON.parse(localStorage.getItem('doubleshot_bookings') || '[]');
    const messages = JSON.parse(localStorage.getItem('doubleshot_messages') || '[]');
    const subscribers = JSON.parse(localStorage.getItem('doubleshot_subscribers') || '[]');

    return {
        bookings: bookings.length,
        messages: messages.length,
        unreadMessages: messages.filter(m => m.status === 'unread').length,
        subscribers: subscribers.length
    };
};
