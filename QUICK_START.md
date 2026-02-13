# Quick Start Guide - DoubleShot Coffee Roasters

## 🚀 Getting Started in 3 Steps

### Step 1: Start the Development Server
```bash
npm run dev
```
The site will be available at: `http://localhost:5173`

### Step 2: Explore the Website
Visit these pages:
- **Home** (`/`) - Main landing page
- **Menu** (`/menu`) - Browse coffee and food items
- **About** (`/about`) - Learn about DoubleShot
- **Contact** (`/contact`) - Get in touch and see location
- **Admin** (`/admin`) - Manage all data

### Step 3: Test the Features

#### 📅 Make a Booking
1. Click any "Book a Table" button
2. Fill in your details (name, email, phone, date, time, guests)
3. Submit the form
4. You'll get a confirmation with a booking ID
5. Check `/admin` to see your booking

#### 📧 Send a Message
1. Go to `/contact` page
2. Scroll to the contact form
3. Fill in all fields (name, email, phone, subject, message)
4. Submit the form
5. You'll get a confirmation with a message ID
6. Check `/admin` to see your message

#### 📬 Subscribe to Newsletter
1. Scroll to the footer (on any page)
2. Enter your email in the newsletter form
3. Click "Subscribe"
4. You'll see a success message
5. Check `/admin` to see your subscription

## 🎛️ Admin Dashboard Features

Navigate to `/admin` to access the dashboard:

### View Bookings Tab
- See all table reservations
- View customer details, date, time, and guest count
- Delete bookings
- See booking timestamps

### View Messages Tab
- Read all contact form submissions
- Mark messages as read/unread
- Delete messages
- See full message details

### View Subscribers Tab
- See all newsletter subscribers
- View subscription dates
- Delete subscribers
- See subscriber status

### Action Buttons
- **Add Sample Data** - Populate with demo data for testing
- **Export All Data** - Download everything as JSON
- **Clear All Data** - Remove all stored data (with confirmation)

## 💾 Data Persistence

All data is stored in your browser's localStorage:
- Open browser DevTools (F12)
- Go to Application/Storage tab
- Look for localStorage
- You'll see three keys:
  - `doubleshot_bookings`
  - `doubleshot_messages`
  - `doubleshot_subscribers`

## 🧪 Testing with Sample Data

1. Go to `/admin`
2. Click "Add Sample Data" button
3. Sample bookings, messages, and subscribers will be added
4. Explore the tabs to see the demo data
5. Use "Clear All Data" when you want to start fresh

## 📱 Mobile Testing

The site is fully responsive. Test on:
- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px)

All features work perfectly on all screen sizes!

## 🎨 Key Features to Notice

### Animations
- Smooth page transitions
- Hover effects on cards and buttons
- Scroll-triggered animations
- Particle background on home page

### Forms
- Real-time validation
- Loading states
- Success/error messages
- Unique ID generation

### Admin Panel
- Tabbed interface
- Real-time data updates
- Confirmation dialogs
- Data export functionality

## 🔍 Troubleshooting

### Data Not Saving?
- Check if localStorage is enabled in your browser
- Clear browser cache and try again
- Make sure you're not in incognito/private mode

### Admin Page Not Loading?
- Make sure you're navigating to `/admin`
- Check the footer for the "Admin" link
- Refresh the page

### Forms Not Submitting?
- Fill in all required fields
- Check browser console for errors
- Make sure JavaScript is enabled

## 🚀 Deployment

Ready to deploy? Run:
```bash
npm run build
```

Then deploy the `dist` folder to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting

## 📊 What's Stored Where

| Feature | localStorage Key | What's Stored |
|---------|-----------------|---------------|
| Table Bookings | `doubleshot_bookings` | Name, email, phone, date, time, guests |
| Contact Messages | `doubleshot_messages` | Name, email, phone, subject, message |
| Newsletter | `doubleshot_subscribers` | Email addresses |

## ✅ Checklist for Testing

- [ ] Book a table and see confirmation
- [ ] View booking in admin panel
- [ ] Send a contact message
- [ ] Mark message as read in admin
- [ ] Subscribe to newsletter
- [ ] View subscriber in admin
- [ ] Add sample data
- [ ] Export all data as JSON
- [ ] Clear all data
- [ ] Test on mobile device
- [ ] Test all page transitions
- [ ] Test form validations

## 🎉 You're All Set!

The website is now fully functional without any backend. Enjoy exploring all the features!

---

**Need Help?** Check the main README.md for detailed documentation.
