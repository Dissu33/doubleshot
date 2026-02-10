# DoubleShot Coffee Roasters Website 🍵

A premium, aesthetic React frontend for DoubleShot Coffee Roasters in Mohali, Punjab.

## ✨ Features

### 🎨 Design & Aesthetics
- **Dark Coffee Theme**: Rich dark backgrounds with warm coffee-gold accents
- **Premium Typography**: Playfair Display for headings, Inter for body text
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Glassmorphism Effects**: Modern backdrop blur and transparency effects
- **Responsive Design**: Fully responsive across all devices

### 📱 Sections
1. **Hero Section**: Full-screen cinematic introduction with animated text
2. **Features**: Highlighting what makes DoubleShot special
3. **Interactive Menu**: Categorized menu with smooth tab transitions
   - Hot Coffee
   - Cold Coffee
   - Specialty Drinks
   - Tea & Others
   - Food Items
4. **Gallery**: Beautiful coffee photography with hover effects
5. **About Section**: Brand story and mission
6. **Testimonials**: Customer reviews with star ratings
7. **Locations**: Find us section with map placeholder
8. **Footer**: Contact info, social links, and quick navigation

### 🎯 Interactive Elements
- **Booking Modal**: Table reservation form with date/time picker
- **Sticky Navbar**: Changes appearance on scroll
- **Mobile Menu**: Smooth slide-in navigation for mobile devices
- **Hover Effects**: Interactive elements throughout the site
- **Smooth Scrolling**: Enhanced user experience

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173/` (or next available port)

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📝 Customization

### Update Menu Items
Edit `src/data/menuData.js` to modify menu items, prices, and descriptions.

### Change Colors
Modify the color palette in `src/index.css` under the `@theme` section:
```css
@theme {
  --color-coffee-400: #d4a373; /* Change this for primary accent */
  --color-coffee-500: #b08968; /* Change this for buttons */
  /* ... other colors */
}
```

### Update Images
Replace image URLs in components:
- `src/components/Hero.jsx` - Hero background
- `src/components/Gallery.jsx` - Gallery images
- `src/App.jsx` - About section image

### Modify Content
- **Contact Info**: Edit `src/components/Footer.jsx`
- **Testimonials**: Edit `src/components/Testimonials.jsx`
- **Features**: Edit `src/components/Features.jsx`

## 📂 Project Structure

```
Double-shot/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with booking button
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Features.jsx        # Features grid
│   │   ├── Menu.jsx            # Interactive menu
│   │   ├── Gallery.jsx         # Photo gallery
│   │   ├── Testimonials.jsx    # Customer reviews
│   │   ├── Footer.jsx          # Footer section
│   │   └── BookingModal.jsx    # Reservation modal
│   ├── data/
│   │   └── menuData.js         # Menu items data
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles & Tailwind config
├── index.html
├── package.json
└── postcss.config.js
```

## 🎨 Color Palette

- **Coffee 50**: `#fcfaf8` - Lightest cream
- **Coffee 400**: `#d4a373` - Latte gold (primary accent)
- **Coffee 500**: `#b08968` - Medium roast (buttons)
- **Coffee 700**: `#7f5539` - Espresso brown
- **Coffee 950**: `#2e1c14` - Almost black

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to customize and enhance this website for your needs!

## 📄 License

This project is open source and available for personal and commercial use.

---

**Built with ☕ and ❤️ for DoubleShot Coffee Roasters**
