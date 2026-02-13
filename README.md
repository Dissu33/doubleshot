# DoubleShot Coffee Roasters - Fully Functional Frontend-Only Website

A premium, fully functional coffee shop website built with React, Vite, and Tailwind CSS. This website operates **completely without a backend**, using browser localStorage for all data persistence.

## 🌟 Features

### ✅ Fully Functional Without Backend
- **No server required** - All data is stored in browser localStorage
- **Persistent data** - Bookings, messages, and subscriptions persist across sessions
- **Export capability** - Download all data as JSON
- **Sample data** - Quickly populate with demo data for testing

### 🎯 Core Functionality

#### 1. **Table Booking System**
- Users can reserve tables with date, time, and guest count
- Unique booking IDs generated for each reservation
- Confirmation messages with booking details
- All bookings stored in localStorage
- View and manage bookings in admin panel

#### 2. **Contact Form**
- Full contact form with name, email, phone, subject, and message
- Unique message IDs for tracking
- Messages marked as read/unread
- All messages stored in localStorage
- Manage messages in admin dashboard

#### 3. **Newsletter Subscription**
- Email subscription with duplicate checking
- Subscriber management
- Active/inactive status tracking
- All subscribers stored in localStorage

#### 4. **Admin Dashboard** (`/admin`)
- View all bookings with details
- Read and manage contact messages
- View newsletter subscribers
- Mark messages as read
- Delete individual items
- Export all data as JSON
- Add sample data for testing
- Clear all data option

### 🎨 Design Features
- Modern, premium aesthetic with coffee-themed colors
- Smooth animations with Framer Motion
- Particle background effects
- Responsive design for all devices
- Glassmorphism and gradient effects
- Interactive hover states
- Page transitions

### 📄 Pages
- **Home** (`/`) - Hero section with features
- **Menu** (`/menu`) - Complete coffee and food menu
- **About** (`/about`) - Story, gallery, and testimonials
- **Contact** (`/contact`) - Location info and contact form
- **Admin** (`/admin`) - Dashboard for managing all data

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Double-shot
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 📊 Data Storage

All data is stored in browser localStorage with the following keys:

- `doubleshot_bookings` - Table reservations
- `doubleshot_messages` - Contact form submissions
- `doubleshot_subscribers` - Newsletter subscriptions

### Data Structure

#### Booking Object
```json
{
  "id": "BK1707890123456",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "date": "2026-02-20",
  "time": "19:00",
  "guests": "4",
  "timestamp": "2026-02-13T10:30:00.000Z",
  "status": "pending"
}
```

#### Message Object
```json
{
  "id": "MSG1707890345678",
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+91 98765 43211",
  "subject": "Inquiry",
  "message": "Message content here...",
  "timestamp": "2026-02-13T09:15:00.000Z",
  "status": "unread"
}
```

#### Subscriber Object
```json
{
  "id": "SUB1707890567890",
  "email": "subscriber@example.com",
  "timestamp": "2026-02-12T08:00:00.000Z",
  "status": "active"
}
```

## 🛠️ Admin Dashboard

Access the admin dashboard at `/admin` to:

1. **View Bookings** - See all table reservations with full details
2. **Manage Messages** - Read, mark as read, and delete contact messages
3. **View Subscribers** - See all newsletter subscribers
4. **Add Sample Data** - Quickly populate with demo data for testing
5. **Export Data** - Download all data as a JSON file
6. **Clear Data** - Remove all stored data (with confirmation)

### Admin Access
The admin link is subtly placed in the footer. Simply navigate to `/admin` or click the "Admin" link in the footer's Quick Links section.

## 🎨 Customization

### Colors
The coffee theme uses custom colors defined in `index.css`:
- `--color-coffee-*` - Various shades of brown/coffee colors
- Modify these in the CSS file to change the color scheme

### Menu Items
Edit `src/data/menuData.js` to update menu items, prices, and descriptions.

### Sample Data
Modify `src/utils/dataUtils.js` to customize the sample data used for testing.

## 📱 Features by Page

### Home Page
- Hero section with location and hours
- Feature cards highlighting key offerings
- Quick navigation to other pages
- Animated elements and particle background

### Menu Page
- Categorized menu items (Hot Coffee, Cold Coffee, Specialty, Tea & Others, Food)
- Prices in Indian Rupees (₹)
- Detailed descriptions
- Smooth animations on scroll

### About Page
- Company story and mission
- Statistics (years, varieties, customers)
- Photo gallery with hover effects
- Customer testimonials

### Contact Page
- Location information with map placeholder
- Contact details (address, phone, email, hours)
- Full contact form
- Newsletter subscription (in footer)

## 🔧 Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **localStorage** - Data persistence

## 📦 Project Structure

```
Double-shot/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── BookingModal.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── Navbar.jsx
│   │   ├── Newsletter.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── Testimonials.jsx
│   ├── pages/          # Page components
│   │   ├── AboutPage.jsx
│   │   ├── AdminPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   └── MenuPage.jsx
│   ├── data/           # Static data
│   │   └── menuData.js
│   ├── utils/          # Utility functions
│   │   └── dataUtils.js
│   ├── App.jsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🌐 Deployment

This is a static website and can be deployed to:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**
- Any static hosting service

### Vercel Deployment

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy (automatic build and deployment)

The `vercel.json` file is already configured for proper routing.

## 🔒 Data Privacy

Since all data is stored in the browser's localStorage:
- Data is **client-side only** and never sent to any server
- Each user only sees their own submissions in localStorage
- Data persists until the user clears browser data
- No cookies or tracking
- Completely private and secure

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, visit the contact page or reach out through the contact form on the website.

---

**Built with ☕ and ❤️ by the DoubleShot team**
